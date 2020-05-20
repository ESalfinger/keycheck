import styles from "./Keyboard.module.sass";
import {Key} from "./Key";
import {useEffect, useState} from "react";

export function Keyboard(props) {
    const [clicked, setClicked] = useState(new Map());

    function handleKeyPress(e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        let key = `${e.location === 2 ? 'RIGHT' : e.location === 3 ? 'NUM' : ''}${e.key.toUpperCase()}`;
        if (e.type === "keydown") {
            console.log(key);
            setClicked(new Map(clicked.set(key, "active")));
        } else {
            setClicked(new Map(clicked.set(key, "pressed")));
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('keyup', handleKeyPress);

        return function cleanup() {
            document.removeEventListener("keydown", handleKeyPress);
            document.removeEventListener("keyup", handleKeyPress);
        };
    });

    useEffect(() => {
        if (props.isReset) {
            setClicked(new Map());
            props.switchReset();
        }
    }, [props.isReset]);

    return (
        <div className={styles["k" + props.type]}>
            {props.data.map((key, index) =>
                <Key keyVals={key.values}
                     styleName={key.style}
                     clicked={[clicked.get(key.key[0]), clicked.get(key.key[1])].includes("active") ? "active" : clicked.get(key.key[0]) || clicked.get(key.key[1])}
                     key={index}/>
            )}
        </div>
    );
}
