import styles from "./ResetButton.module.sass";

export function ResetButton(props) {
    return (
        <div className={`${props.theme === 'dark' ? styles.dark : null} ${styles.resetButton}`} onClick={props.resetHandler}>
            <div className={styles.spin}>↻</div>
            <span>Reset</span>
        </div>
    );
}