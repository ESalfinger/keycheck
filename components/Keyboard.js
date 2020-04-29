import styles from "./Keyboard.module.sass";
import {Key} from "./Key";
import {useEffect} from "react";

export function Keyboard() {
    useEffect(() => {
        document.addEventListener('keydown', function (e) {
            e.preventDefault();
            e.stopPropagation();
            //e.location left(1) right(2) num(3)
            /*setKey(e.key);
            setLocation(e.location);*/
        });
    });

    return (
        <div className={styles.keyboard}>
            <Key keyVals={["Esc"]} styleName={["esc", "left"]}/>
            <Key keyVals={["!", "1"]}/>
            <Key keyVals={["@", "2"]}/>
            <Key keyVals={["#", "3"]}/>
            <Key keyVals={["$", "4"]}/>
            <Key keyVals={["%", "5"]}/>
            <Key keyVals={["^", "6"]}/>
            <Key keyVals={["&", "7"]}/>
            <Key keyVals={["*", "8"]}/>
            <Key keyVals={["(", "9"]}/>
            <Key keyVals={[")", "0"]}/>
            <Key keyVals={["_", "-"]}/>
            <Key keyVals={["+", "="]}/>
            <Key keyVals={["←"]} styleName={["u2"]}/>

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

            <Key keyVals={["Shift"]} styleName={["u2-25", "left"]}/>
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
            <Key keyVals={["Shift"]} styleName={["u2-75", "right"]}/>

            <Key keyVals={["Ctrl"]} styleName={["u1-25", "left"]}/>
            <Key keyVals={["Meta"]} styleName={["u1-25", "left"]}/>
            <Key keyVals={["Alt"]} styleName={["u1-25", "left"]}/>
            <Key styleName={["u6-25"]}/>
            <Key keyVals={["Alt"]} styleName={["u1-25", "right"]}/>
            <Key keyVals={["Fn"]} styleName={["u1-25", "right"]}/>
            <Key keyVals={["App"]} styleName={["u1-25", "right"]}/>
            <Key keyVals={["Ctrl"]} styleName={["u1-25", "right"]}/>
        </div>
    );
}
