import sixtyP from "../data/60p.json";

export function Selection(props) {
    return <div onClick={props.selectionHandler(sixtyP)}/>;
}