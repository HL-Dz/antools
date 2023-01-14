import Button from "../../Buttons/Button";

const HeaderButtons = () => {
  return (
    <div className="buttons-wrap">
      <Button text="Login" type="secondary" />
      <Button text="Sign Up" type="primary" />
    </div>
  );
};

export default HeaderButtons;
