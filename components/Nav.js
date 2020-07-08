import styles from "./Nav.module.sass";
import {useState} from "react";

export function Nav(props) {
    const [layout, setLayout] = useState(props.active);
    const [theme, setTheme] = useState("light");
    function swapLayout() {
        let val = layout === "ansi" ? "iso" : "ansi";
        setLayout(val);
        props.setLayout(val);
    }
    function swapTheme() {
        let val = theme === "light" ? "dark" : "light";
        setTheme(val);
        props.setTheme(val);
    }

    return (
        <div className={styles.navContainer}>
            <nav className={styles.navPopup}>
                <input className={styles.navPopupChecker} id="nav-popup-checker" type="checkbox"/>
                <label className={styles.navPopupAnchor + " " + styles[props.theme]} htmlFor="nav-popup-checker">
                    <div className={styles.linesFlexDiv}>
                        <div className={styles.lines + " " + styles[props.theme]}/>
                    </div>
                </label>
                <ul className={styles.navPopupList}>
                    <li className={styles.navPopupItem}><a className={styles.navPopupAnchor + " " + styles[props.theme]} onClick={swapLayout}>{layout === "ansi" ? "ISO" : "ANSI"}</a></li>
                    <li className={styles.navPopupItem}><a className={styles.navPopupAnchor + " " + styles[props.theme]} onClick={swapTheme}> <img src={'./palette.svg'} alt={"palette"} className={styles.paletteIcon}/></a></li>
                </ul>
            </nav>
        </div>
    );
}