import React, { useState, ChangeEvent, FormEvent } from "react";

const SubmissionForm: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [name, setName] = useState<string>("");
    const [weddingDate, setWeddingDate] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [notes, setNotes] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFiles(Array.from(event.target.files));
        }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        // Crear el FormData con los datos del formulario
        const formData = new FormData();
        formData.append("name", name);
        formData.append("weddingDate", weddingDate);
        formData.append("email", email);
        formData.append("notes", notes);

        files.forEach((file) => formData.append("files", file));

        try {
            // Hacer la solicitud POST a la API
            const response = await fetch("/api/submit", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Submission successful!");
                // Resetear el formulario si es necesario
                setName("");
                setWeddingDate("");
                setEmail("");
                setNotes("");
                setFiles([]);
            } else {
                alert("There was a problem with the submission.");
            }
        } catch (error) {
            console.error("Error during submission:", error);
            alert("An unexpected error occurred.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section>
            <h1>Submission Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Your Full Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="weddingDate">Wedding Date:</label>
                <input
                    type="date"
                    id="weddingDate"
                    name="weddingDate"
                    value={weddingDate}
                    onChange={(e) => setWeddingDate(e.target.value)}
                    required
                />

                <label htmlFor="email">Email Address:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="files">Upload Files:</label>
                <input
                    type="file"
                    id="files"
                    name="files"
                    multiple
                    onChange={handleFileChange}
                />

                <label htmlFor="notes">Notes:</label>
                <textarea
                    id="notes"
                    name="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </form>
        </section>
    );
};

export default SubmissionForm;