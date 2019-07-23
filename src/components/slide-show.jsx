import React, { Component } from "react";
import Image from "react-image-resizer";
import skiPic from "../pictures/bot.jpg";
import snbPic from "../pictures/snb.jpg";

class SlideShow extends Component {
  state = {
    slides: [{ id: 0, pic: skiPic, isActive: true }, { id: 1, pic: snbPic }]
  };

  renderSlideIndicator = slide => {
    return (
      <li
        data-target="#carouselMain"
        data-slide-to={slide.id}
        className={slide.isActive ? "active" : ""}
      />
    );
  };

  renderSlideItem = slide => {
    let classes = "carousel-item";
    if (slide.isActive) {
      classes = classes + " active";
    }
    return (
      <div className={classes}>
        <img src={slide.pic} className="d-block w-100" alt={slide.id} />
      </div>
    );
  };

  render() {
    return (
      <div id="carouselMain" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {this.state.slides.map(this.renderSlideIndicator)}
        </ol>
        <div className="carousel-inner">
          {this.state.slides.map(this.renderSlideItem)}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselMain"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselMain"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default SlideShow;
