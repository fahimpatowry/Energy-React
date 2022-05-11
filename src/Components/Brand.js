import { Col, Row } from "react-bootstrap";
import Brandimg from "./BrandIng";

export default function Brand() {
  return (
    <section style={{ width: "100%", marginTop: "3rem", marginBottom: "3rem" }}>
      <Col xs={10} sm={11} md={10} style={{ margin: "auto" }}>
        <Row>
          <Brandimg />
          <Brandimg />
          <Brandimg />
          <Brandimg />
        </Row>
      </Col>
    </section>
  );
}
