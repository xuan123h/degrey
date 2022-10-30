import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { Modal } from "antd";
import styled from "styled-components";
import { getTotals } from "../redux-toolkit/shopping-cart/shoppingSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router";
import countryCheckout from "../../public/data/country";

const schema = yup
  .object({
    fullName: yup.string().required(),
    email: yup.string().required(),
    phone: yup.string().required(),
    address: yup.string().required(),
  })
  .required();
const Title = styled.h2`
  width: 270px;
  color: #808080;
  font-size: 32px;
`;
const Category = styled.p`
  width: 500px;
  color: #212529;
  font-size: 16px;
`;
const Name = styled.h4`
  width: 636px;
  color: #212529;
  font-size: 24px;
`;
const Desc = styled.p`
  width: 636px;
  color: #212529;
  font-size: 16px;
`;
const InputOne = styled.input`
  width: 636px;
  height: 35px;
  background: #ffffff;
  padding: 5px 10px;
  border: none;
  outline: none;
  border: 1px solid green;
  position: relative;
`;
const InputTwo = styled.input`
  width: 308px;
  height: 35px;
  background: #ffffff;
  padding: 5px 10px;
  border: none;
  outline: none;
  border: 1px solid green;
  position: relative;
`;
const InputThree = styled.input`
  width: 636px;
  height: 35px;
  background: #ffffff;
  padding: 5px 10px;
  border: none;
  outline: none;
  border: 1px solid green;
  margin-bottom: 20px;
  position: relative;
`;
const List = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`;
const ListTwo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;
`;
const ListThree = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;
`;
const ListItemThree = styled.select`
  width: 206px;
  height: 33px;
  color: #212529;
  font-size: 14px;
  background: #ffffff;
  outline: none;
  border: none;
  border: 1px solid green;
`;
const ListItemOption = styled.option``;
const Label = styled.h4`
  width: 636px;
  color: #212529;
  font-size: 24px;
`;
const SpanOne = styled.span`
  width: 207px;
  color: #808080;
  font-size: 16px;
  font-weight: 600;
`;
const SpanTwo = styled.button`
  width: 254px;
  height: 41px;
  color: #ffffff;
  font-size: 14px;
  background: #338dbc;
  outline: none;
  border: none;
  cursor: pointer;
`;
const Gap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 160px;
`;
const ItemImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
`;
const ItemWrapper = styled.div``;
const ItemName = styled.h3`
  margin: 20px 0;
  width: 347px;
  color: #212529;
  font-size: 20px;
`;
const ItemPrice = styled.span`
  width: 460px;
  color: #8f9bb3;
  font-size: 20px;
`;
const Item = styled.div`
  margin: 20px 0;
`;
const Promotion = styled.div``;
const PromotionItem = styled.div`
  width: 100%;
  height: 100px;
  background-color: bisque;
  margin-bottom: 20px;
`;
const PromotionItemTop = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 04px 10px;
`;
const PromotionItemTopLi = styled.li`
  font-size: 16px;
`;
const PromotionItemBetween = styled.div``;
const PromotionItemBetweenDesc = styled.p`
  margin-left: 60px;
  font-size: 18px;
`;
const PromotionItemBottom = styled.div``;
const PromotionItemBottomButton = styled.button`
  margin-bottom: 20px;
  width: 120px;
  height: 24px;
  margin-left: 340px;
  background: gray;
  border-radius: 10px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;
const InputPromotion = styled.input`
  padding: 1px 15px;
  outline: none;
  border: none;
  width: 379px;
  height: 44px;
  border: 1px solid green;
  border-radius: 5px;
  background: #ffffff;
`;
const InputPromotionButton = styled.button`
  cursor: pointer;
  width: 190px;
  height: 54px;
  border-radius: 5px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  background: #c8c8c8;
  padding: 15px;
`;
const Li = styled.li`
  font-size: 16px;
  width: 100px;
  color: #212529;
`;
const Flex = styled.div`
  display: flex;
  // align-items: center;
  align-items: flex-start;
  gap: 10px;
`;
const SubTotal = styled.h5`
  width: 186px;
  color: #00000080;
  font-size: 20px;
`;
const SubTotalPrice = styled.span`
  width: 140px;
  color: #0d6efd;
  font-size: 20px;
`;
const FlexItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const Icon = styled.p`
  font-size: 16px;
`;
const Margin = styled.div`
  margin-bottom: 12px;
  gap: 40px;
  display: flex;
  align-items: center;
