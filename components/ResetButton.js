import styles from "./ResetButton.module.sass";

export function ResetButton(props) {
    return (
        <div className={styles.resetButton} onClick={props.resetHandler}>
            ↻ Reset
        </div>
    );
}