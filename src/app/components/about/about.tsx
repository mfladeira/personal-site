import Image from "next/image";
import styles from "./about.module.scss";

const About = () => {
	return (
		<section className={styles.mainAbout}>
			{/* <Image src="/mateus-nobackground.png" width={160} height={160} alt="Mateus" className={styles.profile}/> */}
			<section className={styles.leftSide}>
				<h1 className={styles.title}>Mateus Ferreira</h1>
				<h2 className={styles.profession}>Mid Frontend Engineer</h2>
				<p>I craft digital experiences that are pixel-perfect, captivating, and easily accessible.</p>
				<ul className={styles.containerLi}>
					<li className={styles.link}>Bachelor Degree in Software Engineering</li>
					<li className={styles.link}>
						<strong>Over 3 years experience</strong> in Frontend development
					</li>
					<li className={styles.link}>
						Main stacks: <strong>React and Angular</strong>
					</li>
				</ul>
				<a href="/resumeMateus.pdf" target="_blank">
					<button className={styles.buttonDownload}>View Full Resume</button>
				</a>
			</section>
			<section className={styles.rigthSide}>
				<p>
					My interest in technology came to life when my brother brought an Arduino project home. Although it
					was something simple, consisting only of sensors and LEDs, that experience sparked something in me.
					It was as if a new dimension had opened up before my eyes, and since then, I couldn't stray from
					this path anymore.
				</p>
				<p>
					My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most
					enjoy building software in the sweet spot where design and engineering meet
				</p>
				<p>
					When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my wife and two
					cats, or running around Hyrule searching for Korok seeds K o r o k s e e d s
				</p>
			</section>
		</section>
	);
};

export default About;
