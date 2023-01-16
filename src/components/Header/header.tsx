import Navigation from "../Navigation/navigation";
import HeaderButtons from "./HeaderButtons/header-buttons";
import HeaderLogo from "./HeaderLogo/header-logo";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrap">
          <HeaderLogo />
          <Navigation />
          <HeaderButtons />
        </div>
      </div>
    </header>
  );
};

export default Header;
