import Logo from "../../../assets/images/icons/Logo.svg";

const HeaderLogo = () => {
  return (
    <div className="logo-container">
      <div className="logo-wrap">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="logo-name">antools.</div>
    </div>
  );
};

export default HeaderLogo;
