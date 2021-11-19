import React from "react";
import style from './Main.module.css';
import styleContainer from '../../src/common/styles/Container.module.css'
import main_img from './main_img.png'

function Main() {
  return (
    <div className={style.main}>
      <div className={styleContainer.container}>
        <div className={style.text}>
          <span>Привет!</span>!
          <h1>Меня зовут Александр Каюда.</h1>
          <p>Я Front-End разработчик.</p>
        </div>
        <div className={style.photo}>
          <img alt={'img'} src={main_img}/>
        </div>
      </div>


      </div>
  );
}

export default Main;
