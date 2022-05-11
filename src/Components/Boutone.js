import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

export default function Button1(props) {
  return (
    <Button className={props.className}>
      {props.text} <FaArrowRight />
    </Button>
  );
}
