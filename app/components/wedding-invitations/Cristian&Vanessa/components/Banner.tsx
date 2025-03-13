"use client";

import React from 'react';
import Image from 'next/image';
import styles from '../styles/Banner.module.css';
import { useEffect } from 'react';

import localFont from 'next/font/local';

const greatVibes = localFont({
    src: [
        {
            path: '/GreatVibes-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-great-vibes',
});

const lora = localFont({
    src: [
        {
            path: '/Lora-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-lora',
});


const Banner = () => {

    // invitations-files/Cristian&Vanessa/IMG_0498.jpeg

    useEffect(() => {
        const handleScroll = () => {
            const bannerImage = document.querySelector(`.${styles.bannerImage}`) as HTMLElement;
            const scrollPosition = window.scrollY;
            bannerImage.style.transform = `translateY(${scrollPosition * 0.3}px) scale(${1 + scrollPosition * 0.0005})`;
            bannerImage.style.filter = `blur(${scrollPosition * 0.01}px)`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>

            <div className={styles.bannerContainer}>
                <div className={styles.banner}>
                    <div className={styles.bannerImage}>
                        <div className={styles.flowers}>
                            <Image
                                src="/invitations-files/Cristian&Vanessa/flowers.svg"
                                alt="Banner Image"
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                        </div>
                        <Image
                            src="/invitations-files/Cristian&Vanessa/IMG_0498.jpeg"
                            alt="Banner Image"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
            </div>


            <section className={`${styles.initialsSectionContainer}`}>
                <section className={`${styles.initialsContainer}`}>
                    <div className={`${styles.initialsLetters} ${greatVibes.variable}`}>
                        <div className={styles.initials}>
                            <span className={styles.letter}>C</span>
                            <span className={styles.ampersand}>&</span>
                            <span className={styles.letter}>V</span>
                        </div>
                    </div>
                </section>
                <div className={`${styles.quoteText} ${lora.variable}`}>
                    <p className={styles.accent}>
                        {
                            "\"En un mundo lleno de momentos fugaces, " +
                            "hemos encontrado un amor que perdura\""
                        }
                    </p>
                    <p className={styles.secondary}>
                        {
                            "Queremos compartir con ustedes este momento tan especial " +
                            "y celebrar juntos la unión de nuestras vidas"
                        }
                    </p>
                </div>
            </section>

            <div className={styles.bannerContainer}>
                <div className={styles.banner}>
                    <div className={styles.bannerImage}>
                        <Image
                            src="/invitations-files/Cristian&Vanessa/IMG_0499.jpeg"
                            alt="Banner Image"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
            </div>


            <section className={`${styles.initialsSectionContainer}`}>
                <div className={`${styles.quoteText} ${lora.variable}`}>
                    <svg className={styles.icon} data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"></path>
                    </svg>
                    <p className={styles.normal}>
                        {
                            "Los esperamos el dia:"
                        }
                    </p>
                    <p className={styles.accent}>
                        {
                            "Sabado 03 de Mayo de 2025"
                        }
                    </p>
                </div>
            </section>

            <div className={styles.bannerContainer}>
                <div className={styles.banner}>
                    <div className={styles.bannerImage}>
                        <Image
                            src="/invitations-files/Cristian&Vanessa/IMG_0500.jpeg"
                            alt="Banner Image"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            <section className={`${styles.initialsSectionContainer}`}>
                <div className={`${styles.quoteText} ${lora.variable}`}>
                    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M344 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 46.4L183.3 210c-14.5 8.7-23.3 24.3-23.3 41.2L160 512l96 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96 96 0 0-260.8c0-16.9-8.8-32.5-23.3-41.2L344 142.4 344 96l32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-24zM24.9 330.3C9.5 338.8 0 354.9 0 372.4L0 464c0 26.5 21.5 48 48 48l80 0 0-238.4L24.9 330.3zM592 512c26.5 0 48-21.5 48-48l0-91.6c0-17.5-9.5-33.6-24.9-42.1L512 273.6 512 512l80 0z"/></svg>
                    <p className={styles.normal}>
                        {
                            "Ceremonia religiosa"
                        }
                    </p>
                    <p className={styles.accent}>
                        {
                            " iglesia san Lorenzo "
                        }
                    </p>
                    <b className={styles.normal}>
                        {
                            "13:00 pm "
                        }
                    </b>
                    <a href={"https://maps.app.goo.gl/gn5toBJnMNhyna5G6?g_st=iw"} className={`${styles.normal} ${styles.link}`}>
                        {
                            "Av. Valle de Juárez, San Lorenzo 32320 "
                        }
                    </a>

                </div>
            </section>

            <div className={styles.bannerContainer}>
                <div className={styles.banner}>
                    <div className={styles.bannerImage}>
                        <Image
                            src="/invitations-files/Cristian&Vanessa/IMG_0501.jpeg"
                            alt="Banner Image"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            <section className={`${styles.initialsSectionContainer}`}>
                <div className={`${styles.quoteText} ${lora.variable}`}>
                    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M155.6 17.3C163 3 179.9-3.6 195 1.9L320 47.5l125-45.6c15.1-5.5 32 1.1 39.4 15.4l78.8 152.9c28.8 55.8 10.3 122.3-38.5 156.6L556.1 413l41-15c16.6-6 35 2.5 41 19.1s-2.5 35-19.1 41l-71.1 25.9L476.8 510c-16.6 6.1-35-2.5-41-19.1s2.5-35 19.1-41l41-15-31.3-86.2c-59.4 5.2-116.2-34-130-95.2L320 188.8l-14.6 64.7c-13.8 61.3-70.6 100.4-130 95.2l-31.3 86.2 41 15c16.6 6 25.2 24.4 19.1 41s-24.4 25.2-41 19.1L92.2 484.1 21.1 458.2c-16.6-6.1-25.2-24.4-19.1-41s24.4-25.2 41-19.1l41 15 31.3-86.2C66.5 292.5 48.1 226 76.9 170.2L155.6 17.3zm44 54.4l-27.2 52.8L261.6 157l13.1-57.9L199.6 71.7zm240.9 0L365.4 99.1 378.5 157l89.2-32.5L440.5 71.7z"/></svg>
                    <p className={styles.normal}>
                        {
                            "Recepcion:"
                        }
                    </p>
                    <p className={styles.accent}>
                        {
                            "Jardín quinta los cerezos"
                        }
                    </p>
                    <a href={"https://maps.app.goo.gl/V2nbhcbq34UYKdr27?g_st=iw"} className={`${styles.normal} ${styles.link}`}>
                        {
                            "privada la rosita \n" +
                            "#1492 arcadas 32543 "
                        }
                    </a>
                    <b className={styles.normal}>
                        {
                            "21:00pm a 2:00am"
                        }
                    </b>
                </div>
            </section>

            <section className={`${styles.initialsSectionContainer}`}>
                <div className={`${styles.quoteText} ${lora.variable}`}>
                    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM88 384l-17.8 0c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3l11.6 0c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9l-33.9-56.3L265 362.9c3.5 10.4-4.3 21.1-15.2 21.1L232 384l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-16 0 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96z"/></svg>
                    <p className={styles.normal}>
                        {
                            "Codigo de vestimenta:"
                        }
                    </p>
                    <p className={styles.accent}>
                        {
                            "Formal"
                        }
                    </p>
                    <p className={styles.normal}>
                        {
                            "Hagamos que todo luzca como siempre lo soñamos"
                        }
                    </p>
                    <p className={styles.normal}>
                        {
                            "Por favor evita los siguienes colores"
                        }
                    </p>
                </div>
            </section>


            <section className={`${styles.initialsSectionContainer}`}>
                <div className={`${styles.quoteText} ${lora.variable}`}>
                    <svg className={styles.icon} data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"></path>
                    </svg>
                    <p className={styles.accent}>
                        {
                            "El gran regalo es contar con tu presencia"
                        }
                    </p>
                    <p className={styles.normal}>
                        {
                            "Pero si tu deseo es contribuir con nuestra felicidad estaremos muy agradecidos"
                        }
                    </p>
                    <a href={"https://mesaderegalos.liverpool.com.mx/milistaderegalos/51630326"} className={`${styles.normal} ${styles.link}`}>
                        {
                            "Mesa de regalos"
                        }
                    </a>
                </div>
            </section>

            <section className={`${styles.initialsSectionContainer}`}>
                <div className={`${styles.quoteText} ${lora.variable}`}>
                    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                    <p className={styles.accent}>
                        {
                            "¿Contamos contigo?"
                        }
                    </p>
                    <p className={styles.normal}>
                        {
                            "Porfavor confirma tu asistencia por Whatsapp"
                        }
                    </p>
                    <p className={styles.normal}>
                        {
                            "Queremos que nuestra boda sea una noche especial para que todos se relajen y disfruten. " +
                            "Por ello, hemos decidido que el evento sea solo para adultos. " +
                            "¡Esperamos celebrar con ustedes!"
                        }
                    </p>
                </div>
            </section>

            <section className={`${styles.initialsSectionContainer}`}>
                <div className={`${styles.quoteText} ${lora.variable}`}>
                    <p className={styles.accent}>
                        {
                            "Te esperamos!"
                        }
                    </p>
                </div>
            </section>
        </>
    );
};

export default Banner;
