import { Col, Row } from "react-bootstrap";
import img from "../Images/herors1pic (1).jpg";
import classes from "../styles/Lateestproject.module.css";
import Button1 from "./Boutone";

export default function LatestProjectComponent() {
  return (
    <Col xs={4} md={4} sm={12} className={classes.provvalusmaldiv}>
      <Row className={classes.provvalusmaldiv2}>
        <Col className="col-12 m-auto">
          <img className={classes.lestprojimg} src={img} alt=" " />
        </Col>
        <p className={classes.Providingvaluep}>Finance, Supply Chain</p>
        <h5>Expending The Solar Supply Chain Finance Program</h5>
        <p>
          The great thing about solar panels is that they do not requir a lot of
          maintenance. However, it is still important to get them checked
          regularly to ensure safe.
        </p>

        <Button1
          type="button"
          className={`${classes.Latestbtn} "textbold"`}
          text="Explore More"
        />
      </Row>
    </Col>
  );
}
