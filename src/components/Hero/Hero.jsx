import styles from "./Hero.module.scss";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Im Cesar Gimenez</h1>
        <p className={styles.description}>
        I am a professional graduated in telematic engineering, with taste in software development, working as a Software Engineer with 2 years of experience in software development like a FullStack. 
          I usually use the MERN stack, I have also used Django along with React, and some other frameworks like NestJS.
        </p>
        {/* <a href="mailto:cesargimenez760@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a> */}
        <ul className={styles.links}>
          <li className={styles.link}>
            <a href="https://www.linkedin.com/in/cesar-gimenez-70a284133/" target="_blank" rel="noopener noreferrer">
              <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://github.com/CesarGimenez" target="_blank" rel="noopener noreferrer">
              <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            </a>
          </li>
          <li className={styles.link}>
            <a href="mailto:cesargimenez760@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            </a>
          </li>
        </ul>
      </div>
      <img
        src={getImageUrl("hero/ProfilePic.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
