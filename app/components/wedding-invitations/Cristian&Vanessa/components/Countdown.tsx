"use client";

import React from 'react';
import Image from 'next/image';
import styles from '../styles/Countdown.module.css';
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


const Countdown = () => {

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
            <section className={`${styles.initialsSectionContainer}`}>
                <div className={`${styles.quoteText} ${lora.variable}`}>
                    <p className={styles.normal}>
                        {
                            "Pasamos la vida buscándonos sin encontrarnos.\n " +
                            "Un día, la casualidad hizo que nos conociéramos\n " +
                            "y diez años después queremos celebrar nuestro día más especial con vosotros"
                        }
                    </p>
                    <p className={styles.normal}>
                        {
                            "Los esperamos el dia: Sabado 16 de noviembre"
                        }
                    </p>
                    <p className={styles.normal}>

                    </p>
                </div>
            </section>
        </>
    );
};

export default Countdown;
