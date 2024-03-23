import styles from "./cardExperience.module.scss";

interface ICardExperience {
	title: string;
	period: string;
	items: String[];
	technologies: String[];
}

const CardExperience = (props: ICardExperience) => {
	return (
		<div className={styles.CardExperience}>
			<div className={styles.containerTitle}>
				<span>{props.title}</span>
				<span>{props.period}</span>
			</div>
			<ul className={styles.ul}>
				{props.items.map((item) => (
					<li>{item}</li>
				))}
			</ul>
			<div className={styles.containerTechnologies}>
				{props.technologies.map((tech) => (
					<span>{tech}</span>
				))}
			</div>
		</div>
	);
};

export default CardExperience;
