import { Dispatch, SetStateAction } from "react";
import styles from "./menuModal.module.scss";

const MenuModal = (props: { isModalOpen: boolean; setIsModalOpen: Dispatch<SetStateAction<boolean>> }) => {
	const isOpen = props.isModalOpen ? styles.open : styles.closing;
	return (
		<div className={`${styles.MenuModal} ${isOpen}`}>
			<img
				src="/x.svg"
				alt="Icon of close"
				className={styles.iconMenu}
				onClick={() => props.setIsModalOpen(false)}
			/>
			<div className={styles.containerButtons}>
				<button className={styles.btn}>About</button>
				<button className={styles.btn}>Experience</button>
				<button className={styles.btn}>Projects</button>
			</div>
		</div>
	);
};

export default MenuModal;
