import styles from "./cardProject.module.scss";

export interface ICardProject {
	pathProjectImage: string;
	title: string;
	description: string;
	techonologies: Array<string>;
	pathOfProject: string;
	pathHost?: string;
}

const CardProject = (props: ICardProject) => {
	return (
		<div className={styles.CardProject}>
			<img className={styles.projectImage} src={props.pathProjectImage} alt="CryptoCurrencies" />
			<div className={styles.containerTextContent}>
				<p className={styles.title}>{props.title}</p>
				<p className={styles.description}>{props.description}</p>
				<div className={styles.containerTechnologies}>
					{props.techonologies.map((tech) => (
						<span>{tech}</span>
					))}
				</div>
				<div className={styles.containerIcons}>
					<a href={props.pathOfProject} target="_blank" className={styles.link}>
						<img className={styles.github} src="github.png" alt="Github icon" />
					</a>
					{props.pathHost && (
						<a href={props.pathHost} target="_blank" className={styles.link}>
							<img className={styles.visit} src="visit.svg" alt="Github icon" />
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default CardProject;
