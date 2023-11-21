import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import fb from "../../assets/fb.svg";
import inst from "../../assets/inst.svg";
import tg from "../../assets/tg.svg";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: black;
  h3 {
    color: #ffc700;
    font-size: 24px;
    font-weight: 400;
  }
  a, li {
    text-decoration: none;
    list-style-type: none;
    color: white;
    margin-bottom: 10px;
    transition: all 200ms ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
  ul{
      padding-inline-start: 0;
      margin-block-start: 0;
    }
`;
const Navigation = styled.div`
  display: flex;
  flex-direction: column;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  a {
    display: flex;
    align-items: center;
  }
  span {
    padding-left: 5px;
  }
`;
const InterestingLink = styled.div`
  display: flex;
  flex-direction: column;
`;
const Footer = () => {
  return (
    <FooterContainer id="contacts">
      <Navigation>
        <h3>Навігація</h3>
        <ul>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Головна
          </Link>
        </li>
        <li>
          <Link to="news" smooth={true} duration={500}>
            Новини
          </Link>
        </li>
        <li>
          <Link to="means" smooth={true} duration={500}>
            Засоби
          </Link>
        </li>
        <li>
          <Link to="maps" smooth={true} duration={500}>
            Карта
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            Про нас
          </Link>
        </li>
      </ul>
      </Navigation>
      <Contact>
        <h3>Контакти</h3>
        <a href="/">
          <img src={fb} alt="" />
          <span>@rerUA</span>
        </a>
        <a href="/">
          <img src={inst} alt="" />
          <span>@FirstRERua</span>
        </a>
        <a href="/">
          <img src={tg} alt="" />
          <span>@rerUA_bot</span>
        </a>
      </Contact>
      <InterestingLink>
        <h3>Цікаві посилання</h3>
        <a href="https://www.radiosvoboda.org/a/rosiya-ukrayina-zahroza-viyny/31703318.html">
          Більше про війну
        </a>
        <a href="https://i-ua.tv/programs/suspilni-dialohy/42604-ekspert-pro-zakinchennia-viiny-i-mistse-ukrainy-v-novomu-svitoporiadku?gad_source=1&gclid=CjwKCAiA9dGqBhAqEiwAmRpTCzoXkHo5coEhN5QFmb_NnS8Jwhaje60XtMPyUdVbd6-M88DuPzETeBoCFtIQAvD_BwE">
          Новини в Україні
        </a>
        <a href="https://alerts.in.ua/">Alerts In UA</a>
        <a href="https://helpvolunteer.com.ua/campaigns/896">Що таке РЕР?</a>
        <a href="https://tsn.ua/">Новини</a>
      </InterestingLink>
    </FooterContainer>
  );
};

export default Footer;
