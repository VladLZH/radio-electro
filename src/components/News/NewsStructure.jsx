import React from "react";
import styled from "styled-components";
import NewsCard from "./NewsCard";
import news1 from "../../assets/news1.jpg";
import news2 from "../../assets/news2.png";
import news3 from "../../assets/news3.png";
import news4 from "../../assets/news4.jpg";
import news5 from "../../assets/news6.png";
import news6 from "../../assets/news5.jpg";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px 0;
  .title {
    width: 100%;
    text-align: center;
    margin: 0;
    padding-bottom: 50px;
    color: #e4e4e4;
    font-size: 32px;
  }
`;

const News = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const NewsStructure = () => {
  const dataInfoCard = [
    {
      IMG: news1,
      title: "Українські безпілотники..",
      desc: "Безпілотники обладнані спеціальними датчиками, які можуть виявляти радіохвилі, що випромінюються радарними станціями.",
    },
    {
      IMG: news2,
      title: "США відправляють Україні",
      desc: "Ці засоби включають в себе мобільні станції перехоплення радіопереговорів, радари, які можуть виявляти російські винищувачі",
    },
    {
      IMG: news3,
      title: "Придушення української",
      desc: "Російські війська використовують засоби радіоелектронної розвідки для придушення української протиповітряної оборони.",
    },
    {
      IMG: news4,
      title: "Ізраїльські компанії ",
      desc: "Ізраїльські компанії розробляють нові засоби радіоелектронної розвідки для України.",
    },
    {
      IMG: news5,
      title: "Українські військові використовують",
      desc: "Українські військові використовують дрони-камикадзе для боротьби з російськими радарними станціями. ",
    },
    {
      IMG: news6,
      title: "Україна розробляє власні",
      desc: "Україна розробляє власні засоби радіоелектронної розвідки. Ці засоби необхідні для того.. ",
    },
  ];
  return (
    <MainContainer id="news">
      <h2 className="title">Новини</h2>
      <News>
        {dataInfoCard.map((card, index) =>
          index < 7 ? <NewsCard data={card} /> : console.log("Done")
        )}
      </News>
    </MainContainer>
  );
};

export default NewsStructure;
