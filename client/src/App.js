
import "./App.css";
import { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav.jsx";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Error from "./components/Error/Error.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from './components/Favorites/Favorites';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { removeFav } from "./redux/actions";
import {connect} from 'react-redux';

function App() {
  // const username = 'mail@hmail.com';
  // const password = 'hola123'  ;
  const navigate = useNavigate();
  // const { removeFav } = props;
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);

  // useEffect(() => {
  //   !access && navigate('/');
  // }, [access]);

  //  function login(userData) {
  //   if (userData.username === username && userData.password === password) {
  //      setAccess(true);
  //      navigate('/home');
  //    }
  // }

  // function logout() {
  //   setAccess(false);
  //   navigate('/');
  // }
  
//   function login(userData) {
//     if (userData.password === password && userData.username === username) {
//         setAccess(true);
//         navigate('/home');
//     }
// }
const login = async (userData) => {
  const { username: email, password } = userData;
  const URL = 'http://localhost:3001/rickandmorty/login/';
  axios(`${URL}?email=${email}&password=${password}`).then(({ data }) => {
     const { access } = data;
     setAccess(access);
  });
  setAccess(true);
     !access && navigate('/home');
    
  }



function logout() {
      setAccess(false);
      navigate('/');
}

//App.js
useEffect(() => {
!access && navigate('/');
}, [access]);

  async function onSearch(id) {
    // // fetch(`https://rickandmortyapi.com/api/character/${character}`)
    // let response = axios(`http://localhost:3001/rickandmorty/character/${id}`);
    // try {
    //   let {data:char} = response;
    //   if(char.name)setCharacters(oldChars => [...oldChars, char]);
    //   else window.alert('No hay personajes con ese ID')
    // } catch(error) {
    //   alert('AXIOS ERROR', error)
    // }
    let found = characters.find(
      (ele) => ele.id === Number(id)
      )
    if (!found) {
      /* fetch(https://rickandmortyapi.com/api/character/${input}) */
      fetch(`http://localhost:3001/rickandmorty/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('No hay personajes con ese ID');
          }
        })
    } else {
      alert("Esa carta ya fue agregada")
    }
  }

  

  function onClose(id){
    let found = characters.find((character) => character.id === id);
    let deleted = characters.filter(character => character.id !== found.id);
    setCharacters(deleted);
  }
  // function onClose(id){
  //   console.log(id);
  //   let deleted = characters.filter(character => character.id !== id);
  //   setCharacters(deleted);
    // removeFav(id)
  
  // const onClose = (id) => {
  //   setCharacters(
  //     characters.filter((character) => character.id !== Number(id))
  //   );
  //   removeFav(id);
  // };
  // function onClose(id) {

  // }

    // const newCharacters = characters.filter(
    //   (charac) => charac.id !== Number(id)
    // );
    // setCharacters(newChar
  

  return (
    <div className="App">
      {pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='*' element={<Error />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  );
}
  

const mapDispatchToProps = (dispatch) => {
  return {
    removeFav(id) {
      dispatch(removeFav(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(App);


