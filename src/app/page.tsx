import Image from "next/image";
import Header from "./components/header/header";
import styles from "./page.module.css";
import About from "./components/about/about";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <About />
    </main>
  );
}
