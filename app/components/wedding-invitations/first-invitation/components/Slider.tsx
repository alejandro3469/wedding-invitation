"use client"

import React from 'react';
import Image from 'next/image';
import styles from '../styles/Banner.module.css';
import { Allura, Tangerine, Lato, Merriweather } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

const AddWeddingCouple = () => {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle');
  }, []);

  const imageURL = "/invitations-files/bride-and-groom/Michigan Beach Engagement Photos at Sunset.jpg"

  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={imageURL} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={imageURL} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={imageURL} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      
    </div>
  );
};

export default AddWeddingCouple;
