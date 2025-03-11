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
                    <p className={styles.normal}>
                        {
                            "Los esperamos el dia:"
                        }
                    </p>
                    <p className={styles.normal}>
                        {
                            "03 de Mayo de 2025"
                        }
                    </p>
                    <p className={styles.normal}>

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
                    <p className={styles.accent}>
                        {
                            "Ceremonia religiosa:"
                        }
                    </p>
                    <p className={styles.normal}>
                        {
                            " iglesia san Lorenzo "
                        }
                    </p>
                    <a href={"https://maps.app.goo.gl/gn5toBJnMNhyna5G6?g_st=iw"} className={styles.normal}>
                        {
                            " Dirección av valle de Juárez , san Lorenzo 32320 "
                        }
                    </a>
                    <p className={styles.normal}>
                        {
                            "13:00 pm "
                        }
                    </p>
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
