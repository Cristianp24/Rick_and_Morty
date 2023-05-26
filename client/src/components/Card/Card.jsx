import style from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'



export function Card(props) {
  const { addFav, removeFav, myFavorites,onClose } = props;
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav ? removeFav(props.id) : addFav(props);
    setIsFav(!isFav);
    }

    useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites,props.id]);
  

  
  return (
    <div className={style.Carta}>
     {
     isFav ? (
      <button className={style.handle} onClick={handleFavorite}>❤️</button>
   ) : (
      <button className={style.handle} onClick={handleFavorite}>🤍</button>
      
   )}

      <button className={style.btnx} onClick={() => onClose(props.id)}>
        X
      </button>
      <Link to={`/detail/${props.id}`}>
      <h2 className={style.name}>{props.name}</h2>
      </Link>
      <img
        className={style.img}
        src={props.image}
        alt=""
      />

      <div className={style.texto}>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
return {
   myFavorites: state.myFavorites,
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
