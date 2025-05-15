'use client';

import React from 'react';
import styles from '../../styles/Hero.module.css';
import Image from 'next/image'

import localFont from 'next/font/local';

const anticDidone = localFont({ src: '/AnticDidone-Regular.ttf' })

const Hero = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.textContainer}>
                    <h3 className={styles.overheader}>HECHO A TU MEDIDA, ELEGANTE Y SIN COMPLICACIONES</h3>
                    <h1 className={`${styles.header} ${anticDidone.className}`}>Crea la invitacion de boda de tus sueños</h1>
                    <h3 className={styles.subheader}>Subheader</h3>

                    <p className={styles.bodytext}>
                        {"Convertimos tus ideas en algo único y lleno de amor."}
                        <br/>
                        {"Elige entre "}
                        <span className={styles.underline}>diseños personalizados</span>
                        {" o "}
                        <span className={styles.underline}>plantillas hermosas</span>
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
        </>
    );
};

export default Hero;
