import ColumnCard from "../ColumnCard/ColumnCard";
import HeaderLogo from "../Header/HeaderLogo/header-logo";
import data from "./footer-data";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrap">
          <div className="footer__start">
            <HeaderLogo />
            <div className="footer__copy">Copyright 2021. Antools</div>
            <div className="footer__desc">
              Antool is a web collection of information on paid or free Design
              and Development tools
            </div>
          </div>
          {data.map((el) => (
            <ColumnCard key={el.id} {...el} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
