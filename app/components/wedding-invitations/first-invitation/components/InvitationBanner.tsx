"use client";

import React from 'react';
import Image from 'next/image';
import styles from '../styles/InvitationBanner.module.css';
import localFont from 'next/font/local';
import { useEffect } from 'react';



const Montserrat = localFont({ src: './Montserrat-VariableFont_wght.ttf' })
const Karla = localFont({ src: './Karla-VariableFont_wght.ttf' })

const InvitationBanner = () => {

    useEffect(() => { const handleScroll = () => { const parallaxImage = document.querySelector(`.${styles.parallaxImage}`) as HTMLElement; if (parallaxImage) { const scrollPosition = window.pageYOffset; const parallaxSpeed = 0.4; const offset = scrollPosition * parallaxSpeed; parallaxImage.style.transform = `translateY(${offset}px)`; } }; window.addEventListener('scroll', handleScroll); return () => { window.removeEventListener('scroll', handleScroll); }; }, []);
  
    return (
        <section className={`${styles.banner}`}>
            <div>
                <div className={styles.banner_details}>
                    <Image
                        className={`${styles.image} ${styles.large_image}`}
                        width={280} height={420} src="/invitations-files/bride-and-groom/pexels-yulia-polyakova-73722901-10095638.jpg"
                        alt="Couple portrait" 
                    />
                    <Image
                        className={`${styles.image} ${styles.small_image}`}
                        width={240} height={360} src="/invitations-files/bride-and-groom/pexels-yulia-polyakova-73722901-10095638.jpg"
                        alt="Couple portrait" 
                    />
                    <span className={styles.image_overlay} />
                    <h1 className={`${styles.text_overlay} ${Montserrat.className}`}>Jane & Jhon</h1>
                    <p className={`${styles.text_container} ${Karla.className}`}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit phasellus vel.
                    </p>
                </div>

            </div>
            <div className={styles.parallaxContainer}>
                <Image
                    src="/invitations-files/bride-and-groom/pexels-mart-production-9566414.jpg"
                    alt="Couple portrait"
                    fill={true}
                    objectFit='cover'
                    className={styles.parallaxImage}
                />
            </div>
        </section>
    );
};

export default InvitationBanner;
