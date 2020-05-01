import styles from "./Selection.module.sass";
import sixtyP from "../data/60p.json";

export function Selection(props) {
    return (
        <div className={styles.selection}>
            <div className={styles.selectionBox} onClick={props.selectionHandler(sixtyP)}>
                <span>Full Size (100%)</span><br/>
                <img src={'keyboardFullSize.svg'} alt={"keyboard full size"} className={styles.fullSizeIcon} draggable="false"/>
            </div>
            <div className={styles.selectionBox} onClick={props.selectionHandler(sixtyP)}>
                <span>Tenkeyless (80%)</span><br/>
                <img src={'keyboard80.svg'} alt={"keyboard 80%"} className={styles.eightyPercentIcon} draggable="false"/>
            </div>
            <div className={styles.selectionBox} onClick={props.selectionHandler(sixtyP)}>
                <span>65%</span><br/>
                <img src={'keyboard65.svg'} alt={"keyboard 65%"} className={styles.sixtyfivePercentIcon} draggable="false"/>
            </div>
            <div className={styles.selectionBox} onClick={props.selectionHandler(sixtyP)}>
                <span>60%</span><br/>
                <img src={'keyboard60.svg'} alt={"keyboard 60%"} className={styles.sixtyPercentIcon} draggable="false"/>
            </div>
        </div>
    );
}