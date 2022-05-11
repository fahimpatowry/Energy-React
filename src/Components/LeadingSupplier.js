import "bootstrap/dist/css/bootstrap.css";
import { Col, Row } from "react-bootstrap";
import classes from "../styles/LeadingSupplier.module.css";
import classes1 from "../styles/Providing.module.css";
import Leadingcoldiv from "./Leadingcoldiv";
import Paragrap1 from "./Paragrap";

export default function LeadingSuppliersec() {
  return (
    <section className={classes.leadingSuppliersec}>
      <Col xs={10} md={10} sm={11} className="m-auto">
        <Row>
          <Col xs={5} md={6} sm={10} className={classes.iconcenter}>
            <Paragrap1
              className={classes.Providingvaluep}
              text="Energize Society With Sustainable Energy!"
            />
            <h3 className="textbold">
              A leading Supplier Of Solat Materials For Manufactures, Installers
              & Contractors.
            </h3>
          </Col>

          <Row className={classes.margintopled}>
            <Col xs={4} md={4} sm={6} className={classes.marginbottom}>
              <Row
                className={`"col-11" ${classes.iconcenter} ${classes1.provvalusmaldiv2} ${classes.solarpamdiv}`}
              >
                <Leadingcoldiv />
                <div className="spandiv2"></div>
              </Row>
            </Col>

            <Col xs={4} md={4} sm={6} className={classes.marginbottom}>
              <Row
                className={`"col-11" ${classes.iconcenter} ${classes1.provvalusmaldiv2} ${classes.solarpamdiv}`}
              >
                <Leadingcoldiv />
                <div className="spandiv2"></div>
              </Row>
            </Col>

            <Col xs={4} md={4} sm={6} className={classes.marginbottom}>
              <Row
                className={`"col-11" ${classes.iconcenter} ${classes1.provvalusmaldiv2} ${classes.solarpamdiv}`}
              >
                <Leadingcoldiv />
                <div className="spandiv2"></div>
              </Row>
            </Col>

            <Col
              xs={11}
              md={11}
              sm={11}
              className={`${classes.textcenter} "m-auto"`}
            >
              <p className={`${classes.lastparaled} ${classes.textbold}`}>
                Sustaiable,reliable & affordable energy system.
                <a href="fgdf">Find Your Solution Now!</a>
              </p>
            </Col>
          </Row>
        </Row>
      </Col>
    </section>
  );
}
