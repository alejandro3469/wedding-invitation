'use client';

import React from 'react';
import styles from '../../styles/Hero.module.css';

import localFont from 'next/font/local';

const anticDidone = localFont({ src: '/AnticDidone-Regular.ttf' })

const Navigation = () => {
    return (
        <>
            <span className={styles.navigationButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                       className="lucide lucide-menu-icon lucide-menu">
                    <path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/>
                </svg>
            </span>
        </>
    );
};

export default Navigation;
