import "bootstrap/dist/css/bootstrap.css";
import { Col, Row } from "react-bootstrap";
import Button1 from "../Components/Boutone";
import classes from "../styles/CommoercialResidential.module.css";
// import Commoercialcarusal from "./Commoercialcarusal";

export default function CommoercialResidential() {
  return (
    <>
      <section>
        <Row className={classes.PionnersofSolar}>
          <Col xs={11} md={11} sm={11} className={classes.marginauto}>
            <Row>
              <Col xs={5} md={5} sm={10} className="m-auto">
                <p>Pionners of Solar & Energy!</p>
                <h2 className="textbold">
                  Commoercial, Residential & Industrial Solar Systems!
                </h2>
              </Col>
              <Col xs={6} md={6} sm={11} className="m-auto">
                <br /> <br />
                <br />
                <br /> <br />
                <p>
                  Todays, our company is one of the most important PV suppiesrs
                  in the North America and Europe. Oue sales offices and
                  warehouses include PV industry experience enables us to
                  provied in-depth material sourcing and supply chain expertise
                  for every step of production and installation process.
                </p>
                <br />
                <Button1
                  className={classes.btnprval}
                  text="Awards & Molestons"
                />
              </Col>

              <Row xs={2} md={2} sm={12} className={classes.peoples1st}>
                <Col xs={4} md={4} sm={10} className={classes.peplecount}>
                  <p>
                    {" "}
                    <span className={`"textbold" ${classes.peoplesnumber}`}>
                      6,154
                    </span>{" "}
                    <span className="textbold">Projects</span> <br />
                    Yet those thet embrace change are thriving building
                    bigger,beeter, faster and stornger producte then ever.
                  </p>
                  <div className="div-span"></div>
                  <p>
                    {" "}
                    <span className={`"textbold" ${classes.peoplesnumber}`}>
                      2,512
                    </span>{" "}
                    <span className="textbold">Employes</span> <br />
                    Yet those thet embrace change are thriving building
                    bigger,beeter, faster and stornger producte then ever.
                  </p>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>

        {/* <Commoercialcarusal /> */}
      </section>
    </>
  );
}
