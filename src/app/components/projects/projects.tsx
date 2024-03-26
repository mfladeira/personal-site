import CardProject, { ICardProject } from "./cardProject";
import styles from "./projects.module.scss";

const Projects = () => {
	const projects: ICardProject[] = [
		{
			pathProjectImage: "projectCryptoCurrencies.png",
			title: "Top 10 CryptoCurrencies",
			description:
				"The main goal of this project is to provide a list of the top 10 cryptocurrencies based on market capitalization. Additionally, it allows easy access to detailed information about each selected cryptocurrency and enables the user to interact with their MetaMask wallet to view their Ethereum balance",
			techonologies: ["React", "Redux", "Web3.js", "CoinGecko API"],
			pathOfProject: "https://github.com/mfladeira/cryptocurrencies",
		},
		{
			pathProjectImage: "projectLandingPageMarketClient.png",
			title: "Landing page for a marketing client",
			description:
				"The aim of this project was to create a landing page focused on capturing the visitor attention and provide concise information about the product marketed",
			techonologies: ["HTML5", "CSS3", "JavaScript"],
			pathOfProject: "https://github.com/mfladeira/dominio",
		},
		{
			pathProjectImage: "projectGenerateService.png",
			title: "Service PDF generator",
			description:
				"The aim of this project was to automate the entire process of service generation. Previously reliant on paper, the company can now complete every step conveniently through a smartphone interface",
			techonologies: ["HTML5", "CSS3", "JavaScript"],
			pathOfProject: "https://github.com/mfladeira/delOffShoreGerarRelatorio",
			pathHost: "https://deloffshore.com/relatorio.php",
		},
		{
			pathProjectImage: "projectLandingPageWeldingClient.png",
			title: "Landing page for a welding client",
			description:
				"This project aims to showcase welding services, expertice, and portfolio in concise and engaging manner",
			techonologies: ["HTML5", "CSS3", "JavaScript"],
			pathOfProject: "https://github.com/mfladeira/deloffshore",
			pathHost: "https://deloffshore.com/",
		},
		{
			pathProjectImage: "projectMissingPersons.png",
			title: "Search missing person",
			description:
				"The primary objective of this project is to facilitate the search for missing persons through customizable filters, while also enabling users to easily share relevant information via Facebook or WhatsApp",
			techonologies: ["Angular 17", "RxJS", "PJC API"],
			pathOfProject: "https://github.com/mfladeira/teste-petize",
			pathHost: "https://teste-petize.vercel.app/",
		},
	];

	return (
		<main className={styles.Projects}>
			<div className={styles.containerProjects}>
				<h2 className={styles.title}>Projects</h2>

				{projects.map((project) => (
					<CardProject {...project}></CardProject>
				))}
			</div>
		</main>
	);
};

export default Projects;
