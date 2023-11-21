import React from "react";
import styled from "styled-components";
import Card from "./Card";
import photo1 from "../../assets/hortiza.jpg"
import photo2 from "../../assets/apella.jpg"
import photo3 from "../../assets/plastun.jpg"
import photo4 from "../../assets/plastunciv.jpg"
import photo5 from "../../assets/minerva.jpg"
import photo6 from "../../assets/aurisr6000.jpg"

const MeansContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .titleMeans {
    width: 100%;
    padding: 20px 0;
    text-align: center;
    color: #e4e4e4;
    font-size: 32px;
    box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.25);
  }
`;
const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 75%;
`;
const MeansStructure = () => {
  const dataMeans = [{
    IMG: photo1,
    title: "Хортиця М",
    desc1: "25-6000 MГц",
    desc2: "80 MГц",
  },{
    IMG: photo2,
    title: "APELLA",
    desc1: "2/4 канала",
    desc2: "20 MГц",
  },{
    IMG: photo3,
    title: "PLASTUN-RP3000",
    desc1: "25-3000 MГц",
    desc2: "Менше 0.5",
  },{
    IMG: photo4,
    title: "DF-3000-A",
    desc1: "25-3000 MГц",
    desc2: "Менше 1",
  },{
    IMG: photo5,
    title: "MINERVA",
    desc1: "25-40000 MГц",
    desc2: "800 MГц",
  },{
    IMG: photo6,
    title: "AUTIS-R6000",
    desc1: "до 256",
    desc2: "80 MГц",
  },];
  return (
    <MeansContainer id="means">
      <h2 className="titleMeans">ЗАСОБИ РЕР</h2>
      <CardList>
        {dataMeans.map((card, index) =>
          index < 7 ? <Card data={card} /> : console.log("done")
        )}
      </CardList>
    </MeansContainer>
  );
};

export default MeansStructure;