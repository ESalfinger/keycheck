import styles from "./Nav.module.sass";
import {useState} from "react";

export function Nav(props) {
    const [layout, setLayout] = useState(props.active);
    function swapLayout() {
        let val = layout === "ansi" ? "iso" : "ansi";
        setLayout(val);
        props.setLayout(val);
    }

    return (
        <div className={styles.navContainer}>
            <nav className={styles.navPopup}>
                <input className={styles.navPopupChecker} id="nav-popup-checker" type="checkbox"/>
                <label className={styles.navPopupAnchor} htmlFor="nav-popup-checker">
                    <div className={styles.linesFlexDiv}>
                        <div className={styles.lines}/>
                    </div>
                </label>
                <ul className={styles.navPopupList}>
                    <li className={styles.navPopupItem} onClick={swapLayout}><a className={styles.navPopupAnchor}>{layout === "ansi" ? "ISO" : "ANSI"}</a></li>
                    <li className={styles.navPopupItem}><a className={styles.navPopupAnchor}/></li>
                    <li className={styles.navPopupItem}><a className={styles.navPopupAnchor}/></li>
                    <li className={styles.navPopupItem}><a className={styles.navPopupAnchor}/></li>
                    <li className={styles.navPopupItem}><a className={styles.navPopupAnchor}/></li>
                </ul>
            </nav>
        </div>
    );
}