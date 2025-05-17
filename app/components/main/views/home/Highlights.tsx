'use client';

import React from 'react';
import styles from '../../styles/Hero.module.css';
import Image from 'next/image'

const Highlights = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={`${styles.textContainer} ${styles.cardContainer}`}>
                    <p className={`${styles.bodytext} ${styles.cardTitle}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-paintbrush-icon lucide-paintbrush">
                            <path d="m14.622 17.897-10.68-2.913"/>
                            <path
                                d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"/>
                            <path
                                d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"/>
                        </svg>
                        {
                            "100% personalizable"
                        }
                    </p>
                    <p className={styles.bodytext}>
                        {
                            "Compartenos tus ideas, y nosotros las convertiremos en una página web llena de amor."
                        }
                    </p>
                    <div className={styles.button}>
                        {'Start Your Journey'}
                    </div>
                </div>
                <div  className={`${styles.textContainer} ${styles.vs}`}>VS</div>
                <div className={`${styles.textContainer} ${styles.cardContainer}`}>
                    <p className={`${styles.bodytext} ${styles.cardTitle}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-clock-icon lucide-clock">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        {
                            "Entrega inmediata"
                        }
                    </p>
                    <p className={styles.bodytext}>
                        {
                            "Descubre plantillas preciosas y económicas para encontrar el estilo ideal de tu boda."
                        }
                    </p>
                    <div className={styles.button}>
                    {'Browse Templates'}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Highlights;
