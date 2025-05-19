'use client';

import React from 'react';
import styles from '../../styles/Hero.module.css';
import { useState } from 'react';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    styled, Box
} from '@mui/material';

const TopHeaderCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: '#f7f3eb',
    padding: '12px',
    borderBottom: '2px solid #b0a695',
    borderRight: '1px solid #b0a695',
    whiteSpace: 'nowrap',
    color: '#333',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
        padding: '8px',
    },
}));

const PlanHeader = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const PlanName = styled('div')({
    fontSize: '0.9rem',
    fontWeight: '600',
    marginBottom: '4px',
});

const PlanPrice = styled('div')({
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '4px',
});

const PlanTerm = styled('div')({
    fontSize: '0.8rem',
    fontStyle: 'italic',
});

const LeftHeaderCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: '#f7f3eb',
    fontSize: '0.9rem',
    fontWeight: '500',
    padding: '8px 12px',
    borderRight: '1px solid #b0a695',
    borderBottom: '1px solid #b0a695',
    position: 'sticky',
    left: 0,
    zIndex: 2,
    color: '#333',
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem',
        padding: '6px 8px',
    },
}));

const DataCell = styled(TableCell)(({ theme }) => ({
    padding: '8px 12px',
    fontSize: '0.9rem',
    borderBottom: '1px solid #b0a695',
    borderRight: '1px solid #b0a695',
    textAlign: 'center',
    backgroundColor: 'rgba(232,224,213,0.02)',
    '& svg': {
        width: '20px',
        height: '20px',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '6px 8px',
        fontSize: '0.8rem',
        '& svg': {
            width: '18px',
            height: '18px',
        },
    },
}));

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

    const CheckIcon = ({ limited = false }) => (
        <Box
            component="span"
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(45, 107, 77, 0.15)',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                padding: '2px'
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                 stroke="#2D6B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5"/>
            </svg>
        </Box>
    );
    const XIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
        </svg>
    );

    const columns = ['', 'Plantilla', 'Custom'];
    const rows = [
        {
            name: 'Entrega inmediata (24hrs)',
            q1: <CheckIcon />,
            q2: <XIcon />,
        },
        {
            name: 'Nombres en URL',
            q1: <CheckIcon />,
            q2: <CheckIcon />,
        },
        {
            name: 'Texto 100% personalizado',
            q1: <CheckIcon />,
            q2: <CheckIcon />,
        },
        {
            name: 'Diseño 100% personalizado',
            q1: <XIcon />,
            q2: <CheckIcon />,
        },
        {
            name: 'Secciones personalizables',
            q1: <XIcon />,
            q2: <CheckIcon />,
        },
        {
            name: 'Elementos interactivos',
            q1: <XIcon />,
            q2: <CheckIcon />,
        },
    ];


    return (
        <div className={styles.textContainer}>
            <section className={styles.container}>
                <h3 className={`${styles.sectionTitle}`}>Servicios y precios</h3>
                <TableContainer component={Paper}
                                sx={{
                                    maxWidth: '100%',
                                    overflowX: 'auto',
                                    boxShadow: 'none',
                                    border: '1px solid #b0a695',
                                    borderRadius: '8px',
                                    mb: 3,
                                    backgroundColor: '#f7f3eb'
                                }}>
                    <Table stickyHeader
                           aria-label="comparison table"
                           sx={{
                               minWidth: '400px',
                               '& .MuiTableCell-root': {
                                   boxSizing: 'border-box'
                               },
                               '& .MuiTableRow-root:last-child .MuiTableCell-root': {
                                   borderBottom: 'none'
                               }
                           }}>
                        {/* TOP HEADER */}
                        <TableHead>
                            <TableRow>
                                <TopHeaderCell></TopHeaderCell>
                                <TopHeaderCell>
                                    <PlanHeader>
                                        <PlanName>Plantilla</PlanName>
                                        <PlanPrice>$199 MXN</PlanPrice>
                                    </PlanHeader>
                                </TopHeaderCell>
                                <TopHeaderCell>
                                    <PlanHeader>
                                        <PlanName>Custom</PlanName>
                                        <PlanPrice>$599 MXN</PlanPrice>
                                    </PlanHeader>
                                </TopHeaderCell>
                            </TableRow>
                        </TableHead>

                        {/* TABLE BODY + LEFT HEADER */}
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <LeftHeaderCell>{row.name}</LeftHeaderCell>
                                    <DataCell>{row.q1}</DataCell>
                                    <DataCell>{row.q2}</DataCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

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
        </div>
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
