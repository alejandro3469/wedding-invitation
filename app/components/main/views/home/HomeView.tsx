'use client';

import React from 'react';
import Image from "next/image";

import AddWeddingCouple from '../ads/views/WeddingCoupleAd';
import SubmissionForm from "@/app/components/main/views/home/SubmissionForm";
import Hero from "@/app/components/main/views/home/Hero";
import styles from '../../styles/HomeView.module.css';

import localFont from 'next/font/local';
import Highlights from "@/app/components/main/views/home/Highlights";
import Services from "@/app/components/main/views/home/Services";

const OpenSans = localFont({ src: '/OpenSans-VariableFont_wdth,wght.ttf' })

const HomeView = () => {
    return (
        <div className={`${styles.container} ${OpenSans.className}`}>
            {/* Hero Section */}
            <Hero />
            <Highlights />
            <Services />

            <div style={{"display": "none"}}>
                {/* Highlights Section */}


                <section>
                    <h3>How It Works</h3>

                    <div>
                        {
                            "Headline: Simple Steps to Your Dream Wedding Website"
                        }
                    </div>
                    <div>
                        {
                            "Subheadline: Simple Steps to Your Dream Wedding Website"
                        }
                    </div>
                    <div>
                        {
                            "Description: Our streamlined process ensures that creating your perfect wedding website is easy and stress-free. Follow these simple steps to get started"
                        }
                    </div>

                    <section>
                        <h2>Step-by-Step Guide:</h2>

                        <div>
                            <h3>Step 1: Submit Your Assets</h3>
                            <p>
                                Share your ideas, photos, drawings, and any other assets via WhatsApp or email.
                                Our easy-to-use submission form makes it simple to upload everything we need to bring your vision to life.
                            </p>
                            <p>
                                <strong>WhatsApp Submission:</strong> Send your assets to <span>[WhatsApp Number]</span>.
                                Include your name and wedding date in the message.
                            </p>
                            <p>
                                <strong>Email Submission:</strong> Email your assets to <span>[Email Address]</span>.
                                Please include your name and wedding date in the subject line.
                            </p>
                        </div>

                        <div>
                            <h3>Step 2: Choose Your Design</h3>
                            <p>
                                {
                                    "Select from our beautiful templates or opt for a fully custom design. " +
                                    "We'll guide you through" +
                                    "the options and help you choose the best fit for your wedding."
                                }
                            </p>
                        </div>

                        <div>
                            <h3>Step 3: Review and Adjust</h3>
                            <p>
                                {
                                    "Once we've created your website, " +
                                    "you'll have the opportunity to review it and request any adjustments." +
                                    "We want to ensure it's perfect for your big day."}
                            </p>
                        </div>

                        <div>
                            <h3>Step 4: Finalize and Launch</h3>
                            <p>
                                {"After making any necessary adjustments, " +
                                    "we'll finalize your website and launch it." +
                                    "Your guests will be able to access all the important details about your wedding."}
                            </p>
                        </div>
                    </section>
                </section>

                <SubmissionForm />
            </div>
    </div>
  );
};

export default HomeView;
