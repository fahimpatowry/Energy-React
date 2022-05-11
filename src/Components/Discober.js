import { Col, Row } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import classes from "../styles/Dicsover.module.css";
import Button1 from "./Boutone";
import DicsoverFrom from "./DiscoberForm";

export default function Discover() {
  return (
    <section className={classes.DiscoverInde}>
      <Col className="row m-auto col-lg-10 col-md-10 col-sm-11">
        <Row>
          <Col xs={6} md={6} sm={12} className={classes.DiscoverThro}>
            <p>Improving The Performance Of Solar Energy.</p>
            <h1>
              Discover Independence Through using The Power Of Solar Panels!
            </h1>
            <p>
              we offer products, solution and services across the entire energy
              valu chain. We support our customers on their way to a more
              sustainable future - no matter how far aiong the jouney to
              energize with affordable energy systems.
            </p>

            <Row>
              <Col xs={6} md={6} sm={11} className={classes.maroginnon}>
                <p className={`${classes.checkboxdis1} ${classes.textleft}`}>
                  <span className={classes.checkboxdis}>
                    <FaCheck />
                  </span>
                  Rellability & performance
                </p>
                <p className={`${classes.checkboxdis1} ${classes.textleft}`}>
                  <span className={classes.checkboxdis}>
                    <FaCheck />
                  </span>
                  solar material financing
                </p>
                <p className={`${classes.checkboxdis1} ${classes.textleft}`}>
                  <span className={classes.checkboxdis}>
                    <FaCheck />
                  </span>
                  In-time manufacturing
                </p>
              </Col>
              <Col className="col-lg-6 col-md-6 col-sm-11  maroginnon">
                <p className={`${classes.checkboxdis1} ${classes.textleft}`}>
                  <span className={classes.checkboxdis}>
                    <FaCheck />
                  </span>
                  50% more energy output
                </p>
                <p className={`${classes.checkboxdis1} ${classes.textleft}`}>
                  <span className={classes.checkboxdis}>
                    <FaCheck />
                  </span>
                  Built using ntype mono
                </p>
              </Col>
            </Row>

            <Button1 className={classes.btndishov} text="learn More" />
            <Button1 className={classes.btndishov} text="Our Core values" />

            <Row className={`${classes.recivhelppag} "textbold"`}>
              <Col xs={2} sm={2} md={2}></Col>
              <Col xs={10} sm={10} md={10}>
                <p>
                  Receive an accurate quote within 3-5 days when you fill out
                  this form. Or give us a ca:(001) 828***
                </p>
              </Col>
            </Row>
          </Col>

          <DicsoverFrom />
        </Row>
      </Col>
    </section>
  );
}
