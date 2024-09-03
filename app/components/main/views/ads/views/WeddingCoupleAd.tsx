import React from 'react';
import Image from 'next/image';
import AdLayout from '../shared/view/AdLayout';
import styles from '../styles/WeddingCoupleAd.module.css';

const AddWeddingCouple = () => {
  return (
    <AdLayout>
      <div className={styles.container}>
        <span className={styles.text_container}>
          <span className={styles.text_main_line}>Invitacion para tu boda en un link</span>
          <span>Compartela en clicks!</span>
          <span className={styles.text_moving_adjectives}>Aesthetic, Fast</span>
          <span className={styles.dented_circle_container}>
            <svg className={styles.dented_circle} viewBox="0 0 180 180">
              <defs>
                <path id="dentedPath" d="
                M 90, 90
                m -45, 0
                a 45,45 0 1,1 90,0
                a 45,45 0 1,1 -90,0
            " />
              </defs>
              <text>
                <textPath href="#dentedPath">
                  Entrega inmediata
                </textPath>
              </text>
            </svg>
          </span>
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
