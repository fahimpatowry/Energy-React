import "bootstrap/dist/css/bootstrap.css";
import { Col } from "react-bootstrap";
import { FaCheck, FaSolarPanel } from "react-icons/fa";
import Button1 from "../Components/Boutone";
import classes from "../styles/LeadingSupplier.module.css";

export default function Leadingcoldiv() {
  return (
    <div className={classes.vrtesonother}>
      <Col xs={12} md={12} sm={12} className={classes.podiontop}>
        <FaSolarPanel className={classes.icondivprvvel} />
      </Col>
      <h4 className={classes.textbold}>Solar Panels Services </h4>
      <div className={`${classes.solarpamspan} "m-auto"`}></div>
      <p>
        The great thing about solar panels is thet they do not require a lot of
        maintanence. However, it is still important to get them checked
        regularly to cnsre safe.
      </p>
      <br />
      <p className={`${classes.checkbox} "textleft"`}>
        <span className={`${classes.pionnerchack} ${classes.checkboxled}`}>
          <FaCheck />
        </span>
        Clening of lnverter
      </p>
      <p className={`${classes.checkbox} "textleft"`}>
        <span className={`${classes.pionnerchack} ${classes.checkboxled}`}>
          <FaCheck />
        </span>
        Perform shading tests
      </p>
      <p className={`${classes.checkbox} "textleft"`}>
        <span className={`${classes.pionnerchack} ${classes.checkboxled}`}>
          <FaCheck />
        </span>
        90 day repairs warrenty
      </p>

      <Button1
        type="button"
        className={`${classes.colorwhite} ${classes.btndark}`}
        text="Read More"
      />
    </div>
  );
}
