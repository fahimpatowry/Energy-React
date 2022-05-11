import { Col, Row } from "react-bootstrap";
import classes from "../styles/Lateestproject.module.css";
import LatestProjectComponent from "./LatestProjectcomponent";

export default function LatestProject() {
  return (
    <section className={classes.LatestProjects}>
      <Col xs={10} md={10} sm={11} className={classes.iconcenter}>
        <Row className={classes.iconcenter}>
          <Col className={classes.iconcenter}>
            <p className={classes.Providingvaluep}>
              Innovation, Quality And Continuous Improvement!
            </p>
            <h3 className="textbold">
              Latest Projects, Solutions And Energy Supplies
            </h3>
          </Col>

          <Col xs={11} md={11} sm={11} className="m-auto">
            <Row xs={11} md={11} sm={12}>
              <LatestProjectComponent />
              <LatestProjectComponent />
              <LatestProjectComponent />
            </Row>
          </Col>
        </Row>
      </Col>
    </section>
  );
}
