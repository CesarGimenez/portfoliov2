import { getImageUrl } from "../../utils";
import styles from "./About.module.scss";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/WorkOffice.jpeg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" className="aboutImage"/>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Im a frontend developer with experience in building responsive
                and optimized sites and applications with frameworks like React and Angular.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs with Node, Express, NestJS, and Django. 
                Following SOLID principles for clean code, working on legacy applications and microservices development.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
