import styles from "./Selection.module.sass";
import {useEffect} from "react";

export function Selection(props) {
    const noClickStyle = {pointerEvents: 'none'};

    function handleClick(type, e) {
        props.selectionHandler(type);
        document.getElementsByClassName(styles.active)[0].classList.remove(styles.active);
        e.target.classList.add(styles.active);
    }

    useEffect(() => {
        document.getElementById(props.active).classList.add(styles.active);
    });

    return (
        <div className={styles.selection}>
            <div id={"100p"} className={`${styles.selectionBox}`} onClick={(e) => handleClick( "100p", e)}>
                <span style={noClickStyle}>Full Size (100%)</span><br/>
                <img src={'keyboardFullSize.svg'}
                     alt={"keyboard full size"}
                     className={styles.fullSizeIcon}
                     draggable="false"
                     style={noClickStyle}
                />
            </div>
            <div id={"80p"} className={styles.selectionBox} onClick={(e) => handleClick("80p", e)}>
                <span style={noClickStyle}>Tenkeyless (80%)</span><br/>
                <img src={'keyboard80.svg'}
                     alt={"keyboard 80%"}
                     className={styles.eightyPercentIcon}
                     draggable="false"
                     style={noClickStyle}
                />
            </div>
            <div id="65p"className={styles.selectionBox} onClick={(e) => handleClick("65p", e)}>
                <span style={noClickStyle}>65%</span><br/>
                <img src={'keyboard65.svg'}
                     alt={"keyboard 65%"}
                     className={styles.sixtyFivePercentIcon}
                     draggable="false"
                     style={noClickStyle}
                />
            </div>
            <div id="60p" className={styles.selectionBox} onClick={(e) => handleClick("60p", e)}>
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