import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { orderCards, filterCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from "./Favorite.module.css";

const Favorites = (props) => {
  const { myFavorites } = props;
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div className={style.fav}>
      <div className={style.filter}>
        <select className={style.select} name="order" onChange={handleOrder}>
          <option value="Ascendente">Acscendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select className={style.select} name="filter" onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        <Link to="/home">
          <span className={style.home}>To Home</span>
        </Link>
      </div>

      {myFavorites.map((character) => {
        return (
          <Card
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            gender={character.gender}
            species={character.species}
            origin={character.origin?.name}
            status={character.status}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
