import { Col, Row } from "react-bootstrap";
import classes from "../styles/Articles.module.css";
import ArticlesCom from "./Arteclescomponent";

export default function Articles() {
  return (
    // <section>
    <Row xs={12} md={12} sm={12} className={classes.RecentArti}>
      <Col xs={6} md={6} sm={10} style={{ margin: "auto" }}>
        <h3 className="textbold">Recent Articles</h3>
      </Col>

      <Col xs={10} md={10} sm={11} style={{ margin: "auto" }}>
        <Row>
          <ArticlesCom />
          <ArticlesCom />
          <ArticlesCom />
        </Row>
      </Col>
    </Row>
    // </section>
  );
}
