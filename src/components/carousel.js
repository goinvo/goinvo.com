import React, { Component } from 'react'
import SlickCarousel from 'react-slick'

class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0,
    }

    this.carousel = React.createRef()
  }

  afterChange = (oldIndex, activeIndex) => {
    // NOTE: Have to use hacky timeout with beforeChange because of react-slick bug:
    // afterChange is not called in certain configs (adaptiveHeight=true)
    // Delaying til "afterChange" helps state be more consistent because the
    // slick transition was being interupted by the state change for some reason
    // (I guess repainting it before slick sets its new internal index?)
    setTimeout(() => {
      this.setState({ activeIndex })
    }, 500)
  }

  goTo = i => {
    this.setState({ activeIndex: i }, () => {
      this.carousel.current.slickGoTo(i)
    })
  }

  render() {
    const carouselSettings = {
      dots: this.props.dots,
      infinite: this.props.infinite,
      speed: this.props.speed,
      slidesToShow: this.props.slidesToShow,
      slidesToScroll: this.props.slidesToScroll,
      adaptiveHeight: this.props.adaptiveHeight,
    }

    return (
      <div className="carousel">
        {this.props.menuItems && this.props.menuItems.length ? (
          <div className="max-width content-padding">
            <ul className="list--unstyled carousel__menu-items">
              {this.props.menuItems.map((item, i) => {
                return (
                  <li
                    key={item}
                    className={`carousel__menu-item ${
                      i === this.state.activeIndex
                        ? 'carousel__menu-item--selected'
                        : ''
                    }`}
                  >
                    <button
                      className="button button--link"
                      onClick={() => this.goTo(i)}
                    >
                      {item}
                    </button>
                    <span className="carousel__selected-indicator" />
                  </li>
                )
              })}
            </ul>
          </div>
        ) : null}
        <div className="carousel__carousel-container background--gray">
          <SlickCarousel
            {...carouselSettings}
            ref={this.carousel}
            beforeChange={this.afterChange}
          >
            {this.props.children}
          </SlickCarousel>
        </div>
      </div>
    )
  }
}

Carousel.defaultProps = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
}

export default Carousel
