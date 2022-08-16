import styles from './Modal.module.css'

import React from 'react'

function index({ children, title, isModalActive, handleModal }) {
	return (
		<div
			className={`${styles.overlay} ${isModalActive && styles.show}`}
			onClick={handleModal}
		>
			<div
				className={styles.modal}
				onClick={e => e.stopPropagation()}
			>
				<header className={styles.header}>
					<h1 className={styles.title}>{title}</h1>
					<span
						className={styles.cross}
						onClick={handleModal}
					></span>
				</header>
				<div className={styles.body}>
					{children}
				</div>
				<footer className={styles.footer}></footer>
			</div>
		</div>
	)
}

export default index