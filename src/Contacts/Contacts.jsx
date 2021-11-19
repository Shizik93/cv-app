import React from "react";
import style from './Contacts.module.css'

export const Contacts = () => {
  return (
    <div className={style.rootContainer}>
      <div className={style.container}>
        <div>
          <h1 className={style.title}>Контакты
          </h1>
        </div>
        <form className={style.form}>
          <input/>
          <input/>
          <textarea style={{height: '70%', resize: 'none'}}></textarea>
        </form>
        <div>
          <button><h1>Отправить</h1></button>
        </div>
      </div>
    </div>
  )

}