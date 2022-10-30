// Swiper
// import Swiper from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux-toolkit/shopping-cart/shoppingSlice";
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 200px !important;
`;
const Wrapper = styled.div`
  width: 1420px;
  display: flex;
  align-items: center;
  gap: 200px;
`;
const Content = styled.div`
  margin-bottom: 20px;
`;
const Category = styled.h4`
  margin: 10px 0;
  margin-top: 100px;
`;
const Details = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 50px;
`;
const DetailsLeft = styled.div`
  width: 800px;
  height: 400px;
`;
const DetailsLeftImg = styled.img`
  width: 600px !important;
  height: 400px !important;
  object-fit: cover;
`;
const DetailsRight = styled.div``;
const DetailsRightName = styled.h2`
  width: 546px;
  color: #212529;
  font-size: 28px;
  margin-bottom: 10px;
`;
const DetailsRightPrice = styled.li`
  font-size: 22px;
  color: red;
  list-style: none;
  margin-bottom: 14px;
`;
const DetailsRightSizeFlex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
  margin-bottom: 20px;
`;
const DetailsRightSizeName = styled.li`
  font-weight: 700;
  list-style: none;
`;
const DetailsRightSizeItem = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 5px;
  cursor: pointer;
  color: #ffffff;
  background: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const DetailsRightFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const DetailsRightCountName = styled.li`
  width: 112px;
  color: #212529;
  font-size: 16px;
  list-style: none;
  font-weight: 700;
`;
const DetailsRightCountItem = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;
const DetailsRightCountItemLi = styled.span`
  width: 23px;
  height: 24px;
  color: #212529;
  font-size: 16px;
  background: #dddddd;
`;
const DetailsRightButton = styled.button`
  width: 200px;
  height: 44px;
  color: #ffffff;
  font-size: 12px;
  background: #8b572a;
  border-radius: 10px;
  outline: none;
  border: none;
  margin-bottom: 20px;
  cursor: pointer;
`;
const DetailsRightPromotion = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;
const DetailsRightPromotionItem = styled.p`
  width: 49%;
  background: #ecebe8a6;
  padding: 10px;
  font-size: 14px;
  font-weight: 700;
`;
const DetailsRightDescription = styled.p`
  width: 546px;
  color: #212529;
  font-size: 16px;
  margin-bottom: 10px;
`;
const DetailsRightDescriptionImg = styled.img`
  width: 546px;
  height: 286px;
  object-fit: cover;
  margin: 12px 0;
`;
const DetailsProductDifferent = styled.div`
  text-align: center;
`;
const DetailsProductDifferentName = styled.h3`
  color: #8b572a;
  font-weight: 700;
  line-height: 1.2;
  font-size: 30px;
  text-transform: uppercase;
  margin-top: 100px;
  margin-bottom: 100px;
`;
const DetailsProductDifferentItem = styled.div`
  width: 850px;
  height: 250px;
  display: flex;
  align-items: flex-start;
  gap: 200px;
`;
const DetailsProductDifferentChildren = styled.div`
  width: 200px;
