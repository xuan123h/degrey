import React, { useState } from "react";
import styled from "styled-components";
import Sale from "../components/Content/Sale/Sale";
import SetOutline from "../components/Content/SetOutline/SetOutline";
import Slider from "../components/Content/Slider/Slider";
import icon from "../../public/img/popup/popup-discount.png";
import Products from "./Products";
import ReactModal from "react-modal";
const Container = styled.div``;
const Content = styled.div`
  inset: 0;
  background: #ffffff;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -3500px;
  border: none;
`;
const ContentItem = styled.div`
  /* width: 600px; */
  background: white;
  border-radius: 10px;
  outline: none;
  padding: 0 2px;
  display: flex;
  align-items: center;
  position: relative;
  border: none;
`;
const Img = styled.img`
  width: 600px;
  height: 540px;
  object-fit: cover;
  border-radius: 5px;
`;
const Icon = styled.p`
  border: none;
  list-style: none;
  outline: none;
  color: green;
  font-size: 34px;
  position: absolute;
  top: -5px;
  right: -5px;
  cursor: pointer;
`;
const Home = () => {
  const [close, setClose] = useState(true);
  const handleClose = () => {
    setClose((close) => !close);
  };
  return (
    <Container>
      {close && (
        <ReactModal isOpen={close === true ? "true" : "false"}>
          <Content>
            <ContentItem>
              <Img src={icon}></Img>
              <Icon onClick={handleClose}>
                <i class="ri-close-circle-line"></i>{" "}
              </Icon>
            </ContentItem>
          </Content>
        </ReactModal>
      )}
      <Slider></Slider>
      <Sale></Sale>
      <Products></Products>
      <SetOutline></SetOutline>
    </Container>
  );
};

export default Home;
