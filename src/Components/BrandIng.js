import { Col } from "react-bootstrap";
import img from "../Images/brand.jpg";

export default function Brandimg() {
  return (
    <Col xs={2} md={2} sm={4} style={{ margin: "auto" }}>
      <img
        style={{ marginBottom: ".5rem", width: "90%", borderRadius: "20px" }}
        src={img}
        alt=""
      />
    </Col>
  );
}
