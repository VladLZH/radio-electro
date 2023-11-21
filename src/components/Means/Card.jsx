import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 450px;
  margin: 50px 70px 0 0;
`;
const CardTop = styled.div`
  display: flex;
  position: relative;
  height: 40%;
  border-radius: 15px 15px 0px 0px;
  img {
    object-fit: cover;
    width: 100%;
    border-radius: 15px 15px 0px 0px;
  }
  h3 {
    position: absolute;
    bottom: 0;
    left: 10px;
    color: white;
  }
`;
const CardBottom = styled.div`
    display: flex;
    flex-direction: column;
    height: 65%;
    justify-content: space-around;
    background-color: #292929;
    border-radius: 0 0 15px 15px;
    padding: 10px;
    h3 {
        color: white;
        margin: 0;
        font-size: 20px;
        font-weight: 500;
    }
    span{
        color: #989898;
        font-size: 16px;
        font-weight: 400;
    }
    a{
        text-decoration: none;
        text-align: center;
        padding: 10px;
        color: #292929;
        background-color: #FFC700;
        border-radius: 5px;
        transition: all .3s ease-in-out;
        &:hover{
            background-color: #ffc800a1;
        }
    }
`;
const Card = ({data}) => {
  return (
    <CardContainer>
      <CardTop>
        <img src={data.IMG} alt="" />
        <h3>{data.title}</h3>
      </CardTop>
      <CardBottom>
        <div className="firstProps">
          <span>Діапазон робочих частот</span>
          <h3>{data.desc1}</h3>
        </div>
        <div className="secondProps">
          <span>Максимальна смуга аналізу</span>
          <h3>{data.desc2}</h3>
        </div>
        <a href="/">Деталі</a>
      </CardBottom>
    </CardContainer>
  );
};

export default Card;
