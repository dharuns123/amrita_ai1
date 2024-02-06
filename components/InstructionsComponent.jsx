import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					AMRITA<span>Ai1 </span>
				</h1>
				<p>
					By students For Students{" "}
					
				</p>
			</header>

			<div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"https://createweb3dapp.alchemy.com/#components"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>AUMS (ASE - CBE)</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://aumscb.amrita.edu/cas/login?service=https%3A%2F%2Faumscb.amrita.edu%2Faums%2FJsp%2FCore_Common%2Findex.jsp"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>CMS (CBE)</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://cms.cb.amrita.edu/login"}
				>
					<div className={styles.button}>
						<img
							src="https://static.alchemyapi.io/images/cw3d/Icon%20Large/file-eye-01-l.svg"
							width={"20px"}
							height={"20px"}
						/>
						<p>INTRANET (CBE)</p>
					</div>
				</a>
			</div>
			<div className={styles.footer}>
				<a href="https://intranet.cb.amrita.edu/" target={"_blank"}>
					
				</a>
				<div className={styles.icons_container}>
					<div>
						
			</div>
		</div>
	);
}
