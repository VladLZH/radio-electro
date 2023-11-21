import React from "react";
import styled from "styled-components";
import bgIMG from "../../assets/bgAbout.png";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  background: url(${bgIMG}), lightgray 50% / cover no-repeat;
  width: 100%;
  height: 800px;
  margin: 100px 0;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  margin-right: 100px;
  padding: 20px;
  color: #e4e4e4;
  border-radius: 15px;
  background: linear-gradient(
    223deg,
    rgba(0, 255, 194, 0.3) 2.12%,
    rgba(0, 102, 255, 0.3) 98.7%
  );
  backdrop-filter: blur(2px);
  h3 {
    font-size: 32px;
  }
`;

const AboutUsStructure = () => {
  return (
    <MainContainer id="about">
      <TextContainer>
        <h3>ЗАСОБИ РЕР</h3>
        <span>
          Компанія "Засоби РЕР" була заснована у 2014 році групою українських
          інженерів, які мали досвід розробки і виробництва засобів РЕР.
          Компанія спеціалізувалася на розробці та виробництві мобільних станцій
          перехоплення радіопереговорів, радарів, які можуть виявляти російські
          винищувачі та гелікоптери, а також систем, які можуть глушити
          російські радіосигнали.Нові засоби РЕР, розроблені компанією "Засоби
          РЕР", були дуже ефективні. Вони допомогли українським військовим
          отримувати інформацію про російські війська, а також придушувати
          російські засоби зв'язку та навігації.
        </span>
      </TextContainer>
    </MainContainer>
  );
};

export default AboutUsStructure;
