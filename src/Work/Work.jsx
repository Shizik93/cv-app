import React from "react";
import styleContainer from '../common/styles/Container.module.css'
import style from './Work.module.css'

export const Work = () => {
  return (
    <div className={style.workContainer}>
      <div className={`${styleContainer.container} ${style.container}`}>
        <div className={style.work}>
          <h3 className={style.title}>Рассматриваю вариант удаленной работы</h3>
          <div>
            <button>Нанять Меня</button>
          </div>
        </div>

      </div>
    </div>
  )
}