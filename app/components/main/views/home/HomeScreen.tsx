import React from 'react';
import Image from "next/image";
import styles from '../../styles/HomeView.module.css';
import AddWeddingCouple from '../ads/views/WeddingCoupleAd';

const HomeView = () => {
  return (
    <div className={styles.container}>
        <AddWeddingCouple />
    </div>
  );
};

export default HomeView;
