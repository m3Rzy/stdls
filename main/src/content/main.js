import "../styles/main.css";
import logo from "../resources/logo.png";
import React from 'react';
import Navbar from "./SideBar/Navbar";
import '../fonts.css'


function Main() {
  document.title = "Админ панель — myliss";
  return (
    <>
      <Navbar />
      <div className="container__wrapper">
        <div className="container__padding">
          <div className="logo__container">
            <img src={logo} className="logo__img" />
            <div className="logo__text">Главная страница</div>
          </div>
          <div className="hello__widget">Здравствуйте, Юлиана!</div>
        </div>

      </div>
    </>

  );
}

export { Main };
