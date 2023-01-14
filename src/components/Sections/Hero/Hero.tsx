import Description from "../../Description/Description";
import SectionTitle from "../../SectionTitle/SectionTitle";
import tool from "../../../assets/images/tool.svg";
import FormControl from "../../FormControl/FormControl";
import Button from "../../Buttons/Button";
import Socials from "../../Socials/Socials";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="tools">
          <div className="tools-left">
            <div className="designer">
              <SectionTitle body="Awesome tools for Designer & Developer." />
              <Description
                text="Antool is a web collection of information on paid or free Design and Development tools"
                weight="400"
              />
              <FormControl
                icon="search"
                placeholder="find more than 430+ tools..."
              >
                <Button type="primary" text="Search" width="130px" />
              </FormControl>
            </div>
            <Socials />
          </div>
          <div className="tools-right">
            <img src={tool} alt="Tool" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
