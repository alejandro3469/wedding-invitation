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
                    <h3 className={styles.overheader}>Personalized, Beautiful, and Stress-Free</h3>
                    <h1 className={`${styles.header} ${anticDidone.className}`}>Create Your Dream Wedding Website</h1>
                    <h3 className={styles.subheader}>Subheader</h3>

                    <p className={styles.bodytext}>
                        {
                            "We turn your wedding vision into a stunning reality. " +
                            "Whether you want a custom design or a ready-made template, " +
                            "we have the perfect solution for you."
                        }
                    </p>
                </div>
                <div className={styles.ovalWrapper}>
                    <Image
                        src="/hero/andres-molina-P-skRAwsBsI-unsplash.jpg"
                        alt="Oval Image"
                        width={1200}
                        height={600}
                        className={styles.ovalImage}
                    />
                </div>
                <span className={styles.dark} />
            </section>
        </>
    );
};

export default Hero;
