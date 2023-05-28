import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from './Detail.module.css'



export default function Detail(){

    const [character, setCharacter] = useState({})

    const { detailId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
                console.log(char)
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((error) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
      
    return(
        <div className={style.detail}>
          <div > 
            <Link to='/home' ><button className={style.btn}>To Home</button></Link>
            <div  >
              <h1 className={style.datos}>Name:{character.name}</h1>
              <h2 className={style.datos}>Gender: {character.gender}</h2>
              <h2 className={style.datos}>Status: {character.status}</h2>
              <h2 className={style.datos}>Origin: {character.origin?.name}</h2>
              <img className={style.image}src={character.image} alt='not found'/>
            </div>
          </div>
        </div>
    )
}