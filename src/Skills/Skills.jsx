import React from "react";
import style from './Skills.module.css'
import styleContainer from '../../src/common/styles/Container.module.css'
import Skill from "./Skill/Skill";
import html_css from './Skill/HTML_CSS_IMG.png'
import js from './Skill/JS_IMG.png'
import react from './Skill/REACT_IMG.png'


function Skills() {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.title}>
          Skills
        </h2>
        <div className={style.skills}>
          <Skill img={html_css} title={'HTML/CSS'}
                 description={'HTML (семантическая, кроссбраузерная, адаптивная верстка), CSS именование классов по методологии БЭМ, css модули SASS'}/>
          <Skill img={js} title={'JS'} description={'Javascript (ES6)'}/>
          <Skill img={react} title={'React'} description={'React + Redux'}/>
        </div>
      </div>

    </div>
  );
}

export default Skills;
