'use client';

import React from 'react';
import styles from '../../styles/Hero.module.css';
import Image from 'next/image'

const Highlights = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.textContainer}>
                    <p className={styles.bodytext}>
                        {
                            "Compartenos tus ideas, y nosotros las convertiremos en una página web llena de amor."
                        }
                    </p>
                    <div className={styles.button}>
                        {'Start Your Journey'}
                    </div>
                </div>
                <div className={styles.textContainer}>
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
