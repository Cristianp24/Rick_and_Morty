const initialState = { myFavorites: [], allCharacters: [] };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_FAV":
      return { ...state, myFavorites: payload, allCharacters: payload };

      // let copy1 = state.allCharacters;
      // copy1.push(payload);
      //  return { ...state, myFavorites: copy1, allCharacters: copy1 };
    case "REMOVE_FAVORITE":

    return { ...state, myFavorites: payload };
      // let copy2 = state.myFavorites.filter((char) => {
      //   return char.id !== Number(payload);
      // });
      // return { ...state, myFavorites: copy2 };
    case 'FILTER':
      let filtro = [...state.allCharacters].filter((char) => {
        return char.gender === payload;
      });
      return { ...state, myFavorites: filtro };
      
      case 'ORDER':
        let orden = [...state.allCharacters];
        let orderedChars = orden.sort((a,b)=>{
          if(a.id > b.id) {
            return payload === 'Ascendente' ? 1 : -1
          } else if (a.id < b.id) {
            return payload === 'Descendente' ? -1 : 1
          } 
          else return 0;
        })
       
    default :
      return { ...state };
  }
};

export default reducer;
