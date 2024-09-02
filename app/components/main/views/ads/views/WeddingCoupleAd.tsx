import React from 'react';
import Image from 'next/image';
import AdLayout from '../shared/view/AdLayout';
import styles from '../styles/WeddingCoupleAd.module.css';

const AddWeddingCouple = () => {
  return (
    <AdLayout>
      <div className={styles.container}>
        <span className={styles.text_container}>
          <span className={styles.text_main_line}>Invitacion en un link para tu boda</span>
          <span>Compartela en clicks!</span>
          <span className={styles.text_moving_adjectives}>Aesthetic, Fast</span>
        </span>
        <Image
          className={''}
          src="/ad-files/wedding-kiss-add-image.jpg"
          alt="Wedding couple"
          width={601.6}
          height={401.6}
          priority
        />
      </div>
    </AdLayout>
  );
};

export default AddWeddingCouple;
