import styles from './Key.module.sass'

export function Key(props) {
    let styleString = "";
    if (props.styleName) {
        for (let style of props.styleName) {
            styleString += styles[style] + ' ';
        }

        if (!props.styleName.includes("empty")) {
            styleString += styles.key;
        }
    }

    return (
        <div className={`${styleString} ${props.theme === 'dark' ? styles.dark : null} ${props.clicked === 'active' ? styles.active : props.clicked === 'pressed' ? styles.pressed: ""}`}>
            {props.keyVals ? props.keyVals.map((keyVal, index) =>
                <span key={index}>{keyVal}</span>
            ) : null}
        </div>
    );
}
