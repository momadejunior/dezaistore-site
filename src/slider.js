import React from "react";
import Slider from "react-slick";



const SliderMain = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <button type="button" className="slick-prev">Previous</button>,
    nextArrow: <button type="button" className="slick-next">Next</button>,
  };

  return (
    <>
      <Slider {...settings} className="homepage-slider">
        <div>
          <div className="filter-slider" style={{ backgroundImage: "url('./img/slider-01.jpg')", backgroundSize: "cover", height: "720px" }}>
              <div className="title-product">
                  <h1>Quimono Maya</h1>
                <p>Quimono confecionado em tecido com mistura de linho e algodão. Fecho com cinto do mesmo tecido.</p>
                <a href="/details/clpfz96ou6t3s0bjx5vmpr0qv"><button class="buy-product">Add to Cart</button></a>
              </div>
          </div>
        </div>

        <div>
          <div className="filter-slider" style={{ backgroundImage: "url('./img/slider-02.jpg')", backgroundSize: "cover", height: "720px" }}>
          <div className="title-product">
                  <h1>Vestido Selma</h1>
                <p>Vestido midi com decote quadrado, confecionado com tecido algodão elástico. Fecho invisível lateral.</p>
                <a href="/details/clpipvhyg0te60bjvhacy9wcb"><button class="buy-product">Add to Cart</button></a>
              </div>
          </div>
        </div>

        <div>
          <div className="filter-slider" style={{ backgroundImage: "url('./img/slider-03.jpg')", backgroundSize: "cover", height: "720px" }}>
          <div className="title-product">
                  <h1>Saia Marisol</h1>
                <p>Saia confecionada em tecido com mistura de linho e algodão . Cintura subida com folho à frente. Fecho invisível lateral.</p>
                <a href="/details/clpis2igk0z8o0blm6lvdbjrv"><button class="buy-product">Add to Cart</button></a>
              </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default SliderMain;
