import {Keyboard} from "../components/Keyboard";
import {Selection} from "../components/Selection";
import {useState} from "react";
import {Logo} from "../components/Logo";
import fullSize from "../data/100p.json";

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
};

function Home() {
    const [layout, setLayout] = useState(fullSize);
    const [layoutType, setLayoutType] = useState("fullSize");

    function handleLayoutSelection(layout, layoutType) {
        setLayout(layout);
        setLayoutType(layoutType);
    }

    return <div style={containerStyle}>
        <Logo/>
        <Selection selectionHandler={handleLayoutSelection}/>
        <Keyboard layout={layout} type={layoutType}/>
        <style global jsx>{`
        * {
            box-sizing: border-box;
        }
        html, body {
            background-color: #f0f0f3;
        }
      `}</style>
    </div>
}

export default Home;