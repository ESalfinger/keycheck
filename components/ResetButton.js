import styles from "./ResetButton.module.sass";

export function ResetButton(props) {
    return (
        <div className={styles.resetButton} >
            ↻ Reset
        </div>
    );
}