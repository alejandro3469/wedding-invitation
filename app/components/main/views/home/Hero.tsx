'use client';

import React from 'react';
import styles from '../../styles/Hero.module.css';
import Image from 'next/image'

import localFont from 'next/font/local';
import {display} from "@mui/system";

const anticDidone = localFont({ src: '/AnticDidone-Regular.ttf' })

const Hero = () => {
    return (
        <div className={styles.sectionContainer}>
            <div className={styles.textContainer}>
                <div className={`${styles.logo}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="lucide lucide-fish-icon lucide-fish">
                        <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"/>
                        <path d="M18 12v.5"/>
                        <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/>
                        <path
                            d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"/>
                        <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"/>
                        <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"/>
                    </svg>
                    <span>Leleupi<span className={styles.bold}>invite</span></span>
                </div>
            </div>
            <section className={styles.container}>
                <div className={styles.textContainer}>
                    <h3 className={styles.overheader}>
                        <i className={styles.TextPlusIcon}>
                            {"Tu invitación en un click"}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none"
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
                    </h3>
                    <h1 className={`${styles.header} ${anticDidone.className}`}>Crea la invitación de boda de tus sueños</h1>
                    <h3 className={styles.subheader}>Subheader</h3>
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
