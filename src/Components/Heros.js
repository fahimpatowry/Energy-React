import "bootstrap/dist/css/bootstrap.css";
import { Button, Carousel } from "react-bootstrap";
import { BiArrowFromLeft, BiHome, BiSun } from "react-icons/bi";
import image3 from "../Images/herors1pic (1).jpg";
import image1 from "../Images/herors1pic (3).jpg";
import image2 from "../Images/herors1pic (4).jpg";
import image5 from "../Images/housetree.png";
import image4 from "../Images/solarffff.png";
import classes from "../styles/Heros.module.css";

export default function Herosjs() {
  return (
    <Carousel fade className={classes.crosul}>
      <Carousel.Item>
        <img className={classes.carosulimg} src={image1} alt="First slide" />
        <Carousel.Caption className={classes.carosulbg}>
          <div className="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <h1>Energize Society Using Sustainable & Reliable Energy11111</h1>
              <p1>
                A world wide distributor of solar supplies knowledgeable
                service.
              </p1>

              {/* <br><br> */}
              <div>
                <BiSun className={classes.iconmarginheros} />
                <BiHome className={classes.iconmarginheros} />
                <BiSun className={classes.iconmarginheros} />
                <BiHome className={classes.iconmarginheros} />
                <img
                  class={`${classes.heorsiconing} ${classes.iconmarginheros}`}
                  src={image4}
                  alt=""
                />
                <button type="button" class="btn btn-success">
                  Our Service <BiArrowFromLeft />
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-5 m-auto col-sm-0">
              <div className={classes.mission}>
                <div class="col-5 m-auto  icon-center">
                  <div className={classes.divgreen}></div>
                  <div className={classes.iconcenter}>
                    <img className={classes.herosimage} src={image5} alt="" />
                  </div>
                  <h5>Our Mission</h5>
                  <p className={classes.misionfont}>
                    Utilising latest processing solutiona, and decedes of work
                    experemce.
                  </p>

                  <Button type="button" className={classes.btnaround}>
                    <BiArrowFromLeft />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className={classes.carosulimg} src={image2} alt="First slide" />
        <Carousel.Caption className={classes.carosulbg}>
          <div className="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <h1>Energize Society Using Sustainable & Reliable Energy22222</h1>
              <p1>
                A world wide distributor of solar supplies knowledgeable
                service.
              </p1>

              {/* <br><br> */}
              <div className="littel-box">
                <BiSun className={classes.iconmarginheros} />
                <BiHome className={classes.iconmarginheros} />
                <BiSun className={classes.iconmarginheros} />
                <BiHome className={classes.iconmarginheros} />
                <img
                  class={`${classes.heorsiconing} ${classes.iconmarginheros}`}
                  src={image4}
                  alt=""
                />
                <button type="button" class="btn btn-success">
                  Our Service <BiArrowFromLeft />
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-5 m-auto col-sm-0">
              <div className={classes.mission}>
                <div class="col-5 m-auto  icon-center">
                  <div className={classes.divgreen}></div>
                  <div className={classes.iconcenter}>
                    <img className={classes.herosimage} src={image5} alt="" />
                  </div>
                  <h5>Our Mission</h5>
                  <p className={classes.misionfont}>
                    Utilising latest processing solutiona, and decedes of work
                    experemce.
                  </p>

                  <Button type="button" className={classes.btnaround}>
                    <BiArrowFromLeft />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className={classes.carosulimg} src={image3} alt="First slide" />
        <Carousel.Caption className={classes.carosulbg}>
          <div className="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <h1>Energize Society Using Sustainable & Reliable Energy33</h1>
              <p1>
                A world wide distributor of solar supplies knowledgeable
                service.
              </p1>

              {/* <br><br> */}
              <div className="littel-box">
                <BiSun className={classes.iconmarginheros} />
                <BiHome className={classes.iconmarginheros} />
                <BiSun className={classes.iconmarginheros} />
                <BiHome className={classes.iconmarginheros} />
                <img
                  class={`${classes.heorsiconing} ${classes.iconmarginheros}`}
                  src={image4}
                  alt=""
                />
                <button type="button" class="btn btn-success">
                  Our Service <BiArrowFromLeft />
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-5 m-auto col-sm-0">
              <div className={classes.mission}>
                <div class="col-5 m-auto  icon-center">
                  <div className={classes.divgreen}></div>
                  <div className={classes.iconcenter}>
                    <img className={classes.herosimage} src={image5} alt="" />
                  </div>
                  <h5>Our Mission</h5>
                  <p className={classes.misionfont}>
                    Utilising latest processing solutiona, and decedes of work
                    experemce.
                  </p>

                  <Button type="button" className={classes.btnaround}>
                    <BiArrowFromLeft />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
