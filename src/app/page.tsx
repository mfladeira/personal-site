
import Header from "./components/header/header";
import styles from "./page.module.css";
import About from "./components/about/about";

export default function Home() {
	// const displayLight = (event: any) => {
	//   console.log(event.pageX)
	//   console.log(event.pageY)
	// onMouseMove={(event) => displayLight(event)}
	// }

	return (
		<main className={styles.main}>
			<Header />
			<About />
		</main>
	);
}
