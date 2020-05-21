import styles from "./Nav.module.sass";

export function Nav(props) {
    return (
        <div className={styles.navContainer}>
            <nav className={styles.navPopup}>
                <input className={styles.navPopupChecker} id="nav-popup-checker" type="checkbox"/>
                <label className={styles.navPopupAnchor} htmlFor="nav-popup-checker">
                    <div className={styles.linesFlexDiv}>
                        <span className={styles.lines}/>
                        <span className={styles.lines}/>
                        <span className={styles.lines}/>
                    </div>
                </label>
                <ul className={styles.navPopupList}>
                    <li className={styles.navPopupItem}><a className={styles.navPopupAnchor} href="#"/></li>
                    <li className={styles.navPopupItem}><a className={styles.navPopupAnchor} href="#"/></li>
                    <li className={styles.navPopupItem}><a className={styles.navPopupAnchor} href="#"/></li>
                    <li className={styles.navPopupItem}><a className={styles.navPopupAnchor} href="#"/></li>
                    <li className={styles.navPopupItem}><a className={styles.navPopupAnchor} href="#"/></li>
                </ul>
            </nav>
        </div>
    );
}