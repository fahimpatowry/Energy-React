import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { BiArrowToRight, BiSearchAlt2, BiShoppingBag } from "react-icons/bi";
import classes from "../styles/Navbar.module.css";

export default function SeconNverBut() {
  const [contolcss, setContolcss] = useState("flase");

  const changeCss = (e) => {
    contolcss ? setContolcss(false) : setContolcss(true);
  };

  const clickInput = (e) => {
    setContolcss(true);
  };

  return (
    <Form className="d-flex">
      <Button className={classes.serchbtn} onClick={changeCss}>
        <BiSearchAlt2 /> {/* icon */}
        <input
          type="text"
          value="Enter value!"
          onClick={clickInput}
          className={contolcss ? "inputhide" : "inputshow"}
        />
      </Button>

      <Button className={classes.serchbtn} type="submit">
        <BiShoppingBag /> {/* icon */}
      </Button>

      <Button class="btn btn-outline-success but-Aquc" type="submit">
        Reuest A Que
        <BiArrowToRight />
      </Button>
    </Form>
  );
}
