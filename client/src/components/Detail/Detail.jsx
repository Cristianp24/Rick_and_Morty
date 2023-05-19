import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';



export default function Detail () {
  const { detailId } = useParams();
  const navigate = useNavigate();
  const [characters, setCharacter] = useState({});
   

    function navegar() {
    navigate('/home');
  }
   
    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/character/:${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
               //  console.log(char)
              setCharacter(char); //{info personaje}
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return (
         <div>
            <button  onClick={navegar}  >Ir a Home</button>
         
            <h1>Name: {characters.name}</h1>
            <div>
                <h2>STATUS: {characters.status}</h2>
                <h2>ESPECIE: {characters.species}</h2>
                <h2>GÉNERO: {characters.gender}</h2>
                <h2>ORIGEN: {characters.origin?.name}</h2>
            </div>
            <img src={characters.image} alt="img not found"/>
        </div>
    )
}