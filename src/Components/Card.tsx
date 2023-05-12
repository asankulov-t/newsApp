import React from 'react';
import s from './Card.module.css'
import {Link} from "react-router-dom";
type PropsTypes={
    img:string,
    parag:string,
    title:string,
    readFunc:(str:string)=>void
}
const Card = React.memo((props:PropsTypes) => {
    return (
        <div className={s.totalBlock}>
            <div className={s.card}>
                <img src={props.img} alt=""/>
                <div>
                    <h5>{props.title.substring(0,75)}... <Link className={s.read} onClick={()=>props.readFunc(props.title)} to="/">Read more</Link></h5>
                    <p>{props.parag}</p>
                </div>
            </div>
        </div>
    );
})

export default Card;