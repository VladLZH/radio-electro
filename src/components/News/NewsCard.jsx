import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  position: relative;
  margin: 100px 40px 0 40px;
  width: 300px;
  height: 450px;
  border-radius: 15px;
  border: 8px solid #222;
  box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.35);
  cursor: pointer;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transition: all .3s ease-in-out;
    &:hover{
      opacity: 0.5;
     transform: scale(1.2);
    }
  }
  
`;
const CardText = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  flex-direction: column;
  width: 100%;
  z-index: 2;
  color: white;
  background: rgba(255, 255, 255, 0.19);
  backdrop-filter: blur(2px);
  h2{
    margin: 5px;
    font-size: 24px;
  }
  span{
    padding: 5px;
  }
`;
const NewsCard = ({ data }) => {
  return (
    <CardContainer>
      <img src={data.IMG} alt="" />
      <CardText>
        <h2>{data.title}</h2>
        <span>{data.desc}</span>
      </CardText>
    </CardContainer>
  );
};

export default NewsCard;
