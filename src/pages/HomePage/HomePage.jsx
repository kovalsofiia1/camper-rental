import styles from './HomePage.module.css';
import img from '../../assets/img/travel.webp';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  return (
     <div className={styles.homeContainer}>
      <div className={styles.welcomeSection}>
        <div className={styles.welcomeText}>
          <h1 className={styles.title}>Welcome to <br/> GoCampers!</h1>
          <p className={styles.subtitle}>Explore the great outdoors without leaving comfort behind. Rent the perfect camper for your next adventure with ease and reliability.</p>
          <button className={styles.btn} onClick={()=> navigate('/catalog')}>Book now!</button>
        </div>
        <div className={styles.imageContainer}>
          <img src={img} alt="camp" className={styles.img} />
        </div>
      </div>
      <section className={styles.featuredCampers}>
        <h2 className={styles.sectionTitle}>Impressive Stats</h2>
        <p className={styles.sectionSubtitle}>GoCampers by the numbers: showcasing our achievements and establishing credibility through our customer&apos;s experiences.</p>
        <div className={styles.campersList}>
          <div className={styles.camperItem}>
            <p className={styles.camperName}>7500</p>
            <p className={styles.camperDescription}>Happy Campers</p>
          </div>
          <div className={styles.camperItem}>
            <p className={styles.camperName}>500</p>
            <p className={styles.camperDescription}>5-Star reviews</p>
          </div>
          <div className={styles.camperItem}>
            <p className={styles.camperName}>200</p>
            <p className={styles.camperDescription}>Destinations</p>
          </div>
        </div>
      </section>
    </div>
  )
}
