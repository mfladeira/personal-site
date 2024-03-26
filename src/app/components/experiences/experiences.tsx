import CardExperience from "./cardExperience";
import styles from "./experiences.module.scss";

const Experiences = () => {
	return (
		<main id="experiencesSection">
			<div className={styles.Experiences}>
				<div className={styles.containerExperiences}>
					<h2 className={styles.title}>Experiences</h2>
					<CardExperience
						title="Front End Developer - DelOffshore"
						period="May 2023 - Currently, Brazil"
						items={[
							"Developed custom landing pages using HTML + SASS + JS that meet the specific needs of each client.",
							"Created an application for desktop using Electron + React + TS to automate the entire process of generating reports, reducing the time required by 30%.",
							"Developed a web application using HTML + SASS + JS to generate a PDF based on the information of the service provided. With this implementation, collaborators no longer needed paper to write the service information, reducing costs by $100 monthly.",
						]}
						technologies={["React.js", "HTML5", "SASS", "TypeScript", "JavaScript"]}
					></CardExperience>
					<CardExperience
						title="Front End Developer - Ímpar"
						period="Jan 2022 - Apr 2023, Brazil"
						items={[
							"Played a key role in developing the front-end side for an internal messaging system connecting staff built using React + .NET. This system was utilized by more than 60,000 users, enhancing communication and collaboration within the organization.",
							"Successfully implemented a new feature that allowed teams to create surveys using adaptive cards, streamlining the feedback gathering process and improving overall efficiency.",
							"Utilized Agile methodologies and collaborated closely with teams to ensure timely and efficient delivery of projects.",
						]}
						technologies={["React.js", "HTML5", "SASS", "TypeScript", "JavaScript", "SCRUM"]}
					></CardExperience>
					<CardExperience
						title="Full Stack Developer - FGS"
						period="June 2020 - Dec 2021, Brazil"
						items={[
							"Developed a web application with Angular in the frontend and Laravel in the backend. The main goal of the application was to facilitate interactions between various professions, fostering connections.",
							"Successfully integrated several third-party APIs, including Interbank, Juno Bank, and an API for issuing invoices. This integration resulted in improved efficiency and automation of key business processes.",
							"Worked closely with the product leader to understand requirements and provide technical input, resulting in a better alignment between business objectives and technical solutions",
						]}
						technologies={["Angular 10", "HTML5", "SASS", "TypeScript", "JavaScript", "SCRUM"]}
					></CardExperience>
				</div>
			</div>
			<hr className="lineBreak" />
		</main>
	);
};

export default Experiences;
