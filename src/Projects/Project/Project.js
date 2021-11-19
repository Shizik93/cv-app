import React from "react";
import style from './Project.module.css'

export function Project(props) {
  return (
    <div className={style.project}>
      <div  className={style.img}> <a href={''}><img style={{width:'100%',height:'100%'}}/></a></div>
      <h4 className={style.title}>Name project</h4>
      <div className={style.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias deleniti expedita
        quibusdam ullam voluptate? Accusamus accusantium culpa nulla repudiandae sequi. Dolor fugiat id nihil quasi rem
        sint tempore voluptas voluptatum.
      </div>

    </div>
  )
}