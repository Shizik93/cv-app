import React from "react";
import style from './Footer.module.css'
export const Footer = () => {
  return(
    <div className={style.rootContainer}>
      <div className={style.container}>
        <div><h1 style={{margin:'0'}}>Каюда Александр</h1></div>
        <div className={style.logoContainer}>
          <div className={style.logo}></div>
          <div className={style.logo}></div>
          <div className={style.logo}></div>
          <div className={style.logo}></div>
        </div>
        <div><h3 style={{margin:'0'}}>2021 Все права защищены</h3></div>
      </div>
    </div>
  )
}