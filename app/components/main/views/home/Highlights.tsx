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
                            "Share your ideas, photos, and drawings with us, " +
                            "and we'll craft a website that reflects your unique love story."
                        }
                    </p>
                    <div className={styles.button}>
                        {'Start Your Journey'}
                    </div>
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.bodytext}>
                        {
                            "Browse our collection of beautiful, " +
                            "affordable templates and find the perfect match for your wedding"
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
