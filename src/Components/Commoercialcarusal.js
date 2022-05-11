import "bootstrap/dist/css/bootstrap.css";
import { Carousel, Col, Row } from "react-bootstrap";
import imag from "../Images/my (1).jpg";
import classes from "../styles/CommoercialResidential.module.css";

export default function Commoercialcarusal() {
  return (
    <Carousel className={classes.carousel}>
      <Carousel.Item interval={1000}>
        <Carousel.Caption>
          <Row xs={9} md={9} sm={10} className="PionnersofSolar">
            <Col xs={6} md={6} sm={11} className="m-auto">
              <Row className={classes.carousel}>
                <Col xs={2} md={2} sm={2} className={classes.reviewimg}>
                  <img src={imag} alt="" />
                </Col>
                <Col xs={8} md={8} sm={8} className={classes.reviewpara}>
                  <p>
                    "Todays, our company is one of the most important PV
                    suppiesrs in the North America and Europe.Todays, our
                    company is one of the most important PV suppiesrs in the
                    North America and Europe.Todays, our company is one of the
                    most important PV suppiesrs in the North America and
                    Europe."
                  </p>
                </Col>
              </Row>
            </Col>

            <Col xs={6} md={6} sm={11} className="m-auto">
              <Row className={classes.carousel}>
                <Col xs={2} md={2} sm={2} className={classes.reviewimg}>
                  <img src={imag} alt="" />
                </Col>
                <Col xs={8} md={8} sm={8} className={classes.reviewpara}>
                  <p>
                    "Todays, our company is one of the most important PV
                    suppiesrs in the North America and Europe.Todays, our
                    company is one of the most important PV suppiesrs in the
                    North America and Europe.Todays, our company is one of the
                    most important PV suppiesrs in the North America and
                    Europe."
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <Carousel.Caption>
          <Row xs={9} md={9} sm={10} className="PionnersofSolar">
            <Col xs={6} md={6} sm={11} className="m-auto">
              <Row className={classes.carousel}>
                <Col xs={2} md={2} sm={2} className={classes.reviewimg}>
                  <img src={imag} alt="" />
                </Col>
                <Col xs={8} md={8} sm={8} className={classes.reviewpara}>
                  <p>
                    "Todays, our company is one of the most important PV
                    suppiesrs in the North America and Europe.Todays, our
                    company is one of the most important PV suppiesrs in the
                    North America and Europe.Todays, our company is one of the
                    most important PV suppiesrs in the North America and
                    Europe."
                  </p>
                </Col>
              </Row>
            </Col>

            <Col xs={6} md={6} sm={11} className="m-auto">
              <Row className={classes.carousel}>
                <Col xs={2} md={2} sm={2} className={classes.reviewimg}>
                  <img src={imag} alt="" />
                </Col>
                <Col xs={8} md={8} sm={8} className={classes.reviewpara}>
                  <p>
                    "Todays, our company is one of the most important PV
                    suppiesrs in the North America and Europe.Todays, our
                    company is one of the most important PV suppiesrs in the
                    North America and Europe.Todays, our company is one of the
                    most important PV suppiesrs in the North America and
                    Europe."
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
