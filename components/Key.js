import styles from './Key.module.sass'

export function Key(props) {
    let styleString = "";
    if (props.styleName) {
        for (let style of props.styleName) {
            styleString += styles[style] + ' ';
        }
    }

    return (
        <div className={`${styleString} ${styles.key} ${props.active ? styles.active : ""}`}>
            {props.keyVals ? props.keyVals.map((keyVal, index) =>
                <span key={index}>{keyVal}</span>
            ) : null}
        </div>
    );
}
