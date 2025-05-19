'use client';

import React from 'react';
import styles from '../../styles/Hero.module.css';
import Image from 'next/image'

import localFont from 'next/font/local';

const anticDidone = localFont({ src: '/AnticDidone-Regular.ttf' })

const Hero = () => {
    return (
        <div className={styles.sectionContainer}>
            <section className={styles.container}>
                <div className={styles.textContainer}>
                    <h3 className={styles.overheader}>HECHO A TU MEDIDA, ELEGANTE Y SIN COMPLICACIONES</h3>
                    <h1 className={`${styles.header} ${anticDidone.className}`}>Crea la invitación de boda de tus sueños</h1>
                    <h3 className={styles.subheader}>Subheader</h3>
                    <i className={styles.TextPlusIcon}>
                        {"Tu invitación en un click"}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-mouse-pointer-click-icon lucide-mouse-pointer-click">
                            <path d="M14 4.1 12 6"/>
                            <path d="m5.1 8-2.9-.8"/>
                            <path d="m6 12-1.9 2"/>
                            <path d="M7.2 2.2 8 5.1"/>
                            <path
                                d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/>
                        </svg>
                    </i>
                    <p className={styles.bodytext}>
                        {"Elige entre "}
                        <span className={styles.underline}>diseños personalizados</span>
                        {" ó "}
                        <span className={styles.underline}>plantillas hermosas.</span>
                    </p>
                </div>
            </section>
            <section className={styles.container}>
                <div className={styles.ovalWrapper}>
                <Image
                        src="/hero/jocelyn-allen-L4E-aN798wA-unsplash.jpg"
                        alt="Oval Image"
                        width={1200}
                        height={600}
                        className={styles.ovalImage}
                    />
                </div>
            </section>
        </div>
    );
};

export default Hero;
