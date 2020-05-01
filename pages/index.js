import {Keyboard} from "../components/Keyboard";
import {Selection} from "../components/Selection";
import sixtyP from "../data/60p.json";
import {useState} from "react";
import {Logo} from "../components/Logo";

function Home() {
    const [layout, setLayout] = useState(undefined);

    function handleLayoutSelection(layout) {
        setLayout(layout);
    }
    return <div>
        <Logo/>
        <Selection selectionHandler={handleLayoutSelection}/>
        <Keyboard layout={sixtyP}/>
        <style global jsx>{`
        * {
            box-sizing: border-box;
        }
        html, body {
            height: 100%;
            width: 100%;
            padding: 0;
            margin: 0;
            background-color: #f0f0f3;
        }
        body {
            display: flex;
            padding: 10px;
            justify-content: center;
        }
      `}</style>
    </div>
}

export default Home;