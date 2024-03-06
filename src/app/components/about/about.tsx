import Image from "next/image";
import styles from "./about.module.scss";

const About = () => {
	return (
		<main className={styles.mainAbout}>
			{/* <Image src="/mateus-nobackground.png" width={160} height={160} alt="Mateus" className={styles.profile}/> */}
            <section>
                <h1 className={styles.title}>Mateus Ferreira</h1>
                <h2 className={styles.profession}>Mid Frontend Engineer</h2>
                <p>I craft digital experiences that are pixel-perfect, captivating, and easily accessible.</p>
                <ul className={styles.containerLi}>
                    <li className={styles.link}>Bachelor Degree in Software Engineering</li>
                    <li className={styles.link}><strong>Over 3 years experience</strong> in Frontend development</li>
                    <li className={styles.link}>Main stacks: <strong>React and Angular</strong></li>
                </ul>
                <a href="/resumeMateus.pdf" target="_blank">
                    <button className={styles.buttonDownload}>View Full Resume</button>
                </a>
            </section>
            <section></section>            
		</main>
	);
};

export default About;
