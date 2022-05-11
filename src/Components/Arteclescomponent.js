import { Col, Row } from "react-bootstrap";
import herors1pic from "../Images/herors1pic (1).jpg";
import classes from "../styles/Articles.module.css";
import Button1 from "./Boutone";

export default function ArticlesCom() {
  return (
    <Col xs={4} md={4} sm={12} className={classes.provvalusmaldiv}>
      <Row className={`${classes.provvalusmaldiv2} ${classes.RecentArtibg}`}>
        <Col xs={6} md={6} sm={12} className="m-auto">
          <img
            className={`${classes.lestprojimg} ${classes.Recentimg}`}
            src={herors1pic}
            alt=""
          />
          {/* <p className={`${classes.Providingvaluep} ${classes.RecArtialintop}`}>
            Finance, Supply Chain
          </p> */}
        </Col>
        <h5 className={classes.Recentimgdiv}>
          Expending The Solar Supply Chain Finance Program
        </h5>
        <p>
          The great thing about solar panels is that they do not requir a lot of
          maintenance. However, it is still important to get them checked.
        </p>

        <Button1
          type="button"
          className={`${classes.Recentbtn} "textbold"`}
          text="Read More"
        />
      </Row>
    </Col>
  );
}
