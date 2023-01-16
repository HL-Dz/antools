import { useState, Fragment } from "react";

import arrow from "../../../assets/images/arrow.svg";
import sliderData from "./slider-data";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const showCurrentSlide = (ind: number) => {
    setCurrent(ind);
  };
  return (
    <div className="slideshow">
      <div className="container">
        <div className="slider__wrap">
          <div className="arrow-left" onClick={prevSlide}>
            <img src={arrow} alt="Arrow-left" />
          </div>
          <div className="arrow-right" onClick={nextSlide}>
            <img src={arrow} alt="Arrow-right" />
          </div>

          {sliderData.map((el, ind) => {
            return (
              <Fragment key={el.id}>
                {ind === current && (
                  <div
                    className={`slide${ind === current ? " slide-active" : ""}`}
                  >
                    <div className="slide__pic">
                      <img src={el.image} alt={el.name} />
                      <div className="person">
                        <div className="person__name">{el.name}</div>
                        <div className="person__position">{el.position}</div>
                      </div>
                    </div>
                    <div className="slide__comment">
                      <div className="comment">{el.comment}</div>
                    </div>
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>

        <div className="slider-dots">
          {sliderData.map((el, index) => {
            return (
              <div
                key={el.id}
                className={`dot${current === index ? " dot-active" : ""}`}
                onClick={() => showCurrentSlide(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
