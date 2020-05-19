import {Keyboard} from "../components/Keyboard";
import {Selection} from "../components/Selection";
import {useEffect, useState} from "react";
import {Logo} from "../components/Logo";
import {ResetButton} from "../components/ResetButton";
import Cookie from "js-cookie";
import cookie from "cookie";

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
};

function Home({initialLayoutType}) {
    const [layoutType, setLayoutType] = useState(() => initialLayoutType);
    const [layout, setLayout] = useState(require("../data/" + layoutType + ".json"));
    const [reset, setReset] = useState(false);

    function handleLayoutSelection(layoutType) {
        setLayout(require("../data/" + layoutType + ".json"));
        setLayoutType(layoutType);
    }

    useEffect(() => {
        Cookie.set('layoutType', layoutType);
    }, [layoutType]);

    function switchReset() {
        setReset(!reset);
    }

    return <div style={containerStyle}>
        <Logo/>
        <Selection selectionHandler={handleLayoutSelection} active={layoutType}/>
        <Keyboard layout={layout} type={layoutType} isReset={reset} switchReset={switchReset}/>
        <style global jsx>{`
        * {
            box-sizing: border-box;
        }
        html, body {
            background-color: #f0f0f3;
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
        },
    }
}

export default Home;