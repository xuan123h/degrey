import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import styled from "styled-components";
import imagesLogo from "../../public/img/banner-cro.png";
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px !important;
`;
const Wrapper = styled.div`
  width: 1440px;
  gap: 200px;
  margin-bottom: 10px;
`;
const Content = styled.div``;
const Category = styled.h2`
  margin-bottom: 30px;
`;
const Images = styled.img`
  width: 1470px;
  height: 400px;
`;
const ContentWrapper = styled.div``;
const ContentWrapperList = styled.div`
  display: flex;
  align-items: center;
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
const StoreOneIcon = styled.li`
  list-style: none;
  position: absolute;
  right: -100px;
  top: 5px;
  transform: translateX(-4000px);
  cursor: pointer;
  color: green;
  z-index: 20;
`;
const ContentWrapperSortRightItemTag = styled.span`
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
const ContentWrapperListLeft = styled.div``;
const ContentWrapperListLeftName = styled.h1``;
const ContentWrapperListRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const ContentWrapperListRightName = styled.li`
  list-style: none;
  margin: 30px 40px;
`;
const ContentWrapperListRightFlexSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 270px;
`;
const ContentWrapperListRightFlexInput = styled.input`
  outline: none;
  border: none;
  border-radius: 5px;
  border: 1px solid gray;
  padding: 0 8px;
`;
const ContentWrapperListRightFlexIcon = styled.li`
  list-style: none;
  color: green;
  width: 30px;
  height: 30px;
  background: green;
  color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const ContentWrapperSort = styled.div`
  display: flex;
  align-items: flex-start;
`;
const ContentWrapperSortLeft = styled.div``;
const ContentWrapperSortLeftTitle = styled.h6`
  font-size: 20px;
  margin: 0 5px;
`;
const ContentWrapperSortLeftWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  justify-content: space-between;
`;
const ContentWrapperSortLeftWrapperItem = styled.span`
  margin: 10px 10px;
`;
const ContentWrapperSortLeftWrapperOne = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;
const ContentWrapperSortLeftWrapperOneItem = styled.li`
  list-style: none;
`;
const ContentWrapperSortLeftWrapperTwo = styled.div`
  margin: 20px 0;
`;
const ContentWrapperSortLeftWrapperTwoItem = styled.div``;
const ContentWrapperSortLeftWrapperTwoItemList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 5px 0;
`;

const ContentWrapperSortLeftWrapperTwoLi = styled.h4`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;
const ContentWrapperSortRight = styled.div`
  width: 1200px;
  height: 1000px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;
const ContentWrapperSortRightItem = styled.div`
  position: relative;
  margin: 0 80px;
  width: 200px;
  &:hover {
    #details {
      transform: translateX(0);
    }
    #eye {
      transform: translateX(0);
    }
  }
`;
const ContentWrapperListRightFlexOption = styled.option``;
const ContentWrapperListRightFlexSelect = styled.select`
  width: 350px;
  height: 30px;
  padding: 0 5px;
  border: none;
  outline: none;
  border: 1px solid #ccc;
`;
const ContentWrapperSortRightItemImg = styled.img`
  width: 320px;
  height: 320px;
`;
const ContentWrapperSortRightItemName = styled.h4`
  margin: 10px 60px;
  width: 250px;
  cursor: pointer;
`;
const ContentWrapperSortRightItemPrice = styled.span`
  margin: 10px 120px;
`;
const ContentWrapperPaginate = styled.div`
  display: flex;
  align-items: center;
  margin: 300px;
  justify-content: center;
