import {Keyboard} from "../components/Keyboard";
import {Selection} from "../components/Selection";
import {useEffect, useState} from "react";
import {Logo} from "../components/Logo";
import {Nav} from "../components/Nav";
import {ResetButton} from "../components/ResetButton";
import Cookie from "js-cookie";
import cookie from "cookie";
import styles from "./index.module.sass";

function Home({initialLayoutType, initialLayout}) {
    const [layoutType, setLayoutType] = useState(() => initialLayoutType);
    const [layout, setLayout] = useState(() => initialLayout);
    const [layoutData, setLayoutData] = useState(require("../data/" + layout + "/" + layoutType + ".json"));
    const [reset, setReset] = useState(false);

    function handleLayoutTypeSelection(layoutType) {
        setLayoutType(layoutType);
        setLayoutData(require("../data/" + layout + "/" + layoutType + ".json"));
    }

    function handleLayoutSelection(layout) {
        setLayout(layout);
        setLayoutData(require("../data/" + layout + "/" + layoutType + ".json"));
    }

    useEffect(() => {
        Cookie.set('layoutType', layoutType);
        Cookie.set('layout', layout);
    }, [layoutType, layout]);

    function switchReset() {
        setReset(!reset);
    }

    return <div className={styles.containerStyle}>
        <Logo/>
        <Nav />
        <Selection selectionHandler={handleLayoutTypeSelection} active={layoutType}/>
        <Keyboard data={layoutData} type={layoutType} isReset={reset} switchReset={switchReset}/>
        <style global jsx>{`
        * {
            box-sizing: border-box;
            user-select: none;
        }
        html, body {
            background-color: #f0f0f3;
            margin: 0
        }
      `}</style>
        <ResetButton resetHandler={switchReset}/>
    </div>
}

export async function getServerSideProps({req}) {
    const cookies = cookie.parse(req ? req.headers.cookie || "" : document.cookie);

    return {
        props: {
            initialLayoutType: cookies.layoutType || "100p",
            initialLayout: cookies.layout || "ansi"
        },
    }
}

export default Home;