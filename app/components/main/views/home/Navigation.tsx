'use client';

import React, { useState } from 'react';
import styles from '../../styles/Hero.module.css';
import localFont from 'next/font/local';

const anticDidone = localFont({ src: '/AnticDidone-Regular.ttf' });

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <span className={styles.navigationButton} onClick={toggleMenu}>
                {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="lucide lucide-x-icon lucide-x">
                        <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="lucide lucide-menu-icon lucide-menu">
                        <path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/>
                    </svg>
                )}
            </span>

            {/* Full-page menu overlay */}
            <div className={`${styles.menuOverlay} ${isMenuOpen ? styles.menuOpen : ''}`}>
                <nav className={`${styles.menuContent} ${anticDidone.className}`}>
                    <a href="/" className={styles.menuItem} onClick={() => setIsMenuOpen(false)}>Home</a>
                    <a href="/#" className={styles.menuItem} onClick={() => setIsMenuOpen(false)}>About</a>
                    <a href="/#" className={styles.menuItem} onClick={() => setIsMenuOpen(false)}>Services</a>
                    <a href="/#" className={styles.menuItem} onClick={() => setIsMenuOpen(false)}>Contact</a>
                </nav>
            </div>
        </>
    );
};

export default Navigation;