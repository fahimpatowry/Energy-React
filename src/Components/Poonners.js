import "bootstrap/dist/css/bootstrap.css";
import { Col, Row } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import Button1 from "../Components/Boutone";
import Imagesolar from "../Images/solar-stric.jpg";
import Classes from "../styles/Poonners.module.css";
import Paragrap1 from "./Paragrap";

export default function Poonners() {
  const [text] = "Read more";
  console.log(text);
  return (
    <div className="col-lg-10 col-md-10 col-sm-11 m-auto">
      <Row className={Classes.painnersection}>
        <Col xs={5} md={4} sm={6}>
          <img className={Classes.ponnerimg} src={Imagesolar} alt="" />
        </Col>

        <Col xs={7} md={7} sm={12} className={Classes.painnertext}>
          <Paragrap1
            className={Classes.pionnersmalep}
            text="Complete Commercial And Residential System"
          />

          <br />
          <h2 className={Classes.painnerh2}>
            We Are Poonners In The World Of Solar & Renewable Energy!
          </h2>

          <br />
          <Row>
            <Col xs={7} md={7} sm={7}>
              <p>
                We drive the transiton to more sustainable, ralible & affordable
                energy systems, With our innovative technologies, we energize
                society,thit's our ami!
              </p>
              <br />
              <p>
                The increase in extreme weather events and rising lecels are
                unmistakable signs of climate change. roughly 850 million people
                still live without elecricity which is the foundation of
                sustainable decelopment.
              </p>
            </Col>

            <Col xs={5} md={5} sm={5}>
              <p>
                How can we meet the growing demeand for delecticity while
                protecting our climate & make planet a better place?
              </p>

              <br />

              <p className={Classes.checkbox}>
                <span className={Classes.pionnerchack}>
                  <FaCheck />
                </span>{" "}
                Relibibily and performance
              </p>

              <p className={Classes.checkbox}>
                <span className={Classes.pionnerchack}>
                  <FaCheck />
                </span>{" "}
                Just-in-time manufacturing{" "}
              </p>
              <p className={Classes.checkbox}>
                <span className={Classes.pionnerchack}>
                  <FaCheck />
                </span>{" "}
                Solar material financing
              </p>
            </Col>

            <Button1 className={Classes.Poonnersbtn} text="Read more" />
            {/* <Button className={Classes.Poonnersbtn}>
              Read more <FaArrowRight />
            </Button> */}
          </Row>
        </Col>
      </Row>
    </div>
  );
}
