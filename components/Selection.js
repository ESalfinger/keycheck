import styles from "./Selection.module.sass";
import sixtyP from "../data/60p.json";
import sixtyFiveP from "../data/65p.json";
import eightyP from "../data/80p.json";
import fullSize from "../data/100p.json";

export function Selection(props) {
    const noClickStyle = {pointerEvents: 'none'};

    function handleClick(layout, type, e) {
        props.selectionHandler(layout, type);
        document.getElementsByClassName(styles.active)[0].classList.remove(styles.active);
        e.target.classList.add(styles.active);
    }

    return (
        <div className={styles.selection}>
            <div className={`${styles.selectionBox} ${styles.active}`} onClick={(e) => handleClick(fullSize, "fullSize", e)}>
                <span style={noClickStyle}>Full Size (100%)</span><br/>
                <img src={'keyboardFullSize.svg'}
                     alt={"keyboard full size"}
                     className={styles.fullSizeIcon}
                     draggable="false"
                     style={noClickStyle}
                />
            </div>
            <div className={styles.selectionBox} onClick={(e) => handleClick(eightyP, "eightyP", e)}>
                <span style={noClickStyle}>Tenkeyless (80%)</span><br/>
                <img src={'keyboard80.svg'}
                     alt={"keyboard 80%"}
                     className={styles.eightyPercentIcon}
                     draggable="false"
                     style={noClickStyle}
                />
            </div>
            <div className={styles.selectionBox} onClick={(e) => handleClick(sixtyFiveP, "sixtyFiveP", e)}>
                <span style={noClickStyle}>65%</span><br/>
                <img src={'keyboard65.svg'}
                     alt={"keyboard 65%"}
                     className={styles.sixtyfivePercentIcon}
                     draggable="false"
                     style={noClickStyle}
                />
            </div>
            <div className={styles.selectionBox} onClick={(e) => handleClick(sixtyP, "sixtyP", e)}>
                <span style={noClickStyle}>60%</span><br/>
                <img src={'keyboard60.svg'}
                     alt={"keyboard 60%"}
                     className={styles.sixtyPercentIcon}
                     draggable="false"
                     style={noClickStyle}
                />
            </div>
        </div>
    );
}