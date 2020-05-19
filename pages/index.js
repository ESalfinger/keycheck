import {Keyboard} from "../components/Keyboard";
import {Selection} from "../components/Selection";
import {useState} from "react";
import {Logo} from "../components/Logo";
import fullSize from "../data/100p.json";
import {ResetButton} from "../components/ResetButton";

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
};

function Home() {
    const [layout, setLayout] = useState(fullSize);
    const [layoutType, setLayoutType] = useState("fullSize");
    const [reset, setReset] = useState(false);

    function handleLayoutSelection(layout, layoutType) {
        setLayout(layout);
        setLayoutType(layoutType);
    }

    function switchReset() {
        setReset(!reset);
    }

    return <div style={containerStyle}>
        <Logo/>
        <Selection selectionHandler={handleLayoutSelection}/>
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

export default Home;