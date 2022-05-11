import "bootstrap/dist/css/bootstrap.css";
import { Col, Row } from "react-bootstrap";
import {
  HiOutlineClock,
  HiOutlineMail,
  HiOutlinePhoneOutgoing,
} from "react-icons/hi";
import { ImFacebook, ImInstagram, ImWhatsapp } from "react-icons/im";
import myImage from "../Images/uk.png";
import classes from "../styles/FristNavbar.module.css";
import classesq1 from "../styles/Navbar.module.css";

export default function FristNav() {
  return (
    <Row className={classes.secondtNav}>
      <Col lg={7} md={12} sm={12}>
        <ul className={`${classes.liststyle} ${classes.fontsmol}`}>
          <li>
            <a href="tel:01828065">
              <HiOutlinePhoneOutgoing className={classes.icongreen} />
              Phone: 0182835
            </a>
          </li>
          <li>
            <a href="mailto:patowa@gmail.com">
              <HiOutlineMail className={classes.icongreen} />
              Email: patowar2@gmail.com
            </a>
          </li>
          <li>
            <a href="mailto:patowa@gmail.com">
              <HiOutlineClock className={classes.icongreen} />
              time
            </a>
          </li>
          <li>
            <a href="df">Disabled</a>
          </li>
        </ul>
      </Col>

      {/* <Col lg={5} md={12} sm={12} className={classes.navcplt}>
        <Row md={12} sm={12}> */}
      <Col lg={1} md={3} sm={0} className={classes.socialicon}>
        <ul className={classes.liststyle}>
          <li>
            <a href="fd">
              <ImFacebook className={classes.icongreen} />
            </a>
          </li>
          <li>
            <a href="fd">
              <ImInstagram className={classes.icongreen} />
            </a>
          </li>
          <li>
            <a href="fd">
              <ImWhatsapp className={classes.icongreen} />
            </a>
          </li>
        </ul>
      </Col>

      <Col
        lg={3}
        md={7}
        sm={12}
        className={`${classesq1.testbomd} ${classesq1.fstnavitem}`}
      >
        <ul className={`${classes.liststyle} ${classes.liststyleicon}`}>
          <li>
            <a href="fd">News & Media</a>
          </li>
          <li>
            <a href="dfd">Creers</a>
          </li>
          <li>
            <a href="fd">FAQs</a>
          </li>
        </ul>
      </Col>

      <Col lg={1} md={0} sm={0} className={classes.countrybox}>
        <Row className="">
          <Col lg={4}>
            <img className={classes.ukpic} src={myImage} alt="" />
          </Col>

          <Col lg={5}>
            <form className={classes.frromenglish} action="/action_page.php">
              <select name="cars" id="cars">
                <option value="volvo">Elglish</option>
                <option value="saab">Bangla</option>
              </select>
            </form>
          </Col>
        </Row>
      </Col>
      {/* </Row>
      </Col> */}
    </Row>
  );
}
