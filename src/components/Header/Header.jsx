import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../public/img/logo.svg";
import "tippy.js/dist/tippy.css"; // optional
import Tippy from "@tippyjs/react/headless"; // different import path!
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 240px;
`;
const Wrapper = styled.div`
  width: 1420px;
  display: flex;
  align-items: center;
  gap: 200px;
`;
const Logo = styled.img`
  width: 85px;
  height: 70px;
  object-fit: cover;
`;
const List = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  font-family: "Alkalami", serif;
  font-weight: 500;
  margin: 0 55px;
`;
const ListItem = styled.li`
  width: 120px;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 6px;
`;
const ListIcon = styled.p`
  cursor: pointer;
  position: relative;
`;
const ListName = styled.div``;
const Menu = styled.p`
  display: none;
  position: relative;
`;
const ModalList = styled.div`
  width: 212px;
  height: 188px;
  color: #212529;
  font-size: 16px;
  background-color: gold;
  position: absolute;
  z-index: 100;
  border-radius: 10px;
  padding: 15px 5px;
`;
const ModalListItem = styled.li`
  padding: 6px 8px;
  text-align: start;
`;
const ModalSearch = styled.div`
  position: absolute;
  left: -200px;
  top: -04px;
`;
const ModalSearchItem = styled.input`
  width: 180px;
  height: 30px;
  padding: 0px 5px;
  border-radius: 5px;
  color: green;
  outline: none;
  border: none;
  border: 1px solid #ccc;
  transition: all 0.5s ease;
  transform: ${(props) =>
    props.showTabs ? "translateX(200px)" : "translateX(0px)"};
  opacity: ${(props) => (props.showTabs ? "0" : "1")};
`;
const ListIconNumber = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 20px;
  position: absolute;
  top: 0px;
  right: -18px;
  background: black;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 8px;
`;
const Header = () => {
  const [showTabs, setShowTabs] = useState(false);
  const handleShowTabs = () => {
    setShowTabs((showTabs) => !showTabs);
  };
  const { cartTotalQuantity } = useSelector((state) => state.shopping);
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Logo src={logo}></Logo>
        </Link>
        <List>
          <NavLink
            to="/home"
            style={({ isActive }) => ({
              color: isActive ? "green" : "black",
              borderBottom: isActive ? "1px solid green" : "",
              textDecoration: "none",
            })}
          >
            <ListItem>TRANG CHỦ</ListItem>
          </NavLink>

          <ListItem>
            <Tippy
              render={(attrs) => (
                <div tabIndex="-1" {...attrs} className="box-modal">
                  <ModalListItem>
                    <NavLink
                      to="/products"
                      style={({ isActive }) => ({
                        color: isActive ? "green" : "black",
                        borderBottom: isActive ? "1px solid green" : "",
                        textDecoration: "none",
                      })}
                    >
                      TẤT CẢ CÁC SẢN PHẨM
                    </NavLink>
                  </ModalListItem>
                  <ModalListItem> ÁO </ModalListItem>
                  <ModalListItem> QUẦN </ModalListItem>
                  <ModalListItem> PHỤ KIỆN KHÁC </ModalListItem>
                </div>
              )}
              delay={300}
              interactive={true}
            >
              <ListIcon>
                SẢN PHẨM
                <i class="ri-arrow-down-s-line"></i>
              </ListIcon>
            </Tippy>
          </ListItem>
          <NavLink
            to="/store-book"
            style={({ isActive }) => ({
              color: isActive ? "green" : "black",
              borderBottom: isActive ? "1px solid green" : "",
              textDecoration: "none",
            })}
          >
            <ListItem> CỬA HÀNG </ListItem>
          </NavLink>
          <NavLink
            to="/information"
            style={({ isActive }) => ({
              color: isActive ? "green" : "black",
              borderBottom: isActive ? "1px solid green" : "",
              textDecoration: "none",
            })}
          >
            <ListItem> GIỚI THIỆU </ListItem>
          </NavLink>
        </List>
        <List>
          <ListIcon>
            <i class="ri-search-line" onClick={handleShowTabs}></i>
            {showTabs && (
              <ModalSearch>
                <ModalSearchItem
                  type="text"
                  placeholder="Nhập sản phẩm tìm kiếm"
                ></ModalSearchItem>
              </ModalSearch>
            )}
          </ListIcon>
          <ListIcon>
            <ListIconNumber> {cartTotalQuantity}</ListIconNumber>
            <Link to="/cart">
              <i class="ri-shopping-cart-line"></i>
            </Link>
          </ListIcon>
        </List>
        <Menu>
          <i class="ri-menu-2-fill"></i>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Header;
