import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import slider1 from "../../../../public/img/SLIDE1.jpg";
import slider2 from "../../../../public/img/Slide2.jpg";
import slider3 from "../../../../public/img/SLIDE 3.jpg";
const Container = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  margin: 100px 0;
`;
const Wrapper = styled.div`
  width: 1440px;
  height: 319px;
`;
const ImgList = styled.div``;
const Img = styled.img`
  width: 1426px;
  object-fit: cover;
`;
const SliderItem = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
    <Container>
      <Wrapper>
        <Slider {...settings}>
          <ImgList>
            <Img src={slider1}></Img>
          </ImgList>
          <ImgList>
            <Img src={slider2}></Img>
          </ImgList>
          <ImgList>
            <Img src={slider3}></Img>
          </ImgList>
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default SliderItem;
