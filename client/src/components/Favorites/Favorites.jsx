import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../Card/Card'
import { orderCards, filterCards } from '../../redux/actions';
import { useDispatch } from 'react-redux';


const Favorites = (props) => {
    const { myFavorites } = props;
    const dispatch = useDispatch();


const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));

}

 const handleFilter = (e) => {
    dispatch(filterCards(e.target.value))
 }

    return  (
        <div>
            <div>
                <select name="order" onChange={handleOrder}>
                   <option value='Ascendente'>Acscendente</option>
                   <option value='Descendente'>Descendente</option>
                </select>
                <select name="filter" onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
             <Link to='/home'><span>To Home</span></Link>
             {myFavorites.map((character) => {
                return <Card
                id={character.id} 
                key={character.id} 
                name={character.name}
                image={character.image}
                gender={character.gender}
                species={character.species}
               
                
                />
             })}
        </div>
        )
}


const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites);