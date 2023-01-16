import { useState } from "react";
import { delay } from "../../utils/utils";
import navData, { MenuItem } from "./navidation-data";

const Navigation = () => {
  const [isActiveLink, setIsActiveLink] = useState<MenuItem | null>(null);
  const [isCloseDrop, setIsCloseDrop] = useState(false);
  // const toggleDropdown = (item: MenuItem) => {
  //   setIsActiveLink(item);
  //   if (isActiveLink !== null && isActiveLink.id === item.id) {
  //     hideDropdown();
  //   } else {
  //   }
  // };

  // const hideDropdown = async () => {
  //   setIsCloseDrop(true);
  //   await delay(450);
  //   setIsActiveLink(null);
  //   setIsCloseDrop(false);
  // };

  const toggleDrop = (item: MenuItem) => {
    if (isActiveLink !== null && isActiveLink.id === item.id) {
      hideDrop();
    } else {
      showDrop(item);
    }
  };

  const showDrop = (item: MenuItem) => {
    setIsActiveLink(item);
  };
  const hideDrop = async () => {
    setIsCloseDrop(true);
    await delay(250);
    setIsActiveLink(null);
    setIsCloseDrop(false);
  };

  return (
    <div className="navigation">
      <nav className="nav">
        <ul className="nav__list">
          {navData.map((el) => {
            let activeArrow =
              el.subMenu !== undefined &&
              el.subMenu?.length > 0 &&
              el.id === isActiveLink?.id
                ? " nav__arrow-active"
                : "";
            return (
              <li className="nav__item" key={el.id}>
                <a
                  href={el.path}
                  className="nav__link"
                  onClick={() => toggleDrop(el)}
                >
                  {el.content}
                  {el.subMenu !== undefined && el.subMenu?.length > 0 ? (
                    <span className={`nav__arrow${activeArrow}`}>❯</span>
                  ) : null}
                </a>
                {el.subMenu !== undefined &&
                el.subMenu?.length > 0 &&
                isActiveLink?.id === el.id ? (
                  <div
                    className={`dropdown${
                      isCloseDrop ? " dropdown-hidden" : ""
                    }`}
                  >
                    <ul className="dropwowl__list">
                      {el.subMenu.map((item) => {
                        return (
                          <li className="dropdown__item" key={item.id}>
                            <a
                              href={item.path}
                              className="dropdown__link"
                              onClick={() => hideDrop()}
                            >
                              {item.body}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