`;
const FlexGap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const P = styled.div``;
const promotionList = [
  {
    id: 1,
    name: "FREESHIPCOD",
    desc: "Miễn phí phí vận chuyển toàn quốc",
  },
  {
    id: 2,
    name: "DEGREYRATYEUBAN",
    desc: "Giảm 10% giá trị đơn hàng",
  },
  {
    id: 3,
    name: "HANOIKHONGVOIDUOCDAU",
    desc: "Miễn phí vận chuyển với cước phí thấp hơn 50,000₫",
  },
  {
    id: 4,
    name: "DEGREYVIETNAM",
    desc: "Giảm 5% giá trị đơn hàng.",
  },
];
const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (data) {
      navigate("/sucess");
    }
  };
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
  const shopping = useSelector((state) => state.shopping);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [shopping, dispatch]);
  return (
    <section>
      <Container>
        <Row>
          <Gap>
            <Col xs="6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Title> DEGREY VIETNAM </Title>
                <Category>
                  {" "}
                  GIỎ HÀNG / THÔNG TIN GIAO HÀNG / Phương thức thanh toán
                </Category>
                <Name> Thông tin giao hàng</Name>
                <Desc> Bạn đã có tài khoản ? Đăng nhập </Desc>
                <Col xs="12">
                  <ListThree>
                    <InputOne
                      type="text"
                      placeholder="Họ và tên"
                      {...register("fullName")}
                    ></InputOne>
                    <P>{errors.fullName?.message}</P>
                  </ListThree>
                </Col>
                <Row>
                  <Col xs="6">
                    <ListTwo>
                      <InputTwo
                        type="email"
                        placeholder="Email"
                        {...register("email")}
                      ></InputTwo>
                      <P>{errors.email?.message}</P>
                      <InputTwo
                        type="text"
                        placeholder="Số điện thoại"
                        {...register("phone")}
                      ></InputTwo>
                      <P>{errors.phone?.message}</P>
                    </ListTwo>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <List>
                      <ListItemThree>
                        <ListItemOption> Chọn tỉnh thành </ListItemOption>
                        <ListItemOption>
                          <ul>
                            {countryCheckout.length > 0 &&
                              countryCheckout?.map((item) => <li> {item} </li>)}
                          </ul>
                        </ListItemOption>
                      </ListItemThree>
                      <ListItemThree>
                        <ListItemOption> Chọn quận huyện </ListItemOption>
                        <ListItemOption> Api </ListItemOption>
                      </ListItemThree>
                      <ListItemThree>
                        <ListItemOption> Chọn phường xã </ListItemOption>
                        <ListItemOption> Api </ListItemOption>
                      </ListItemThree>
                    </List>
                  </Col>
                </Row>
                <Col xs="12">
                  <InputThree
                    type="text"
                    placeholder="Địa chỉ"
                    {...register("address")}
                  ></InputThree>
                  <P>{errors.address?.message}</P>
                </Col>
                <Label> Phương thức vận chuyển </Label>
                <List>
                  <input type="radio" />
                  <span> Giao hành tận nơi </span>
                </List>
                <Label> Phương thức thanh toán </Label>
                <List>
                  <input type="radio" />
                  <span> Thanh toán khi giao hàng (COD) </span>
                </List>
                <List>
                  <input type="radio" />
                  <span> Chuyển khoản qua ngân hàng </span>
                </List>
                <Row>
                  <Col xs="6">
                    <FlexItem>
                      <SpanOne> Quay lại thông tin đơn hàng</SpanOne>
                      <SpanTwo type="submit"> Xác nhận thanh toán </SpanTwo>
                    </FlexItem>
                  </Col>
                </Row>
              </form>
            </Col>
            <Col xs="6">
              <Col xs="12">
                {shopping?.cartItems?.length > 0 &&
                  shopping?.cartItems?.map((item) => (
                    <Item key={item.id}>
                      <FlexGap>
                        <ItemImg src={item.image01} alt={item.name}></ItemImg>
                        <ItemWrapper>
                          <ItemName> {item.name} </ItemName>
                          <ItemPrice>
                            {new Intl.NumberFormat("de-DE", {
                              style: "currency",
                              currency: "VND",
                            }).format(item.price)}
                          </ItemPrice>
                        </ItemWrapper>
                      </FlexGap>
                    </Item>
                  ))}
              </Col>
              <Row>
                <Col xs="6">
                  <Margin>
                    <InputPromotion type="text" placeholder="Mã giảm giá" />
                    <InputPromotionButton> Sử dụng </InputPromotionButton>
                  </Margin>
                </Col>
                <Col xs="6">
                  <FlexItem>
                    <Flex>
                      <Icon>
                        <i class="ri-price-tag-3-line"></i>
                      </Icon>
                      <Li> Mã giảm giá</Li>
                    </Flex>
                    <InputPromotionButton onClick={showModal}>
                      Lấy ngay
                    </InputPromotionButton>
                  </FlexItem>
                  <Modal
                    title="Mã giảm giá của Shop"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <Promotion>
                      {promotionList?.map((list) => (
                        <PromotionItem>
                          <div key={list.id}>
                            <PromotionItemTop>
                              <PromotionItemTopLi>
                                <i class="ri-chat-smile-2-line"></i>
                              </PromotionItemTopLi>
                              <PromotionItemTopLi>
                                {" "}
                                {list.name}{" "}
                              </PromotionItemTopLi>
                            </PromotionItemTop>
                            <PromotionItemBetween>
                              <PromotionItemBetweenDesc>
                                {" "}
                                {list.desc}{" "}
                              </PromotionItemBetweenDesc>
                            </PromotionItemBetween>
                            <PromotionItemBottom>
                              <PromotionItemBottomButton>
                                {" "}
                                Áp dụng{" "}
                              </PromotionItemBottomButton>
                            </PromotionItemBottom>
                          </div>
                        </PromotionItem>
                      ))}
                    </Promotion>
                  </Modal>
                </Col>
              </Row>
              <Row>
                <Col xs="6">
                  <FlexItem>
                    <SubTotal> Tạm tính : </SubTotal>
                    <SubTotalPrice>
                      {new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "VND",
                      }).format(shopping.cartTotalAmount)}
                    </SubTotalPrice>
                  </FlexItem>
                </Col>
              </Row>
              <Row>
                <Col xs="6">
                  <FlexItem>
                    <SubTotal> Thành tiền : </SubTotal>
                    <SubTotalPrice>
                      {" "}
                      {new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "VND",
                      }).format(shopping.cartTotalAmount)}{" "}
                    </SubTotalPrice>
                  </FlexItem>
                </Col>
              </Row>
            </Col>
          </Gap>
        </Row>
      </Container>
    </section>
  );
};

export default Checkout;
