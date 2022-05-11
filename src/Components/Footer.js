import "bootstrap/dist/css/bootstrap.css";
import { Col, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "rgb(41, 38, 38)",
        color: "white",
        marginTop: "5rem",
        paddingTop: "4rem",
        paddingBottom: "2rem",
      }}
    >
      <Row xs={10} md={10} sm={11} style={{ margin: "auto" }}>
        <Col xs={8} md={8} sm={12}>
          <Row>
            <Col xs={4} md={4} sm={4}>
              <h5 className="textbold">Compannay</h5>
              <ul
                style={{
                  listStyle: "none",
                }}
              >
                <li>About us</li>
                <li>About us</li>
                <li>About us</li>
                <li>About us</li>
              </ul>
            </Col>
            <Col xs={4} md={4} sm={4}>
              <h5 className="textbold">Compannay</h5>
              <ul
                style={{
                  listStyle: "none",
                }}
              >
                <li>About us</li>
                <li>About us</li>
                <li>About us</li>
                <li>About us</li>
              </ul>
            </Col>
            <Col xs={4} md={4} sm={4}>
              <h5 className="textbold">Compannay</h5>
              <ul
                style={{
                  listStyle: "none",
                }}
              >
                <li>About us</li>
                <li>About us</li>
                <li>About us</li>
                <li>About us</li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col className="col-lg-4">
          <h4>(+001) 828******</h4>
          <h7 style={{ color: "green" }}>Email: faimjoy@gmail.com</h7>
          <br />
          <br />
          <div>
            <p>
              Mirpur, Dhaka
              <br />
              Bangladesh
            </p>
          </div>
        </Col>
      </Row>
    </footer>
  );
}
