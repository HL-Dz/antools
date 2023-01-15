import Button from "../../Buttons/Button";
import Description from "../../Description/Description";
import FormControl from "../../FormControl/FormControl";
import SectionTitle from "../../SectionTitle/SectionTitle";

const Contributor = () => {
  return (
    <div className="contributor">
      <div className="container">
        <div className="contributor-wrap flex-column">
          <SectionTitle body="Become a contributor?" />
          <Description
            text="Join us and get tips & tricks to become a great Designer and Developer"
            align="center"
          />
          <FormControl placeholder="Enter your email...">
            <Button text="Join us" type="primary" width="130px" />
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Contributor;
