import React from "react";
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./Project/Project";

export function Projects() {
  return (
    <div className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <h4> Мои работы</h4>
        <div className={style.projects}>
          <Project/>
          <Project/>
        </div>
      </div>

    </div>
  )
}