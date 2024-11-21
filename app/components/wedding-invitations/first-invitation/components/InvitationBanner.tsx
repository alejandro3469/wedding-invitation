import React from 'react';
import Image from 'next/image';
import styles from '../styles/InvitationBanner.module.css';
import {Karla, Montserrat, Montserrat_Alternates } from "next/font/google";
import Slider from './Slider';

import localFont from 'next/font/local';



const montserrat = Montserrat({
    weight: ['300'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

const karla = Karla({
    subsets: ["latin"],
});

const mon = localFont({ src: './Montserrat-VariableFont_wght.ttf' })

const InvitationBanner = () => {
    return (
        <section className={`${styles.banner}`}>
            <div>
                <div className={styles.banner_details}>
                    <img src="invitations-files/bride-and-groom/pexels-mathias-bruun-nielsen-176519853-25304390.jpg" alt="Example Image" />
                    <h1 className={`${styles.text_overlay} ${mon.className}`}>Jane & Jhon</h1>
                    <p className={`${styles.text_container}`}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit phasellus vel..
                    </p>
                </div>

            </div>
            <div>

            </div>
        </section>
    );
};

export default InvitationBanner;
