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
                        <svg className={styles.map} data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path>
                        </svg>
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
                    <p className={styles.accent}>
                        {
                            "Recepcion:"
                        }
                    </p>
                    <a href={"https://maps.app.goo.gl/V2nbhcbq34UYKdr27?g_st=iw"} className={styles.normal}>
                        {
                            "Jardín quinta los cerezos "
                        }
                    </a>
                    <p className={styles.normal}>
                        {
                            "privada la rosita \n" +
                            "#1492 arcadas 32543 "
                        }
                    </p>
                    <p className={styles.normal}>
                        {
                            "21:00pm a 2:00am"
                        }
                    </p>
                </div>
            </section>

            <section className={`${styles.initialsSectionContainer}`}>
                <div className={`${styles.quoteText} ${lora.variable}`}>
                    <p className={styles.accent}>
                        {
                            "Codigo de vestimenta:"
                        }
                    </p>
                    <p className={styles.normal}>
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
                    <a href={"https://mesaderegalos.liverpool.com.mx/milistaderegalos/51630326"} className={styles.normal}>
                        {
                            "Mesa de regalos"
                        }
                    </a>
                    <p className={styles.normal}>
                        {
                            "Por favor evita los siguienes colores"
                        }
                    </p>
                </div>
            </section>

            <section className={`${styles.initialsSectionContainer}`}>
                <div className={`${styles.quoteText} ${lora.variable}`}>
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
