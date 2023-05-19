import axios from 'axios';


export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async  (dispatch) => {
       let response = await axios.post(endpoint, character)
          return dispatch({
             type: 'ADD_FAV',
             payload: response.data, 
          });
    
    };
 };
 



export const removeFav = id => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
        let response = await axios.delete(endpoint)
            return dispatch ({
                type: 'REMOVE_FAVORITE',
                payload: response.data,
            })
       
    }  
}
export const filterCards = (gender) => {
    return {
        type: 'FILTER',
        payload: gender
    }
}
export const orderCards = (id) => {
    return {
        type: 'ORDER',
        payload: id
    }
}
