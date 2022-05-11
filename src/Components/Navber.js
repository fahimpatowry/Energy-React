import "bootstrap/dist/css/bootstrap.css";
import classes from "../styles/Navbar.module.css";
import FristNav from "./FristNav";
import SecondNav from "./SecontNav";

export default function Navber() {
  return (
    <div className={classes.mainnev}>
      <FristNav />
      <SecondNav />
    </div>

    /* <SecondNav /> */
  );
}
