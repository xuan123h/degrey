import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  addToCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../redux-toolkit/shopping-cart/shoppingSlice";
// useDispatch là xử lý những cái có hành động
// useSelector là khi ta trỏ đến những cái state mà người dùng đã lưu
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 1420px;
  display: flex;
  align-items: center;
  gap: 200px;
`;
const ShoppingBtn = styled.button`
  width: 200px;
  height: 40px;
  background: gray;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
const CheckoutBtn = styled.button`
  width: 200px;
  height: 40px;
  background: green;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
const TrCss = styled.tr``;
const ThCss = styled.th`
  width: 200px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const TdCss = styled.td`
  width: 200px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
`;
const TdCssImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
`;
const TdList = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: center;
`;
const TdCssIcon = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background: violet;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SubTotalList = styled.div``;
const SubTotal = styled.h6`
  font-size: 22px;
`;
const SubTotalSpan = styled.span`
  color: green;
  font-size: 24px;
`;
const SubTotalDesc = styled.p`
  font-size: 18px;
`;
const SubTotalPerfect = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
const Cart = () => {
  const shopping = useSelector((state) => state.shopping);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [shopping, dispatch]);
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  return (
    <Container>
      <Wrapper>
        {shopping.cartItems.length === 0 ? (
          <h5 className="text-center"> Your cart is empty </h5>
        ) : (
          <table>
            <thead>
              <TrCss>
                <ThCss> Image </ThCss>
                <ThCss> Product Name </ThCss>
                <ThCss> Price </ThCss>
                <ThCss> Quantity </ThCss>
                <ThCss> Số tiên </ThCss>
                <ThCss> Delete </ThCss>
              </TrCss>
            </thead>
            <tbody>
              {shopping.cartItems?.map((cartItem) => (
                <TrCss key={cartItem.id}>
                  <TdCss>
                    <TdCssImg
                      src={cartItem.image01}
                      alt={cartItem.name}
                    ></TdCssImg>
                  </TdCss>
                  <TdCss> {cartItem.name} </TdCss>
                  <TdCss>
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "VND",
                    }).format(cartItem.price)}
                  </TdCss>{" "}
                  <TdCss>
                    <TdList>
                      <TdCssIcon onClick={() => handleIncreaseCart(cartItem)}>
                        <i class="ri-add-fill"></i>
                      </TdCssIcon>
                      <TdCssIcon>{cartItem.cartQuantity}</TdCssIcon>
                      <TdCssIcon onClick={() => handleDecreaseCart(cartItem)}>
                        <i class="ri-subtract-line"></i>
                      </TdCssIcon>
                    </TdList>
                  </TdCss>
                  <TdCss>
                    {" "}
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "VND",
                    }).format(cartItem.price * cartItem.cartQuantity)}{" "}
                  </TdCss>
                  <TdCss onClick={() => handleRemoveFromCart(cartItem)}>
                    <i class="ri-delete-bin-line"></i>
                  </TdCss>
                </TrCss>
              ))}
            </tbody>
          </table>
        )}
        <SubTotalList>
          <SubTotal>
            {" "}
            Tổng tiền:{" "}
            <SubTotalSpan>
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "VND",
              }).format(shopping.cartTotalAmount)}{" "}
            </SubTotalSpan>
          </SubTotal>
          <SubTotalDesc>
            {" "}
            Bạn vui lòng chọn các phương thức tiếp theo để đặt hàng{" "}
          </SubTotalDesc>
          <SubTotalPerfect>
            <Link to="/">
              <ShoppingBtn>Continue Shopping</ShoppingBtn>
            </Link>
            <Link to="/checkout">
              <CheckoutBtn> Proceed to checkout </CheckoutBtn>
            </Link>
          </SubTotalPerfect>
        </SubTotalList>
      </Wrapper>
    </Container>
  );
};

export default Cart;
