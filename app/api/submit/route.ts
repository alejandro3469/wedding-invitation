import { NextRequest, NextResponse } from "next/server";
import formidable, { File, Fields } from "formidable";
import { Readable } from "stream";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";
import fs from "fs/promises";
import { IncomingMessage } from "http"; // Importa correctamente IncomingMessage de Node.js.

// Configuración de carpeta de subida y formulario formidable
const uploadFolder = "./uploads";
const form = formidable({
    multiples: true,
    uploadDir: uploadFolder,
    keepExtensions: true,
});

// Convertir ReadableStream de Next.js a Node.js Readable
function readableStreamToNodeStream(readableStream: ReadableStream<Uint8Array> | null): Readable {
    if (!readableStream) {
        throw new Error("ReadableStream is null");
    }
    const reader = readableStream.getReader();
    return new Readable({
        async read() {
            const { done, value } = await reader.read();
            this.push(done ? null : Buffer.from(value));
        },
    });
}

// Convertir el flujo Node.js en un objeto IncomingMessage
function createFakeIncomingMessage(nodeStream: Readable, headers: Headers): IncomingMessage {
    const incomingMessage = Object.assign(nodeStream, {
        headers: Object.fromEntries(headers.entries()), // Convertir Headers (Next.js) a un objeto plano
        method: "POST", // Asumimos que es un POST
        url: "/", // Puedes ajustar esto según tu endpoint
        socket: {}, // Suministramos un objeto vacío para `formidable`
    }) as unknown as IncomingMessage;

    return incomingMessage;
}

// Parsear formulario usando formidable
async function parseForm(req: NextRequest): Promise<{ fields: Fields; files: Record<string, File> }> {
    const nodeStream = readableStreamToNodeStream(req.body); // Convertir ReadableStream a Node.js Readable
    const fakeRequest = createFakeIncomingMessage(nodeStream, req.headers); // Crear un IncomingMessage falso

    return new Promise((resolve, reject) => {
        form.parse(fakeRequest, (err, fields, files) => {
            if (err) {
                reject(err);
                return;
            }

            // Crear un objeto de tipo Record<string, File>
            const formattedFiles: Record<string, File> = Object.entries(files).reduce((acc, [key, value]) => {
                if (Array.isArray(value)) {
                    acc[key] = value[0]; // Tomar el primer archivo del array
                } else if (value) {
                    acc[key] = value;
                }
                return acc;
            }, {} as Record<string, File>);

            resolve({ fields, files: formattedFiles });
        });
    });
}

// Deshabilitar el bodyParser predeterminado en Next.js (necesario para formidable)
export const config = {
    api: {
        bodyParser: false,
    },
};

// Handler principal para la ruta POST
export async function POST(req: NextRequest) {
    try {
        // Asegurarse de que la carpeta de cargas exista
        await fs.mkdir(uploadFolder, { recursive: true });

        // Parsear los datos del formulario
        const { fields, files } = await parseForm(req);

        // Procesar y guardar los archivos subidos localmente
        const uploadedFilePaths = await Promise.all(
            Object.values(files).map(async (file) => {
                const newFilePath = `${uploadFolder}/${uuidv4()}-${file.originalFilename}`;
                await fs.rename(file.filepath, newFilePath);
                return newFilePath;
            })
        );

        // Validar los campos recibidos; manejar casos donde el campo es un array
        const email = Array.isArray(fields.email) ? fields.email[0] : fields.email || "default@example.com";
        const name = Array.isArray(fields.name) ? fields.name[0] : fields.name || "No Name";
        const weddingDate = Array.isArray(fields.weddingDate) ? fields.weddingDate[0] : fields.weddingDate || "Unknown";
        const notes = Array.isArray(fields.notes) ? fields.notes[0] : fields.notes || "None";

        // Configurar transporte de nodemailer
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Enviar correo con los archivos adjuntos
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: `New Submission: ${name}`,
            text: `Details:\nName: ${name}\nWedding Date: ${weddingDate}\nNotes: ${notes}`,
            attachments: uploadedFilePaths.map((path) => ({
                filename: path.split("/").pop() || "unknown",
                path,
            })),
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Form submitted successfully!" });
    } catch (error) {
        console.error("Error handling the request:", error);
        return NextResponse.json({ message: "An error occurred during form submission." }, { status: 500 });
    }
}