`;
const ContentWrapperPaginateItem = styled.button``;
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filterCat, setFilterCat] = useState(products);
  // search
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [sortState, setSortState] = useState("default");
  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") return item;
    if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) return item;
    return false;
  });
  const productPerPage = 9;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );
  const pageCount = Math.ceil(searchedProduct.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  // Sort
  const sortMethods = {
    default: { method: (a, b) => null },
    ascending: { method: (a, b) => (a.name < b.name ? -1 : 1) },
    descending: { method: (a, b) => (a.name > b.name ? -1 : 1) },
    lowPrice: { method: (a, b) => (a.price > b.price ? 1 : -1) },
    highPrice: { method: (a, b) => (a.price < b.price ? 1 : -1) },
  };
  let componentMounted = true;
  // useEffect(() => {
  //   const getProducts = async () => {
  //     const response = await axios
  //       .get("https://6342d46c3f83935a784a8a2c.mockapi.io/product")
  //       .then((res) => {
  //         if (componentMounted) {
  //           setProducts(res.data);
  //           setFilterCat(products);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     return () => {
  //       componentMounted = false;
  //     };
  //   };
  //   getProducts();
  // }, []);
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "https://6342d46c3f83935a784a8a2c.mockapi.io/product"
      );
      if (componentMounted) {
        setProducts(await response.clone().json());
        setFilterCat(await response.json());
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);
  const filterProductPrice = (size) => {
    const updatedSizes = products.filter((x) => x.sizes === size);
    setFilterCat(updatedSizes);
  };
  const filterProductCategory = (cat) => {
    const updatedCat = products.filter((x) => x.category === cat);
    setFilterCat(updatedCat);
  };
  return (
    <Container>
      <Wrapper>
        <Category> Trang chủ / Tất cả sản phẩm </Category>
        <Content>
          <Images src={imagesLogo}></Images>
          <ContentWrapper>
            <ContentWrapperList>
              <ContentWrapperListLeft>
                <ContentWrapperListLeftName>
                  {" "}
                  Tất cả sản phẩm{" "}
                </ContentWrapperListLeftName>
              </ContentWrapperListLeft>
              <ContentWrapperListRight>
                <ContentWrapperListRightName>
                  {" "}
                  Xếp theo :{" "}
                </ContentWrapperListRightName>
                <ContentWrapperListRightFlexSelect
                  defaultValue={"default"}
                  onChange={(e) => setSortState(e.target.value)}
                >
                  <ContentWrapperListRightFlexOption value="ascending">
                    {" "}
                    Từ A-Z{" "}
                  </ContentWrapperListRightFlexOption>
                  <ContentWrapperListRightFlexOption value="descending">
                    Từ Z-A{" "}
                  </ContentWrapperListRightFlexOption>
                  <ContentWrapperListRightFlexOption value="lowPrice">
                    {" "}
                    Từ thấp đến cao{" "}
                  </ContentWrapperListRightFlexOption>
                  <ContentWrapperListRightFlexOption value="highPrice">
                    {" "}
                    Từ cao đến thấp{" "}
                  </ContentWrapperListRightFlexOption>
                </ContentWrapperListRightFlexSelect>
                <ContentWrapperListRightFlexSearch>
                  <ContentWrapperListRightFlexInput
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  ></ContentWrapperListRightFlexInput>
                  <ContentWrapperListRightFlexIcon>
                    <i class="ri-search-line"></i>
                  </ContentWrapperListRightFlexIcon>
                </ContentWrapperListRightFlexSearch>
              </ContentWrapperListRight>
            </ContentWrapperList>
            <ContentWrapperSort>
              <ContentWrapperSortLeft>
                <ContentWrapperSortLeftTitle>
                  {" "}
                  Tìm theo sản phẩm{" "}
                </ContentWrapperSortLeftTitle>
                <ContentWrapperSortLeftWrapper>
                  <ContentWrapperSortLeftWrapperItem>
                    {" "}
                    Bạn chọn{" "}
                  </ContentWrapperSortLeftWrapperItem>
                  <ContentWrapperSortLeftWrapperItem>
                    {" "}
                    Xóa hết <i class="ri-close-line"></i>
                  </ContentWrapperSortLeftWrapperItem>
                </ContentWrapperSortLeftWrapper>
                <ContentWrapperSortLeftWrapperOne>
                  <ContentWrapperSortLeftWrapperOneItem>
                    <i class="ri-close-line"></i>
                  </ContentWrapperSortLeftWrapperOneItem>
                  <ContentWrapperSortLeftWrapperOneItem>
                    {" "}
                    Giá dưới 100.000đ{" "}
                  </ContentWrapperSortLeftWrapperOneItem>
                </ContentWrapperSortLeftWrapperOne>
                <ContentWrapperSortLeftWrapperOne>
                  <ContentWrapperSortLeftWrapperOneItem>
                    <i class="ri-close-line"></i>
                  </ContentWrapperSortLeftWrapperOneItem>
                  <ContentWrapperSortLeftWrapperOneItem>
                    {" "}
                    Áo Jacket{" "}
                  </ContentWrapperSortLeftWrapperOneItem>
                </ContentWrapperSortLeftWrapperOne>
                <ContentWrapperSortLeftWrapperOne>
                  <ContentWrapperSortLeftWrapperOneItem>
                    <i class="ri-close-line"></i>
                  </ContentWrapperSortLeftWrapperOneItem>
                  <ContentWrapperSortLeftWrapperOneItem>
                    {" "}
                    XL{" "}
                  </ContentWrapperSortLeftWrapperOneItem>
                </ContentWrapperSortLeftWrapperOne>
                <ContentWrapperSortLeftWrapperTwo>
                  <ContentWrapperSortLeftWrapperTwoLi>
                    {" "}
                    Lọc giá{" "}
                  </ContentWrapperSortLeftWrapperTwoLi>
                  <ContentWrapperSortLeftWrapperTwoItemList>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      <input type="checkbox" />
                    </ContentWrapperSortLeftWrapperTwoItem>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      Dưới 100.000đ
                    </ContentWrapperSortLeftWrapperTwoItem>
                  </ContentWrapperSortLeftWrapperTwoItemList>
                  <ContentWrapperSortLeftWrapperTwoItemList>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      <input type="checkbox" />
                    </ContentWrapperSortLeftWrapperTwoItem>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      100.000đ - 250.000đ
                    </ContentWrapperSortLeftWrapperTwoItem>
                  </ContentWrapperSortLeftWrapperTwoItemList>
                  <ContentWrapperSortLeftWrapperTwoItemList>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      <input type="checkbox" />
                    </ContentWrapperSortLeftWrapperTwoItem>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      250.000đ - 500.000đ
                    </ContentWrapperSortLeftWrapperTwoItem>
                  </ContentWrapperSortLeftWrapperTwoItemList>
                  <ContentWrapperSortLeftWrapperTwoItemList>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      <input type="checkbox" />
                    </ContentWrapperSortLeftWrapperTwoItem>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      500.000đ - 800.000đ
                    </ContentWrapperSortLeftWrapperTwoItem>
                  </ContentWrapperSortLeftWrapperTwoItemList>
                  <ContentWrapperSortLeftWrapperTwoItemList>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      <input type="checkbox" />
                    </ContentWrapperSortLeftWrapperTwoItem>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      800.000đ Trở lên
                    </ContentWrapperSortLeftWrapperTwoItem>
                  </ContentWrapperSortLeftWrapperTwoItemList>
                </ContentWrapperSortLeftWrapperTwo>
                <ContentWrapperSortLeftWrapperTwo>
                  <ContentWrapperSortLeftWrapperTwoLi>
                    Loại
                  </ContentWrapperSortLeftWrapperTwoLi>
                  <ContentWrapperSortLeftWrapperTwoItemList>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      <input type="checkbox" />
                    </ContentWrapperSortLeftWrapperTwoItem>
                    <ContentWrapperSortLeftWrapperTwoItem
                      onClick={() => filterProductCategory("Jacket")}
                    >
                      Áo Jacket
                    </ContentWrapperSortLeftWrapperTwoItem>
                  </ContentWrapperSortLeftWrapperTwoItemList>
                  <ContentWrapperSortLeftWrapperTwoItemList>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      <input
                        type="checkbox"
                        onClick={() => filterProductCategory("Pants")}
                      />
                    </ContentWrapperSortLeftWrapperTwoItem>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      Quần
                    </ContentWrapperSortLeftWrapperTwoItem>
                  </ContentWrapperSortLeftWrapperTwoItemList>
                  <ContentWrapperSortLeftWrapperTwoItemList>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      <input type="checkbox" />
                    </ContentWrapperSortLeftWrapperTwoItem>
                    <ContentWrapperSortLeftWrapperTwoItem
                      onClick={() => filterProductCategory("Tshirt")}
                    >
                      T-Shirt
                    </ContentWrapperSortLeftWrapperTwoItem>
                  </ContentWrapperSortLeftWrapperTwoItemList>
                  <ContentWrapperSortLeftWrapperTwoItemList>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      <input type="checkbox" />
                    </ContentWrapperSortLeftWrapperTwoItem>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      Phụ kiện khác
                    </ContentWrapperSortLeftWrapperTwoItem>
                  </ContentWrapperSortLeftWrapperTwoItemList>
                </ContentWrapperSortLeftWrapperTwo>
                <ContentWrapperSortLeftWrapperTwo>
                  <ContentWrapperSortLeftWrapperTwoLi>
                    Kích cỡ
                  </ContentWrapperSortLeftWrapperTwoLi>
                  <ContentWrapperSortLeftWrapperTwoItemList>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      <input
                        type="checkbox"
                        onClick={() => filterProductPrice("S")}
                      />
                    </ContentWrapperSortLeftWrapperTwoItem>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      S
                    </ContentWrapperSortLeftWrapperTwoItem>
                  </ContentWrapperSortLeftWrapperTwoItemList>
                  <ContentWrapperSortLeftWrapperTwoItemList>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      <input
                        type="checkbox"
                        onClick={() => filterProductPrice("M")}
                      />
                    </ContentWrapperSortLeftWrapperTwoItem>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      M
                    </ContentWrapperSortLeftWrapperTwoItem>
                  </ContentWrapperSortLeftWrapperTwoItemList>
                  <ContentWrapperSortLeftWrapperTwoItemList>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      <input
                        type="checkbox"
                        onClick={() => filterProductPrice("L")}
                      />
                    </ContentWrapperSortLeftWrapperTwoItem>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      L
                    </ContentWrapperSortLeftWrapperTwoItem>
                  </ContentWrapperSortLeftWrapperTwoItemList>
                  <ContentWrapperSortLeftWrapperTwoItemList>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      <input
                        type="checkbox"
                        onClick={() => filterProductPrice("XL")}
                      />
                    </ContentWrapperSortLeftWrapperTwoItem>
                    <ContentWrapperSortLeftWrapperTwoItem>
                      XL
                    </ContentWrapperSortLeftWrapperTwoItem>
                  </ContentWrapperSortLeftWrapperTwoItemList>
                </ContentWrapperSortLeftWrapperTwo>
              </ContentWrapperSortLeft>
              <ContentWrapperSortRight>
                {displayPage.sort(sortMethods[sortState].method).map((item) => (
                  <ContentWrapperSortRightItem key={item.id}>
                    <ContentWrapperSortRightItemImg
                      src={item.image01}
                    ></ContentWrapperSortRightItemImg>
                    <ContentWrapperSortRightItemName>
                      <Link to={`/products/${item.id}`}> {item.name} </Link>
                    </ContentWrapperSortRightItemName>
                    <ContentWrapperSortRightItemPrice>
                      {new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "VND",
                      }).format(item.price)}{" "}
                    </ContentWrapperSortRightItemPrice>
                    <ContentWrapperSortRightItemTag>
                      {" "}
                      {item.tag}{" "}
                    </ContentWrapperSortRightItemTag>
                    <ButtonHover id="details"> Chi tiết sản phẩm </ButtonHover>
                    <StoreOneIcon id="eye">
                      <i class="ri-eye-line"></i>
                    </StoreOneIcon>
                  </ContentWrapperSortRightItem>
                ))}
              </ContentWrapperSortRight>
            </ContentWrapperSort>
            <ContentWrapperPaginate>
              <ContentWrapperPaginateItem>
                <ReactPaginate
                  pageCount={pageCount}
                  onPageChange={changePage}
                  previousLabel={"Prev"}
                  nextLabel={"Next"}
                  containerClassName="paginationBttns"
                />
              </ContentWrapperPaginateItem>
            </ContentWrapperPaginate>
          </ContentWrapper>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default AllProducts;
