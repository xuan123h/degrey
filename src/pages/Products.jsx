import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
const Container = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 340px 10px;
  margin-bottom: 1000px;
`;
const Wrapper = styled.div`
  width: 1440px;
  gap: 200px;
  margin-bottom: 10px;
`;
const StoreOne = styled.div`
  margin-bottom: 40px;
`;
const StoreOneTitle = styled.h1`
  margin-bottom: 30px;
`;
const StoreOneItem = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 1660px;
  gap: 60px;
`;
const StoreOneIcon = styled.li`
  list-style: none;
  position: absolute;
  right: 10px;
  top: 5px;
  transform: translateX(-4000px);
  cursor: pointer;
`;
const StoreOneItemList = styled.div`
  width: 236px;
  height: 321px;
  color: #212529;
  font-size: 16px;
  position: relative;
  &:hover {
    #details {
      transform: translateX(0px);
    }
    #eye {
      transform: translateX(0px);
    }
  }
`;
const ButtonHover = styled.button`
  width: 236px;
  height: 32px;
  border-radius: 5px;
  color: green;
  background: #ffffff;
  border: 1px solid #ccc;
  margin: 10px 0;
  transform: translateX(-8000px);
  cursor: pointer;
`;
const StoreOneItemImg = styled.img`
  width: 236px;
  height: 236px;
  object-fit: cover;
  margin-bottom: 10px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.099);
  }
`;
const StoreOneItemName = styled.h5`
  width: 236px;
  color: #000000;
  font-size: 15px;
  text-align: center;
  margin-bottom: 10px;
`;
const StoreOneItemPrice = styled.span`
  width: 236px;
  color: #252a2b;
  font-size: 20px;
  margin: 0 60px;
`;
const StoreOneItemTag = styled.span`
  width: 88px;
  height: 20px;
  color: #ffffff;
  font-size: 11px;
  background: #410099;
  position: absolute;
  top: 10px;
  left: 5px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StoreOneButton = styled.button`
  width: 200px;
  height: 44px;
  font-size: 12px;
  background: #8b572a;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: all 0.5s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px auto;
  z-index: 100;
  &:hover {
    background: black;
  }
`;
const StoreTwo = styled.div`
  margin-bottom: 40px;
`;
const StoreTwoTitle = styled.h1`
  margin-bottom: 30px;
`;
const StoreTwoItem = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 1660px;
  gap: 60px;
`;
const StoreTwoItemList = styled.div`
  width: 236px;
  height: 321px;
  color: #212529;
  font-size: 16px;
  position: relative;
`;
const StoreTwoItemImg = styled.img`
  width: 236px;
  height: 236px;
  object-fit: cover;
  margin-bottom: 10px;
`;
const StoreTwoItemName = styled.h5`
  width: 236px;
  color: #000000;
  font-size: 15px;
  text-align: center;
  margin-bottom: 10px;
`;
const StoreTwoItemPrice = styled.span`
  width: 236px;
  color: #252a2b;
  font-size: 20px;
  margin: 0 30px;
`;
const StoreTwoItemTag = styled.span`
  width: 88px;
  height: 20px;
  color: #ffffff;
  font-size: 11px;
  background: #410099;
  position: absolute;
  top: 10px;
  left: 5px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StoreTwoButton = styled.button`
  width: 200px;
  height: 44px;
  font-size: 12px;
  background: #8b572a;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: all 0.5s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  &:hover {
    background: black;
  }
`;
const StoreThree = styled.div``;
const StoreThreeTitle = styled.h1`
  margin-bottom: 30px;
`;
const StoreThreeItem = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 1660px;
  gap: 60px;
`;
const StoreThreeItemList = styled.div`
  width: 236px;
  height: 321px;
  color: #212529;
  font-size: 16px;
  position: relative;
`;
const StoreThreeItemImg = styled.img`
  width: 236px;
  height: 236px;
  object-fit: cover;
  margin-bottom: 10px;
`;
const StoreThreeItemName = styled.h5`
  width: 236px;
  color: #000000;
  font-size: 15px;
  text-align: center;
  margin-bottom: 10px;
`;
const StoreThreeItemPrice = styled.span`
  width: 236px;
  color: #252a2b;
  font-size: 20px;
  margin: 0 30px;
`;
const StoreThreeItemTag = styled.span`
  width: 88px;
  height: 20px;
  color: #ffffff;
  font-size: 11px;
  background: #410099;
  position: absolute;
  top: 10px;
  left: 5px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StoreThreeButton = styled.button`
  width: 200px;
  height: 44px;
  font-size: 12px;
  background: #8b572a;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: all 0.5s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  &:hover {
    background: black;
  }