`;
const DetailsProductDifferentChildrenImg = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
`;
const DetailsProductDifferentChildrenName = styled.h3`
  font-size: 18px;
  text-align: center;
  width: 310px;
  font-weight: 700;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
const DetailsProductDifferentChildrenPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-left: 120px;
`;
const ProductDetails = (props) => {
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const { id } = useParams();
  let componentMounted = true;
  useEffect(() => {
    const getProduct = async () => {
      const response = await axios
        .get(`https://6342d46c3f83935a784a8a2c.mockapi.io/product/${id}`)
        .then((res) => {
          if (componentMounted) {
            setProduct(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      return () => {
        componentMounted = false;
      };
    };
    getProduct();
  }, []);
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
  // Redux-toolkit
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };
  const [quantity, setQuantity] = useState(1);
  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleRemoveQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      return null;
    }
  };
  return (
    <Container>
      <Wrapper>
        <Content>
          <Category>
            {" "}
            Trang chủ / {product.category} / {product.name}{" "}
          </Category>
          <Details>
            <DetailsLeft>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                  width: "600px",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                <SwiperSlide>
                  <DetailsLeftImg src={product.image01} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <DetailsLeftImg src={product.image02} />
                </SwiperSlide>
                <SwiperSlide>
                  <DetailsLeftImg src={product.image03} />
                </SwiperSlide>
                <SwiperSlide>
                  <DetailsLeftImg src={product.image04} />
                </SwiperSlide>
                <SwiperSlide>
                  <DetailsLeftImg src={product.image01} />
                </SwiperSlide>
                <SwiperSlide>
                  <DetailsLeftImg src={product.image02} />
                </SwiperSlide>
                <SwiperSlide>
                  <DetailsLeftImg src={product.image03} />
                </SwiperSlide>
                <SwiperSlide>
                  <DetailsLeftImg src={product.image04} />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={product.image01} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product.image02} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product.image03} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product.image04} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product.image01} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product.image02} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product.image03} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product.image04} />
                </SwiperSlide>
              </Swiper>
            </DetailsLeft>
            <DetailsRight>
              <DetailsRightName> {product.name}</DetailsRightName>
              <DetailsRightPrice>
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price)}{" "}
              </DetailsRightPrice>
              <DetailsRightSizeFlex>
                <DetailsRightSizeName> Kích cỡ: </DetailsRightSizeName>
                <DetailsRightSizeItem></DetailsRightSizeItem>
                <DetailsRightSizeItem>
                  {product.sizes?.[0]}
                </DetailsRightSizeItem>
                <DetailsRightSizeItem>
                  {product.sizes?.[1]}
                </DetailsRightSizeItem>
                <DetailsRightSizeItem>
                  {" "}
                  {product.sizes?.[2]}{" "}
                </DetailsRightSizeItem>
                <DetailsRightSizeItem>
                  {" "}
                  {product.sizes?.[3]}{" "}
                </DetailsRightSizeItem>
              </DetailsRightSizeFlex>
              <DetailsRightFlex>
                <DetailsRightCountName> Số lượng: </DetailsRightCountName>
                <DetailsRightCountItem>
                  <DetailsRightCountItemLi onClick={handleAddQuantity}>
                    <i class="ri-add-fill"></i>
                  </DetailsRightCountItemLi>
                  <DetailsRightCountItemLi>
                    {" "}
                    {quantity}{" "}
                  </DetailsRightCountItemLi>
                  <DetailsRightCountItemLi onClick={handleRemoveQuantity}>
                    <i class="ri-subtract-line"></i>
                  </DetailsRightCountItemLi>
                </DetailsRightCountItem>
                <DetailsRightButton onClick={() => handleAddToCart(product)}>
                  {" "}
                  THÊM VÀO GIỎ HÀNG{" "}
                </DetailsRightButton>
              </DetailsRightFlex>
              <DetailsRightPromotion>
                <DetailsRightPromotionItem>
                  Freeship đơn hàng giá trị trên 1 triệu đồng
                </DetailsRightPromotionItem>
                <DetailsRightPromotionItem>
                  Đổi hàng chưa qua sử dụng trong vòng 30 ngày
                </DetailsRightPromotionItem>
              </DetailsRightPromotion>
              <DetailsRightDescription>
                {" "}
                {product.description}{" "}
              </DetailsRightDescription>
              <DetailsRightDescriptionImg
                src={product.descriptionImg}
                alt=""
              ></DetailsRightDescriptionImg>
            </DetailsRight>
          </Details>
          <DetailsProductDifferent>
            <DetailsProductDifferentName>
              {" "}
              SẢN PHẨM KHÁC{" "}
            </DetailsProductDifferentName>
            <DetailsProductDifferentItem>
              {products.slice(4, 8).map((different) => (
                <DetailsProductDifferentChildren key={different.id}>
                  <DetailsProductDifferentChildrenImg
                    src={different.image01}
                  ></DetailsProductDifferentChildrenImg>
                  <DetailsProductDifferentChildrenName>
                    <Link to={`/products/${different.id}`}>
                      {different.name}
                    </Link>
                  </DetailsProductDifferentChildrenName>
                  <DetailsProductDifferentChildrenPrice>
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "VND",
                    }).format(product.price)}
                  </DetailsProductDifferentChildrenPrice>
                </DetailsProductDifferentChildren>
              ))}
            </DetailsProductDifferentItem>
          </DetailsProductDifferent>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default ProductDetails;
