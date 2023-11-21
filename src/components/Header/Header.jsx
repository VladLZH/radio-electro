import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  flex-shrink: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(7.5px);
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  z-index: 10;

  li {
    color: #E4E4E4;
    list-style-type: none;
    text-decoration: none;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover {
      color: #ffc700;
      transform: scale(1.2);
    }
  }

  ul {
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin-left: 0;
    padding-left: 0;
  }
  span {
    color: transparent;
      }

  @media screen and (max-width: 1200px) {
    height: auto;

    li {
      display: flex;
      justify-content: center;
      font-size: 32px;
      margin-bottom: 10px;
    }

    ul {
      width: 80%;
      flex-direction: column;
      display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
    }

    .menu-button {
      display: block;
      font-size: 24px;
      margin: 10px;
      border: 3px solid white;
      border-radius: 15px;
      padding: 5px;
      color: white;
      cursor: pointer;
    }
    span {
    color: white;
      }
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer menuOpen={menuOpen}>
      <div className="menu-button" onClick={toggleMenu}>
        <span>Меню</span>
      </div>
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
        <li>
          <Link to="contacts" smooth={true} duration={500}>
            Контакти
          </Link>
        </li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
