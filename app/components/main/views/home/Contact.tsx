'use client';

import styles from '../../styles/Hero.module.css';

import React from 'react';
import { styled } from '@mui/material';

const OuterContainer = styled('div')({
    display: 'inline-block',
    padding: '8px',
    borderRadius: '8px',
    background: 'rgba(45, 107, 77, 0.32)', // Very transparent background
});

const InnerButton = styled('button')({
    padding: '12px 24px',
    borderRadius: '4px',
    backgroundColor: '#2D6B4D',
    color: 'white',
    border: 'none',
    fontSize: '16px',
    fontWeight: 500,
    cursor: 'pointer',
    display: 'flex', // Changed from 'block' to 'flex'
    alignItems: 'center', // Vertically center items
    justifyContent: 'center', // Horizontally center items
    gap: '8px', // Adds space between icon and text
    width: '100%',
    transition: 'background-color 0.2s ease',

    '&:hover': {
        backgroundColor: '#013220',
    },
});

// Todo: Add funtion to send message (whatsapp api)


const Contact = () => {
    return (
        <div className={styles.textContainer}>
            <p className={`${styles.bodytext}`}>Escríbenos por WhatsApp y creemos juntos tu invitación!</p>
            <OuterContainer>
                <InnerButton>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="lucide lucide-send-icon lucide-send">
                        <path
                            d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/>
                        <path d="m21.854 2.147-10.94 10.939"/>
                    </svg>
                    Contacto
                </InnerButton>
            </OuterContainer>
        </div>
    );
};

export default Contact;
