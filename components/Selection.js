import styles from "./Selection.module.sass";
import sixtyP from "../data/60p.json";

export function Selection(props) {
    function handleClick(layout, e) {
        props.selectionHandler(layout);
        document.getElementsByClassName(styles.active)[0].classList.remove(styles.active);
        e.target.classList.add(styles.active);
    }

    return (
        <div className={styles.selection}>
            <div className={`${styles.selectionBox} ${styles.active}`} onClick={(e) => handleClick([], e)}>
                <span>Full Size (100%)</span><br/>
                <img src={'keyboardFullSize.svg'} alt={"keyboard full size"} className={styles.fullSizeIcon}
                     draggable="false"/>
            </div>
            <div className={styles.selectionBox} onClick={(e) => handleClick([], e)}>
                <span>Tenkeyless (80%)</span><br/>
                <img src={'keyboard80.svg'} alt={"keyboard 80%"} className={styles.eightyPercentIcon}
                     draggable="false"/>
            </div>
            <div className={styles.selectionBox} onClick={(e) => handleClick([], e)}>
                <span>65%</span><br/>
                <img src={'keyboard65.svg'} alt={"keyboard 65%"} className={styles.sixtyfivePercentIcon}
                     draggable="false"/>
            </div>
            <div className={styles.selectionBox} onClick={(e) => handleClick(sixtyP, e)}>
                <span>60%</span><br/>
                <img src={'keyboard60.svg'} alt={"keyboard 60%"} className={styles.sixtyPercentIcon} draggable="false"/>
            </div>
        </div>
    );
}