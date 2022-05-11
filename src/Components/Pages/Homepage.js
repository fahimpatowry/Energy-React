import Articles from "../Articles";
import Brand from "../Brand";
import CommoercialResidential from "../CommoercialResidential";
import Discover from "../Discober";
import Footer from "../Footer";
import Herosjs from "../Heros";
import LatestProject from "../LatestProject";
import LeadingSuppliersec from "../LeadingSupplier";
import Navber from "../Navber";
import Poonners from "../Poonners";
import Providing from "../Providing";

export default function Homepage() {
  return (
    <>
      <Navber />
      <Herosjs />
      <Poonners />
      <Providing />
      <LeadingSuppliersec />
      <CommoercialResidential />
      <LatestProject />
      <Brand />
      <Discover />
      <Articles />
      <Footer />
    </>
  );
}
