import styles from "./about.module.scss";

const About = () => {
	return (
		<>
			<section className={styles.mainAbout}>
				<div className={styles.containerSides}>
					<section className={styles.leftSide}>
						<h1 className={styles.title}>Mateus Ferreira</h1>
						<h2 className={styles.profession}>Mid Frontend Engineer</h2>
						<p>I craft digital experiences that are pixel-perfect, captivating, and easily accessible.</p>
						<ul className={styles.containerLi}>
							<li className={styles.link}>
								Bachelor Degree in <u>Software Engineering</u>
							</li>
							<li className={styles.link}>
								<strong>
									Over <u>3 years experience</u>
								</strong>{" "}
								in Frontend development
							</li>
							<li className={styles.link}>
								Main stacks:{" "}
								<strong>
									<u>React</u> and <u>Angular</u>
								</strong>
							</li>
						</ul>
						<a href="/resumeMateus.pdf" target="_blank">
							<button className={styles.buttonDownload}>View Full Resume</button>
						</a>
					</section>
					<section className={styles.rigthSide}>
						<p>
							My interest in technology came to life when my brother brought an Arduino project home.
							Although it was something simple, consisting only of sensors and LEDs, that experience
							sparked something in me. It was as if a new dimension had opened up before my eyes, and
							since then, I couldn't stray from this path anymore.
						</p>
						<p>
							My main focus today is building accessible user interfaces for my own customers at
							Ferreira's. I am committed to creating web applications that meet the specific needs of each
							project accurately.
						</p>
						<p>
							When I'm away from the screen, I'm usually running in the park, reading, hanging out with my
							wife, or writing about things that I like.
						</p>
					</section>
				</div>
			</section>
			<hr className={styles.lineBreak} />
		</>
	);
};

export default About;
