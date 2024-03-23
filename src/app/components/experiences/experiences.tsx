import CardExperience from "./cardExperience";
import styles from "./experiences.module.scss";

const Experiences = () => {
	return (
		<div className={styles.Experiences}>
			<div className={styles.containerExperiences}>
				<h2 className={styles.title}>Experiences</h2>
				<CardExperience
					title="Front End Developer - Freelancer"
					period="May 2023 - Currently, Brazil"
					items={[
						"Developed customs landing pages using HTML + SASS + JS, that meet the specific needs of each client",
						"Created an aplication for Desktop using Electron + React + TS to automatized the entire process of generating reports, reduzing the time that was necessary by %30",
						"Developed a web aplication using HTML + SASS + JS to generate a PDF based on the information of the service provided, with this implementation the colaborator no longer needed paper to write the service information, reduzing the cost in $100 monthly",
					]}
					technologies={["React.js", "HTML5", "SASS", "TypeScript", "JavaScript"]}
				></CardExperience>
				<CardExperience
					title="Front End Developer - Ímpar"
					period="Jan 2022 - Apr 2023, Brazil"
					items={[
						"Played a key role in developing the front-end side for an internal messaging system connecting staff built using React + .NET, which was utilized by more than 60.000 users to enhance communication and collaboration",
						"Successfully implemented a new feature that allowed teams to create surveys using adaptive cards, streamlining the feedback gathering process and improving overall efficiency",
						"Utilized Agile methodologies and collaborated closely with teams to ensure timely and efficient delivery of projects",
					]}
					technologies={["React.js", "HTML5", "SASS", "TypeScript", "JavaScript", "SCRUM"]}
				></CardExperience>
				<CardExperience
					title="Full Stack Developer - FGS"
					period="June 2020 - Dec 2021, Brazil"
					items={[
						"Developed a web aplication with Angular in the front end and Laravel in the back end, the main goal of aplication was to connect various types of profissions and make the interection between them easy.",
						"Successfully integrated several third-party APIs, including Inter bank, Juno bank, and an API for issuing invoices, resulting in improved efficiency and automation of key business processes",
						"Worked closely with the product leader to understand requirements and provide technical input, resulting in a better alignment between business objectives and technical solutions",
					]}
					technologies={["Angular 10", "HTML5", "SASS", "TypeScript", "JavaScript", "SCRUM"]}
				></CardExperience>
			</div>
		</div>
	);
};

export default Experiences;
