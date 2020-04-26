export function Key(props) {
  return (
    <div className={props.className}>
      <span>
        {props.location === 1 && "Left"}
        {props.location === 2 && "Right"}
        {props.location === 3 && "Num"}
        {props.keyVal}
      </span>
    </div>
  );
}
