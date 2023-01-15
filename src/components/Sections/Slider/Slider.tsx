import person from "../../../assets/images/person.png";
import arrow from "../../../assets/images/arrow.svg";

const Slider = () => {
  return (
    <div className="slideshow">
      <div className="container">
        <div className="slider__wrap">
          <div className="arrow-left">
            <img src={arrow} alt="Arrow-left" />
          </div>
          <div className="arrow-right">
            <img src={arrow} alt="Arrow-right" />
          </div>
          <div className="slide">
            <div className="slide__pic">
              <img src={person} alt="Person" />
              <div className="person">
                <div className="person__name">Ronald Richards</div>
                <div className="person__position">Product Manager</div>
              </div>
            </div>
            <div className="slide__comment">
              <div className="comment">
                Incididunt cillum do sint sint enim ullamco id deserunt mollit
                qui reprehenderit do. Velit ex tempor cillum ad sint occaecat.
                Do nulla velit labore occaecat do deserunt Lorem magna officia
                incididunt consectetur amet. Sunt consectetur veniam minim ex
                commodo sint non. Occaecat aute officia excepteur non laboris id
                qui ad.
              </div>
            </div>
          </div>
        </div>
        <div className="slider-dots">
          <div className="dot"></div>
          <div className="dot dot-active"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
