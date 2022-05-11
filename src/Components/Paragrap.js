import "bootstrap/dist/css/bootstrap.css";

export default function Paragrap1(props) {
  return (
    <div className={props.className}>
      <p>{props.text}</p>
    </div>
  );
}
