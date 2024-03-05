import Image from "next/image";
import styles from "./header.module.scss";

const Header = () => {
	return (
		<header className={styles.header}>
			{/* <Image src="linkedin.svg" alt="Github Icon" width={45} height={45} priority /> */}
			<h1 className={styles.logo}>M</h1>
			<nav className={styles.rightSide}>
				<ul className={styles.nav}>
					<li>
						<a href="" className={styles.link}>
							About
						</a>
					</li>
					<li>
						<a href="" className={styles.link}>
							Experience
						</a>
					</li>
					<li>
						<a href="" className={styles.link}>
							Projects
						</a>
					</li>
					<li>
						<ul className={styles.nav} style={{ marginLeft: 30 }}>
							<li>
								<a href="https://www.linkedin.com/in/mateus-ferreira0704/" target="_blank" className={styles.link}>
									<Image src="linkedin.svg" alt="Linkedin Icon" width={30} height={30} />
								</a>
							</li>
                            <li>
								<a href="https://github.com/mfladeira" target="_blank" className={styles.link}>
									<Image src="/github.png" alt="Github Icon" width={30} height={30} />
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
