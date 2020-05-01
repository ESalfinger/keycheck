import {Keyboard} from "../components/Keyboard";
import sixtyP from "../data/60p.json";

function Home() {
    const [layout, setLayout] = useState("");

    function handleLayoutSelection(layout) {
        setLayout(layout);
    }
    return <div>
        <Selection selectionHandler={handleLayoutSelection}></Selection>
        <Keyboard layout={layout}/>
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
            align-items: center;
            justify-content: center;
        }
      `}</style>
    </div>
}

export default Home;