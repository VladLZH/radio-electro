import React, { useState } from "react";
import styled from "styled-components";
import map from "../../assets/map.svg";
import { ReactSVG } from "react-svg";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 100px 0;
  h2 {
    width: 100%;
    color: #e4e4e4;
    text-align: center;
    box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.25);
    padding: 20px 0;
    font-size: 32px;
  }
`;
const MapContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  path {
    transition: all 0.3s ease-in-out;
    fill: #222222;
  }
  path:hover {
    cursor: pointer;
    fill: #ffc700;
  }
  table {
    border: 3px solid #e4e4e4;
    border-radius: 15px;
    height: 0;
    width: 500px;
    thead {
      text-align: center;
      font-size: 24px;
      color: #ffc700;
    }
    tbody {
      color: #e4e4e4;
      td {
        padding: 10px;
      }
    }
  }
  @media screen and (max-width: 1500px){
    flex-direction: column;
    table{
      margin-bottom: 100px;
    }
  } 
`;

const MapStructure = () => {
  const mapData = {
    Вінниця: {
      name: "Хортиця М",
      coordinates: "48.65, 23.82",
      info: "До речі, в Вінниця заплановано великий концерт класичної музики.",
    },
    Волинь: {
      name: "APELLA",
      coordinates: "50.53, 37.01",
      info: "У Луцьк в цьому році відкрили новий парк розваг.",
    },
    Дніпро: {
      name: "PLASTUN-RP3000",
      coordinates: "46.75, 35.99",
      info: "Слухав, що в Дніпро пройде фестиваль джазу наступного місяця.",
    },
    Донецьк: {
      name: "DF-3000-A",
      coordinates: "51.48, 39.01",
      info: "Чи чув ти, що в Донецьк відкрили новий арт-центр?",
    },
    Житомир: {
      name: "MINERVA",
      coordinates: "44.78, 37.87",
      info: "Ти не чув, що в Житомир відновили старовинний театр?",
    },
    Закарпаття: {
      name: "AUTIS-R6000",
      coordinates: "50.17, 31.68",
      info: "О, а ти знаєш, що в Ужгород найкраще кафе з домашніми тортами?",
    },
    Запоріжжя: {
      name: "Хортиця М",
      coordinates: "45.78, 31.64",
      info: "До речі, в Запоріжжя заплановано великий концерт класичної музики.",
    },
    "Івано-Франківськ": {
      name: "APELLA",
      coordinates: "49.88, 30.23",
      info: "У Івано-Франківськ в цьому році відкрили новий парк розваг.",
    },
    Київ: {
      name: "PLASTUN-RP3000",
      coordinates: "51.79, 28.80",
      info: "Ти не чув, що в Київ відновили старовинний театр?",
    },
    Кропивницький: {
      name: "DF-3000-A",
      coordinates: "46.22, 29.10",
      info: "До речі, в Кропивницький заплановано великий концерт класичної музики.",
    },
    Луганськ: {
      name: "MINERVA",
      coordinates: "50.73, 25.00",
      info: "О, а ти знаєш, що в Луганськ найкраще кафе з домашніми тортами?",
    },
    Львів: {
      name: "AUTIS-R6000",
      coordinates: "51.33, 33.53",
      info: "В Львів на вихідних буде ярмарок рукоділля, дуже цікаво.",
    },
    Миколаїв: {
      name: "Хортиця М",
      coordinates: "44.77, 23.27",
      info: "В Миколаїв на вихідних буде ярмарок рукоділля, дуже цікаво.",
    },
    Одеса: {
      name: "APELLA",
      coordinates: "51.93, 36.59",
      info: "Слухав, що в Одеса пройде фестиваль джазу наступного місяця.",
    },
    Полтава: {
      name: "PLASTUN-RP3000",
      coordinates: "49.64, 28.61",
      info: "Ти не чув, що в Полтава відновили старовинний театр?",
    },
    Рівне: {
      name: "DF-3000-A",
      coordinates: "48.56, 27.94",
      info: "Знаєш, що в Рівне збудували новий спортивний комплекс?",
    },
    Суми: {
      name: "MINERVA",
      coordinates: "46.51, 31.46",
      info: "Знаєш, що в Суми збудували новий спортивний комплекс?",
    },
    Тернопіль: {
      name: "AUTIS-R6000",
      coordinates: "48.01, 32.77",
      info: "В Тернопіль недавно відкрили нову бібліотеку з сучасним дизайном.",
    },
    Харків: {
      name: "Хортиця М",
      coordinates: "46.80, 29.64",
      info: "Ти не чув, що в Харків відновили старовинний театр?",
    },
    Херсон: {
      name: "APELLA",
      coordinates: "47.16, 30.58",
      info: "В Херсон на вихідних буде ярмарок рукоділля, дуже цікаво.",
    },
    Хмельницький: {
      name: "PLASTUN-RP3000",
      coordinates: "48.85, 22.07",
      info: "До речі, в Хмельницький заплановано великий концерт класичної музики.",
    },
    Черкаси: {
      name: "DF-3000-A",
      coordinates: "49.70, 29.68",
      info: "О, а ти знаєш, що в Черкаси найкраще кафе з домашніми тортами?",
    },
    Чернігів: {
      name: "MINERVA",
      coordinates: "48.58, 29.67",
      info: "О, а ти знаєш, що в Чернігів найкраще кафе з домашніми тортами?",
    },
    Чернівці: {
      name: "AUTIS-R6000",
      coordinates: "48.35, 22.63",
      info: "У Чернівці буде міжнародна виставка сучасного мистецтва, не пропусти.",
    },
    Крим: {
        name: "AUTIS-R6000",
        coordinates: "48.35, 22.63",
        info: "..У Криму буде виставка сучасної військової техніки, не пропусти..",
      },
    Севастополь:{
        name: "AUTIS-R6000",
        coordinates: "48.35, 22.63",
        info: "..Сьогодні нанесемо удари по військовим об'єктам, буде жарко..",
      },
    Кіровоград:{
        name: "AUTIS-R6000",
        coordinates: "48.35, 22.63",
        info: "..Сьогодні нанесемо удари по військовим об'єктам, буде жарко..",
      },
      Київська:{
        name: "AUTIS-R6000",
        coordinates: "48.35, 22.63",
        info: "..Сьогодні нанесемо удари по військовим об'єктам, буде жарко..",
      },
  };
  const [selectedElement, setSelectedElement] = useState(null);

  const handleElementClick = (event) => {
    const elementName = event.target.getAttribute("name");
    const elementData = mapData[elementName];
    setSelectedElement(elementData);
  };

  return (
    <MainContainer id="maps">
      <h2>Інформація з РЕР</h2>
      <MapContainer>
        <table>
          <thead>
            <tr>
              <td>Засіб РЕР</td>
              <td>Координати</td>
              <td>Інформація</td>
            </tr>
          </thead>
          <tbody>
            {selectedElement ? (
              <tr>
                <td>{selectedElement.name}</td>
                <td>{selectedElement.coordinates}</td>
                <td>{selectedElement.info}</td>
              </tr>
            ) : (
              <tr>
                <td colSpan="3">Select a map element</td>
              </tr>
            )}
          </tbody>
        </table>
        <ReactSVG
          src={map}
          className="currentMap"
          onClick={handleElementClick}
        />
      </MapContainer>
    </MainContainer>
  );
};

export default MapStructure;
