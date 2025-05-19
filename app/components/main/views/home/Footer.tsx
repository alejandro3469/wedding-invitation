import React from 'react';
import styles from '../../styles/Hero.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.footer} ${styles.containerDark}`}>
            <div className={styles.footerContent}>
                <div className={styles.socialLinks}>
                    <a href="https://instagram.com" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                        </svg>
                    </a>
                    <a href="https://facebook.com" aria-label="Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                        </svg>
                    </a>
                </div>

                <div className={styles.footerText}>
                    <p>Celebrando el amor desde 2025</p>
                    <p>© {new Date().getFullYear()} Leleupiinvite. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;