import arrow from "../../assets/images/icons/arrow.svg";
import navData from "./navidation-data";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav className="nav">
        <ul className="nav__list">
          {navData.map((el) => {
            return (
              <li className="nav__item" key={el.id}>
                <a
                  href={el.path}
                  className="nav__link"
                  style={el.icon ? { display: "inline-flex" } : {}}
                >
                  {el.content}
                  {el.icon ? (
                    <img
                      src={arrow}
                      alt="Arrow"
                      style={{ marginLeft: "10px" }}
                    />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
