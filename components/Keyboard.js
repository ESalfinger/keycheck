import styles from "./Keyboard.module.sass";
import {Key} from "./Key";
import {useEffect, useState} from "react";

export function Keyboard(props) {
    const [clicked, setClicked] = useState(new Map());

    function handleKeyPress(e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        let key = `${e.location === 2 ? 'RIGHT' : e.location === 3 ? 'NUM' : ''}${e.key.toUpperCase()}`;
        if (!clicked.has(key)) {
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
        }
    });

    return (
        <div className={styles.keyboard}>
            {props.layout.map((key, index) =>
                <Key keyVals={key.values} styleName={key.style} clicked={clicked.get(key.key[0]) || clicked.get(key.key[1])} key={index}/>
            )}
            {/*
            <Key keyVals={["Tab"]} styleName={["u1-5", "tab", "left"]}/>
            <Key keyVals={["q"]}/>
            <Key keyVals={["w"]}/>
            <Key keyVals={["e"]}/>
            <Key keyVals={["r"]}/>
            <Key keyVals={["t"]}/>
            <Key keyVals={["y"]}/>
            <Key keyVals={["u"]}/>
            <Key keyVals={["i"]}/>
            <Key keyVals={["o"]}/>
            <Key keyVals={["p"]}/>
            <Key keyVals={["{", "["]}/>
            <Key keyVals={["}", "]"]}/>
            <Key keyVals={["|", "\\"]} styleName={["u1-5"]}/>

            <Key keyVals={["Caps", "lock"]} styleName={["u1-75", "left"]}/>
            <Key keyVals={["a"]}/>
            <Key keyVals={["s"]}/>
            <Key keyVals={["d"]}/>
            <Key keyVals={["f"]}/>
            <Key keyVals={["g"]}/>
            <Key keyVals={["h"]}/>
            <Key keyVals={["j"]}/>
            <Key keyVals={["k"]}/>
            <Key keyVals={["l"]}/>
            <Key keyVals={[":", ";"]}/>
            <Key keyVals={["\"", "'"]} styleName={["double"]}/>
            <Key keyVals={["Return"]} styleName={["u2-25", "right"]}/>

            <Key keyVals={["Shift"]} styleName={["u2-25", "left"]} clicked={clicked.get("SHIFT")}/>
            <Key keyVals={["z"]}/>
            <Key keyVals={["x"]}/>
            <Key keyVals={["c"]}/>
            <Key keyVals={["v"]}/>
            <Key keyVals={["b"]}/>
            <Key keyVals={["n"]}/>
            <Key keyVals={["m"]}/>
            <Key keyVals={["<", ","]}/>
            <Key keyVals={[">", "."]}/>
            <Key keyVals={["?", "/"]}/>
            <Key keyVals={["Shift"]} styleName={["u2-75", "right"]} clicked={clicked.get("RIGHTSHIFT")}/>

            <Key keyVals={["Ctrl"]} styleName={["u1-25", "left"]}/>
            <Key keyVals={["Meta"]} styleName={["u1-25", "left"]}/>
            <Key keyVals={["Alt"]} styleName={["u1-25", "left"]}/>
            <Key styleName={["u6-25"]}/>
            <Key keyVals={["Alt"]} styleName={["u1-25", "right"]}/>
            <Key keyVals={["Fn"]} styleName={["u1-25", "right"]}/>
            <Key keyVals={["App"]} styleName={["u1-25", "right"]}/>
            <Key keyVals={["Ctrl"]} styleName={["u1-25", "right"]}/>*/}
        </div>
    );
}
