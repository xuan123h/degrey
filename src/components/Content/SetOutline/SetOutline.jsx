import React from "react";
import styled from "styled-components";
import images1 from "../../../../public/img/suggest1.png";
import images2 from "../../../../public/img/suggest2.png";
import images3 from "../../../../public/img/suggest3.png";
const Container = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 180px 10px;
  margin-bottom: 100px;
`;
const Wrapper = styled.div`
  width: 1440px;
  gap: 200px;
  margin-bottom: 10px;
`;
const ContentTitle = styled.h2`
  color: #4a4a4a;
  font-size: 24px;
  font-weight: 700;
  padding: 30px 0;
`;
const ContentItem = styled.div`
  display: flex;
  align-items: center;
  gap: 220px;
`;
const ContentImg = styled.img`
  width: 320px;
  height: 347px;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
`;
const SetOutline = () => {
  return (
    <Container>
      <Wrapper>
        <ContentTitle> Set đồ gợi ý </ContentTitle>
        <ContentItem>
          <ContentImg src={images1}></ContentImg>
          <ContentImg src={images2}></ContentImg>
          <ContentImg src={images3}></ContentImg>
        </ContentItem>
      </Wrapper>
    </Container>
  );
};

export default SetOutline;
