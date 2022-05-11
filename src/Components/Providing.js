import "bootstrap/dist/css/bootstrap.css";
import { Carousel, Col, Row } from "react-bootstrap";
import { FaHouseUser } from "react-icons/fa";
import Button1 from "../Components/Boutone";
import Imagesolar from "../Images/herors1pic (1).jpg";
import classes from "../styles/Providing.module.css";
import Hadding1 from "./Heddng1";
import Paragrap1 from "./Paragrap";

export default function Providing(props) {
  return (
    <Row className={classes.Providingvaluesec}>
      <Col xs={10} md={10} sm={12} className={classes.Providingvalue}>
        <Paragrap1
          className={classes.Providingvaluep}
          text="Sustainable, Reliable & Affordable Energy"
        />
        <Row>
          <Col xs={6} md={6} sm={12}>
            <Hadding1
              className={classes.colorwhite}
              text="Providing value To Our ClientsThrough Onegoing Product &
                        Innovation."
            />
          </Col>
          <Col className="col-lg-6 col-md-6 col-sm-12">
            <Paragrap1
              className={classes.colorwhite}
              text="while improving the yield and performance of solar energy 
                        products, our PV industry to provide in-depth material sourcing
                        , financing and chain expertise for every step."
            />
            <br />
            <Paragrap1
              className={classes.colorwhite}
              text="Raw polycrystalline silion for PV manufacturing. Offered 
                        in various grades and formats including, chips, powder and 
                        ingot."
            />

            <Button1
              className={`${classes.btnprval} ${classes.bgnone}`}
              text="Get Start"
            />
            <Button1
              className={`${classes.btnprval} ${classes.bgnone}`}
              text="Explore Our Plans"
            />
          </Col>
        </Row>

        <Carousel>
          <Carousel.Item classname={classes.colorwhite}>
            <Row xs={11} md={10} sm={7} className={classes.marcenter}>
              <Col xs={3} md={3} sm={12} classname={classes.provvalusmaldiv}>
                <Row classname={classes.provvalusmaldiv2}>
                  <Col xs={6} md={6} sm={6} classname="m-auto">
                    <FaHouseUser />
                  </Col>
                  <h5 classname={classes.colorwhite}>Save Your Money </h5>
                  <p classname={classes.colorwhite}>
                    Everyday the sun provides us with abundance of free energy
                    by placing solar panels on your roof.
                  </p>

                  <Button1 classname={classes.procvspan} />
                </Row>
              </Col>

              <Col xs={3} md={3} sm={12} classname={classes.provvalusmaldiv}>
                <Row classname={classes.provvalusmaldiv2}>
                  <Col xs={6} md={6} sm={6} classname="m-auto">
                    <FaHouseUser />
                  </Col>
                  <h5 classname={classes.colorwhite}>Save Your Money </h5>
                  <p classname={classes.colorwhite}>
                    Everyday the sun provides us with abundance of free energy
                    by placing solar panels on your roof.
                  </p>

                  <Button1 classname={classes.procvspan} />
                </Row>
              </Col>

              <Col xs={3} md={3} sm={12} classname={classes.provvalusmaldiv}>
                <Row classname={classes.provvalusmaldiv2}>
                  <Col xs={6} md={6} sm={6} classname="m-auto">
                    <FaHouseUser />
                  </Col>
                  <h5 classname={classes.colorwhite}>Save Your Money </h5>
                  <p classname={classes.colorwhite}>
                    Everyday the sun provides us with abundance of free energy
                    by placing solar panels on your roof.
                  </p>

                  <Button1 classname={classes.procvspan} />
                </Row>
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item classname={classes.colorwhite}>
            <Row xs={11} md={10} sm={7} className={classes.marcenter}>
              <Col xs={3} md={3} sm={12} classname={classes.provvalusmaldiv}>
                {/* <div classname={classes.provvalusmaldiv2}> */}
                <Row>
                  <Col xs={6} md={6} sm={6} classname="m-auto">
                    <FaHouseUser />
                  </Col>
                  <h5 classname={classes.colorwhite}>Save Your Money </h5>
                  <p classname={classes.colorwhite}>
                    Everyday the sun provides us with abundance of free energy
                    by placing solar panels on your roof.
                  </p>

                  <Button1 classname={classes.procvspan} />
                </Row>
                {/* </div> */}
              </Col>

              <Col xs={3} md={3} sm={12} classname={classes.provvalusmaldiv}>
                <Row classname={classes.provvalusmaldiv2}>
                  <Col xs={6} md={6} sm={6} classname="m-auto">
                    <FaHouseUser />
                  </Col>
                  <h5 classname={classes.colorwhite}>Save Your Money </h5>
                  <p classname={classes.colorwhite}>
                    Everyday the sun provides us with abundance of free energy
                    by placing solar panels on your roof.
                  </p>

                  <Button1 classname={classes.procvspan} />
                </Row>
              </Col>

              <Col xs={3} md={3} sm={12} classname={classes.provvalusmaldiv}>
                <Row classname={classes.provvalusmaldiv2}>
                  <Col xs={6} md={6} sm={6} classname="m-auto">
                    <FaHouseUser />
                  </Col>
                  <h5 classname={classes.colorwhite}>Save Your Money </h5>
                  <p classname={classes.colorwhite}>
                    Everyday the sun provides us with abundance of free energy
                    by placing solar panels on your roof.
                  </p>

                  <Button1 classname={classes.procvspan} />
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>

        <Row className={`${classes.colorwhite} ${classes.lastproval}`}>
          <Col xs={4} md={4} sm={6} className={classes.lastprovaltest}>
            <h6>
              If you have any questions or need help, feel free to contect with
              our team, or can calll us any time(008) 0176542311
            </h6>
            <br />

            <Button1
              className={`${classes.btnprval} ${classes.bgnone}`}
              text="Free Estimate "
            />
            {/* <button type="button" className="btn btn-prval">Free Estimate <i className="fa fa-arrow-right"></i></button> */}
          </Col>
          <Col xs={8} md={8} sm={5} className={classes.lastdivimhprovve2}>
            <img className={classes.lastdivimhprovve} src={Imagesolar} alt="" />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
