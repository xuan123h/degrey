import React from "react";
import styled from "styled-components";
import image from "../../public/img/intro-banner.png";
import image1 from "../../public/img/Store2.png";
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 140px;
`;
const Wrapper = styled.div`
  width: 1420px;
  display: flex;
  align-items: center;
  gap: 200px;
`;
const Content = styled.div``;
const Category = styled.div`
  margin-bottom: 10px;
`;
const Slider = styled.img`
  width: 1400px;
  height: 400px;
  object-fit: cover;
  margin-bottom: 10px;
`;
const List = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 100px;
`;
const ListOne = styled.div``;
const ListOneTitle = styled.h2``;
const ListOneDesc = styled.p``;
const ListOneImg = styled.div`
  margin: 10px 0px;
`;
const ListTwo = styled.div``;
const ListTwoTitle = styled.h2`
  width: 200px;
`;
const ListTwoList = styled.div`
  margin: 20px 0;
`;
const ListTwoImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
`;
const Information = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Category> Trang chủ / Thông tin </Category>
          <Slider src={image} alt=""></Slider>
          <List>
            <ListOne>
              <ListOneTitle> GIỚI THIỆU </ListOneTitle>
              <ListOneDesc>
                Cái tên Degrey được tạo ra rất ngẫu hứng, xuất phát từ “Chuỗi
                ngày u buồn về sự nghiệp, tương lai trong quá khứ của chính
                mình” – theo lời chia sẻ của Degrey’s founder. Là một local
                brand mang khuynh hướng Á Đông, kết hợp giữa hai yếu tố truyền
                thống và hiện đại, Degrey luôn cố gắng mang đến những thông điệp
                văn hoá ý nghĩa qua từng đường nét thiết kế. Tiếp theo đó sự
                sang trọng, thanh lịch cũng là những yếu tố tạo nên một Degrey
                đầy sức hút, sự lựa chọn hoàn hảo dành cho các bạn trẻ yêu thích
                phong cách hoài cổ nhưng vẫn muốn thoát xác trong những bộ cánh
                mới mẻ hơn.
              </ListOneDesc>
              <ListOneDesc>
                {" "}
                Thành lập từ năm 2016 và được nhiều bạn trẻ biết đến qua những
                mẫu áo truyền thông, Degrey hiện đang từng bước khẳng định vị
                trí của mình trong bản đồ streetwear Việt Nam
              </ListOneDesc>
              <ListOneDesc>
                {" "}
                Hiện nay, Degrey vẫn đang tiếp tục hoàn thiện và phát triển về
                sản phẩm cũng như mở rộng nhiều phong cách thời trang.
              </ListOneDesc>
              <ListOneDesc>
                {" "}
                Degrey xin gửi lời cảm ơn đến tất cả những khách hàng đã, đang
                và sẽ ủng hộ Degrey cũng như Xoài thời gian qua và sắp tới. Cảm
                ơn rất nhiều !
              </ListOneDesc>
              <ListOneDesc>
                {" "}
                Sơ lược lịch sử DEGREY do DOSIIN - kênh media về thời trang và
                life-style, khai thác mảng văn hóa đường phố tại Việt
              </ListOneDesc>
              <ListOneImg>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/H7vcKCjX-IE"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </ListOneImg>
            </ListOne>
            <ListTwo>
              <ListTwoTitle> Danh mục Page</ListTwoTitle>
              <ListTwoList> SẢN PHẦM DEGREY </ListTwoList>
              <ListTwoList> STORE | CỬA HÀNG </ListTwoList>
              <ListTwoList> DEGREY | ABOUT US </ListTwoList>
              <ListTwoImg src={image1}></ListTwoImg>
            </ListTwo>
          </List>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Information;
