import styles from '../styles/AdLayout.module.css';
import { Ubuntu,  } from "next/font/google";
import Image from 'next/image';

const layoutFont = Ubuntu({
  weight: ['300', '400', '500', '700'], // You can specify the weights you need
  subsets: ['latin'], // Specify the subsets you need
  variable: '--font-ubuntu', // Optional: define a CSS variable
});

export default function AdLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className={styles.ad_container}>
      <div className={styles.ad_header}>
        <span className={styles.header_profile_image}>
          <Image
            className={''}
            src="/ad-files/ad-publisher/pexels-zetong-li-880728-1784578.jpg"
            alt="Publisher profile picture"
            width={30}
            height={45.1693851944793}
            priority
          />
        </span>
        <span className={`${layoutFont.className} ${styles.header_username}`}>Leleupi</span>
      </div>
      <div className={styles.image_container}>{children}</div>
      <div className={styles.ad_footer}>
        <span className={styles.icons_container}>
          <span className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </span>
          <span className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chat" viewBox="0 0 16 16">
              <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
            </svg>
          </span>
          <span className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
            </svg>
          </span>
        </span>
        <span className={styles.icon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
          </svg>
        </span>
      </div>
    </section>
  )
}