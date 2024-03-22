"use client";
import Image from "next/image";
import styles from "./header.module.scss";
import MenuModal from "../menuModal/menuModal";
import { useState } from "react";

const Header = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<img className={styles.logo} src="/ferreiras-branco.png" alt="Icon of logo" />
				<img
					src="nav.svg"
					alt="Icon of navbar"
					className={styles.navIcon}
					onClick={() => setIsModalOpen(!isModalOpen)}
				/>
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
									<a
										href="https://www.linkedin.com/in/mateus-ferreira0704/"
										target="_blank"
										className={styles.link}
									>
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
			</div>
			<MenuModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></MenuModal>
		</header>
	);
};

export default Header;
