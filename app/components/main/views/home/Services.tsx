'use client';

import React from 'react';
import styles from '../../styles/Hero.module.css';
import { useState } from 'react';


const Highlights = () => {
    const [isTemplatesOpen, setIsTemplatesOpen] = useState(false);
    const [isCustomOpen, setIsCustomOpen] = useState(false);
    const [isExtraOpen, setIsExtraOpen] = useState(false);
    const [isInteractiveOpen, setIsInteractiveOpen] = useState(false);

    const toggleOpen = (section: string) => {
        switch (section) {
            case "templates":
                setIsTemplatesOpen(!isTemplatesOpen);
                break;
            case "custom":
                setIsCustomOpen(!isCustomOpen);
                break;
            case "extra":
                setIsExtraOpen(!isExtraOpen);
                break;
            case "interactive":
                setIsInteractiveOpen(!isInteractiveOpen);
                break;
            default:
                console.warn(`Unknown section: ${section}`);
        }
    };


    return (
        <>

            <section className={styles.container} style={{marginBottom: "32px"}}>
                <h3 className={`${styles.textContainer} ${styles.sectionTitle}`}>Servicios</h3>
                <div className={styles.dropdownsSection}>
                    <div className={styles.dropdownContainer}>
                        <h5 className={`${styles.dropdownTitle}`} onClick={() => toggleOpen("templates")}>
                            Template Options
                            {!isTemplatesOpen ? chevronDown() : chevronUp()}
                        </h5>
                        {isTemplatesOpen && (
                            <div className={`${styles.dropdownElement}`}>
                                <div>
                                    <h2 className="headline text-accent">Beautiful Templates for Every Style</h2>
                                    <h4 className="subheadline text-muted">Affordable and Ready to Go</h4>
                                    <p className="description">
                                        {
                                            "Explore our collection of stunning wedding website templates, " +
                                            "designed to suit every taste and theme. " +
                                            "Each template is fully customizable, allowing you to add your personal touch."
                                        }
                                    </p>
                                </div>
                                <ul>
                                    <li>
                                        <p>Template 1: Elegant Romance</p>
                                        <p>{
                                            "A classic design with elegant fonts and romantic imagery, " +
                                            "perfect for a timeless wedding."
                                        }</p>
                                    </li>
                                </ul>
                                <div>
                                    <div className={styles.button}>Choose Your Template</div>
                                    <p>
                                        {
                                            "Find the perfect template for your wedding and start customizing it today."
                                        }
                                    </p>
                                </div>
                            </div>)
                        }
                    </div>
                    <div className={styles.dropdownContainer}>
                        <h5 className={`${styles.dropdownTitle}`} onClick={() => toggleOpen("custom")}>
                            Custom Websites
                            {!isCustomOpen ? chevronDown() : chevronUp()}
                        </h5>
                        {isCustomOpen && (
                            <div className={`${styles.dropdownElement}`}>
                                <h6>
                                    {
                                        "Headline: Fully Custom Wedding Websites"
                                    }
                                </h6>
                                <p>
                                    {
                                        "Subheadline: Tailored to Your Unique Vision"
                                    }
                                </p>
                                <p>
                                    {
                                        "Our custom wedding websites are designed from scratch to reflect your unique love story. " +
                                        "Share your ideas, photos, and drawings with us, " +
                                        "and we'll create a website that perfectly matches your vision."
                                    }
                                </p>

                                <div>
                                    <button>Get Started with a Custom Website</button>
                                    <p>
                                        {
                                            "Contact us today to begin the journey towards your dream wedding website"
                                        }
                                    </p>
                                </div>
                            </div>)
                        }
                    </div>

                    <div className={styles.dropdownContainer}>
                        <h5 className={`${styles.dropdownTitle}`} onClick={() => toggleOpen("extra")}>
                            Custom Additional Sections
                            {!isExtraOpen ? chevronDown() : chevronUp()}
                        </h5>
                        {isExtraOpen && (
                            <div className={`${styles.dropdownElement}`}>
                                <h6>
                                    {
                                        "Headline: Enhance Your Wedding Website"
                                    }
                                </h6>
                                <p>
                                    {
                                        "Subheadline: Add Personalized Sections"
                                    }
                                </p>
                                <p>
                                    {
                                        "Description: Make your wedding website truly unique by adding custom sections that reflect your personality and style. " +
                                        "Each custom section is designed to seamlessly integrate with your website."
                                    }
                                </p>
                                <div>
                                    <p>Examples of Interactive Features:</p>
                                    <ul>
                                        <li>Guestbook: Allow guests to leave messages and well-wishes.</li>
                                        <li>RSVP Form: Simplify the RSVP process with an easy-to-use form.</li>
                                        <li>Countdown Timer: Build excitement with a countdown to your big day.</li>
                                        <li>Quiz or Poll: Engage guests with fun quizzes or polls related to your wedding.</li>
                                    </ul>
                                </div>

                                <div>
                                    <button>Add Custom Sections</button>
                                    <p>
                                        {
                                            "Enhance your website with personalized sections. Contact us to get started."
                                        }
                                    </p>
                                </div>
                            </div>)
                        }
                    </div>

                    <div className={styles.dropdownContainer}>
                        <h5 className={`${styles.dropdownTitle}`} onClick={() => toggleOpen("interactive")}>
                            Custom Interactive Elements
                            {!isInteractiveOpen ? chevronDown() : chevronUp()}
                        </h5>
                        {isInteractiveOpen && (
                            <div className={`${styles.dropdownElement}`}>
                                <h6>
                                    {
                                        "Headline: Engage Your Guests"
                                    }
                                </h6>
                                <p>
                                    {
                                        "Subheadline: Add Interactive Features"
                                    }
                                </p>
                                <p>
                                    {
                                        "Description: Boost engagement and create memorable experiences for your guests with interactive elements. " +
                                        "These features are designed to be lightweight and seamlessly integrate into your website."
                                    }
                                </p>
                                <div>
                                    <p>Examples of Custom Sections:</p>
                                    <ul>
                                        <li>Love Story: Share the journey of your relationship with a beautifully crafted timeline.</li>
                                        <li>Bridal Party: Introduce your bridal party with photos and bios.</li>
                                        <li>Travel Information: Provide guests with travel tips and accommodation details.</li>
                                        <li>Love Story: Share the journey of your relationship with a beautifully crafted timeline.</li>
                                        <li>Photo Gallery: Showcase your favorite moments with an interactive photo gallery.</li>
                                    </ul>
                                </div>

                                <div>
                                    <button>Add Interactive Features</button>
                                    <p>
                                        {
                                            "Make your website more engaging with interactive elements. Contact us to learn more."
                                        }
                                    </p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>

                <div style={{display: "none"}}>

                    <div>
                        <h5>
                            Pricing
                        </h5>
                        <div>
                            <div>
                                {
                                    "Headline: Transparent Pricing"
                                }
                            </div>
                            <div>
                                {
                                    "Subheadline: Affordable Options for Every Budget"
                                }
                            </div>
                            <div>
                                {
                                    "We offer clear and competitive pricing for both template and custom wedding websites. " +
                                    "Choose the option that best fits your needs and budget."
                                }
                            </div>
                        </div>

                        <div>
                            <div>
                                <h6>Template Websites:</h6>
                                <p>Basic Template: $199</p>
                                <p>Includes: Banner, date, ceremony, party, dress code, gifts, attending confirmation via WhatsApp, greetings.</p>
                            </div>
                            <div>
                                <h6>Basic Custom Website:</h6>
                                <p>Basic Template: $599</p>
                                <p>Includes: Personalized design, banner, date, ceremony, party, dress code, gifts, attending confirmation via WhatsApp, greetings.</p>
                            </div>
                            <div>
                                <h6>Custom Additional Sections:</h6>
                                <p>Basic Template: $99</p>
                            </div>
                            <div>
                                <h6>Custom Interactive Elements:</h6>
                                <p>Basic Template: $99</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};


const chevronUp = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
             className="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round"
             stroke-linejoin="round" stroke-width="2">
            <polyline points="18 15 12 9 6 15"/>
        </svg>
    );
};
const chevronDown = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
             className="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round"
             stroke-linejoin="round" stroke-width="2">
            <polyline points="6 9 12 15 18 9"/>
        </svg>
    );
};




export default Highlights;