`;
const IconModal = styled.p``;
const ItemModal = styled.div``;
const ItemImage = styled.img``;
const ItemWrapper = styled.div``;
const ItemWrapperTitle = styled.h2``;
const ItemWrapperPrice = styled.p``;
const ItemWrapperSizeList = styled.div``;
const ItemWrapperSizeTitle = styled.h6``;
const ItemWrapperSizeLi = styled.span``;
const ItemWrapperCountList = styled.div``;
const ItemWrapperCountTitle = styled.h6``;
const ItemWrapperCountLi = styled.span``;
const ItemButton = styled.button``;
const Products = () => {
  const [products, setProducts] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios
        .get("https://6342d46c3f83935a784a8a2c.mockapi.io/product")
        .then((res) => {
          if (componentMounted) setProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  return (
    <Container>
      <Wrapper>
        <StoreOne>
          <StoreOneTitle> ÁO KHOÁC | JACKET </StoreOneTitle>
          <StoreOneItem>
            {products.slice(0, 10)?.map((item) => (
              <StoreOneItemList key={item.id}>
                <Link to={`/products/${item.id}`}>
                  <StoreOneItemImg src={item.image01}></StoreOneItemImg>
                </Link>
                <Link to={`/products/${item.id}`}>
                  <StoreOneItemName>{item.name}</StoreOneItemName>
                </Link>
                <StoreOneItemPrice>
                  {" "}
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "VND",
                  }).format(item.price)}{" "}
                </StoreOneItemPrice>
                <StoreOneItemTag> {item.tag} </StoreOneItemTag>
                <ButtonHover id="details"> Chi tiết sản phẩm </ButtonHover>
                <StoreOneIcon id="eye" onClick={showModal}>
                  {" "}
                  <i class="ri-eye-line"></i>{" "}
                </StoreOneIcon>
              </StoreOneItemList>
            ))}
          </StoreOneItem>
          <Link to="/products">
            <StoreOneButton> XEM THÊM SẢN PHẨM </StoreOneButton>
          </Link>
          <Modal
            title="Chi tiết sản phẩm"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <>
              <ItemModal>
                <IconModal></IconModal>
                <ItemWrapper>
                  <ItemWrapperSizeList>
                    <ItemWrapperSizeTitle></ItemWrapperSizeTitle>
                    <ItemWrapperSizeLi></ItemWrapperSizeLi>
                  </ItemWrapperSizeList>
                  <ItemWrapperCountList>
                    <ItemWrapperCountTitle></ItemWrapperCountTitle>
                    <ItemWrapperCountLi></ItemWrapperCountLi>
                  </ItemWrapperCountList>
                </ItemWrapper>
              </ItemModal>
            </>
          </Modal>
        </StoreOne>
        <StoreTwo>
          <StoreTwoTitle> ÁO THUN | TSHIRT </StoreTwoTitle>
          <StoreTwoItem>
            {products.slice(10, 20)?.map((item) => (
              <StoreOneItemList key={item.id}>
                <Link to={`/products/${item.id}`}>
                  <StoreOneItemImg src={item.image01}></StoreOneItemImg>
                </Link>
                <Link to={`/products/${item.id}`}>
                  <StoreOneItemName>{item.name}</StoreOneItemName>
                </Link>
                <StoreOneItemPrice>
                  {" "}
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "VND",
                  }).format(item.price)}{" "}
                </StoreOneItemPrice>
                <StoreOneItemTag> {item.tag} </StoreOneItemTag>
                <ButtonHover id="details"> Chi tiết sản phẩm </ButtonHover>
                <StoreOneIcon id="eye">
                  {" "}
                  <i class="ri-eye-line"></i>{" "}
                </StoreOneIcon>
              </StoreOneItemList>
            ))}
          </StoreTwoItem>
          <Link to="/products">
            <StoreOneButton> XEM THÊM SẢN PHẨM </StoreOneButton>
          </Link>
        </StoreTwo>
        <StoreThree>
          <StoreThreeTitle> Quần | Pants </StoreThreeTitle>
          <StoreTwoItem>
            {products.slice(20, 30)?.map((item) => (
              <StoreOneItemList key={item.id}>
                <Link to={`/products/${item.id}`}>
                  <StoreOneItemImg src={item.image01}></StoreOneItemImg>
                </Link>
                <Link to={`/products/${item.id}`}>
                  <StoreOneItemName>{item.name}</StoreOneItemName>
                </Link>
                <StoreOneItemPrice>
                  {" "}
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "VND",
                  }).format(item.price)}{" "}
                </StoreOneItemPrice>
                <StoreOneItemTag> {item.tag} </StoreOneItemTag>
                <ButtonHover id="details"> Chi tiết sản phẩm </ButtonHover>
                <StoreOneIcon id="eye">
                  {" "}
                  <i class="ri-eye-line"></i>{" "}
                </StoreOneIcon>
              </StoreOneItemList>
            ))}
          </StoreTwoItem>
        </StoreThree>
      </Wrapper>
    </Container>
  );
};
export default Products;
