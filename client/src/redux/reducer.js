const initialState = { myFavorites: [], allCharacters: [] };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_FAV':
      return { ...state, myFavorites: payload, allCharacters: payload };


    case 'REMOVE_FAVORITE':

    return { ...state, myFavorites: payload };

    case 'FILTER':
      let filtro = [...state.allCharacters].filter((char) => {
        return char.gender === payload;
      });
      return { ...state, myFavorites: filtro };
      
      case 'ORDER':
        let sorted = state.allCharacters.sort((a,b)=>{
            if (a.id > b.id) return payload === "Ascendente" ? 1 : -1;
            if (a.id < b.id) return payload === "Descendente" ? -1 : 1;
            else return 0
        })

        return{
            ...state,
            myFavorites: sorted
        };

    default:
        return {...state};
}
}

export default reducer;
