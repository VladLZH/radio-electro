import React from "react";
import styled from "styled-components";
import bgIMG from "../../assets/mainBG.png"

const MainContainer = styled.div`
  display: flex;
  background: url(${bgIMG}), lightgray 50% / cover no-repeat;
  height: 850px;
  h1{
    position: absolute;
    font-size: 92px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-100%);
    color: #E4E4E4;
  }
`
const Main = () => {
  return (
    <MainContainer id="home">
      <h1>ЗАСОБИ РЕР</h1>
    </MainContainer>
  );
};

export default Main;
