import Header from "./components/header/header";
import styles from "./page.module.css";
import About from "./components/about/about";
import Experiences from "./components/experiences/experiences";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";

export default function Home() {
	return (
		<main className={styles.main}>
			<Header />
			<About />
			<Experiences />
			<Projects />
			<Footer />
		</main>
	);
}
