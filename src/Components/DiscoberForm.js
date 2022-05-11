import { useState } from "react";
import { Col } from "react-bootstrap";
import classes from "../styles/Dicsover.module.css";
import Button1 from "./Boutone";

export default function DicsoverFrom() {
  const [selectvalue, setselectvalue] = useState("0");
  const [selectChake, setselectChake] = useState("false");

  const hendelValu = (e) => {
    console.log(e.target.value);
    setselectvalue(e.target.value);
    console.log("selectvalue  =" + selectvalue);
  };

  // need chaked update
  const hendelChake = (e) => {
    console.log(e.target.chaked);
    setselectChake(e.target.chaked); //need chaked update
    console.log("selectChake  =" + selectChake);
  };

  return (
    <Col xs={6} md={6} sm={12}>
      <Col xs={10} md={10} sm={10} className={classes.Discoverfrom}>
        <form action="" className="row">
          <h5 className="textbold">Request A Quote</h5>
          <p
            className={`${classes.Discoverfromp} "textbold" ${classes.texteigbalc}`}
          >
            We take great pride in everything that we do, control over products
            allows to us to ensure our customers receive the best quality
            service.
          </p>

          <div className="col-6">
            <label className={`${classes.fromlevel} "textbold"`} for="systtem">
              Who will be intall system?
            </label>
            <select
              className={`${classes.fromselect}  ${classes.fstleveldis}`}
              name="system"
              onClick={hendelValu}
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>

            <label className="fromlevel textbold" for="by"></label>
            <label className={`${classes.fromlevel} "textbold"`} for="systtem">
              System completed by?
            </label>
            <select
              className={`${classes.fromselect}  ${classes.fstleveldis}`}
              name="system"
              onClick={hendelValu}
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>

            <label className={`${classes.fromlevel} "textbold"`} for="systtem">
              Monthly electic usage in Kwh?
            </label>
            <select
              className={`${classes.fromselect}  ${classes.fstleveldis}`}
              name="system"
              onClick={hendelValu}
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="col-6">
            <label className={`${classes.fromlevel} "textbold"`} for="systtem">
              Who will be intall system?
            </label>
            <select
              className={`${classes.fromselect}  ${classes.fstleveldis}`}
              name="system"
              onClick={hendelValu}
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>

            <label className={`${classes.fromlevel} "textbold"`} for="systtem">
              Who will be intall system?
            </label>
            <select
              className={`${classes.fromselect}  ${classes.fstleveldis}`}
              name="system"
              onClick={hendelValu}
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>

            <label className={`${classes.fromlevel} "textbold"`} for="systtem">
              Who will be intall system?
            </label>
            <select
              className={`${classes.fromselect}  ${classes.fstleveldis}`}
              name="system"
              onClick={hendelValu}
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <div className={classes.formlstdivdis}>
            <label for="no">Preferred Contact Method</label> <br />
            <span className={classes.disspan}>
              <input type="checkbox" onClick={hendelChake} />
              All
            </span>
            <span className={classes.disspan}>
              <input type="checkbox" onClick={hendelChake} />
              Email
            </span>
            <span className={classes.disspan}>
              <input type="checkbox" onClick={hendelChake} />
              Phone
            </span>
          </div>

          <Button1 className={classes.Latestbtn} text="Submit Request" />
        </form>
      </Col>
    </Col>
  );
}
