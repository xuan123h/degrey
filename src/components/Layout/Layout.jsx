import React from "react";
import styled from "styled-components";
import Routers from "../../routes/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const Description = styled.p`
  text-align: center;
  color: #212529;
  font-size: 16px;
`;
const Content = styled.div`
  margin-bottom: 60px;
  margin-top: -100px;
`;
const Layout = () => {
  return (
    <div>
      <Header />
      <Content>
        <Routers />
      </Content>
      <hr />
      <Footer />
      <hr />
      <Description> Copyright © 2022 DEGREY VIETNAM</Description>
    </div>
  );
};

export default Layout;
