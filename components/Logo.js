import styles from "./Logo.module.sass";

export function Logo(props) {
    return (
        <div className={styles.logoContainer}>
            <img src={'./logo.png'} alt={"logo"} className={styles.logo} />
        </div>
    );
}