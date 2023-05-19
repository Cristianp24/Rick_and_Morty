import "./App.css";
import { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav.jsx";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Error from "./components/Error/Error.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { removeFav } from "./redux/actions";
import { connect } from "react-redux";


function App() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  function logout() {
    setAccess(false);
    navigate("/");
  }

  const login = async (userData) => {
    const { username: email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    let response = await axios(URL+`?email=${email}&password=${password}`);
    // console.log(response.data);
    try {
      const { access } = response.data;
      setAccess(access);
      if (!access) alert("Access denied");
      access && navigate("/home");
    } catch (error) {
      console.log("Axios Error", error);
    }
  };

  async function onSearch(id) {
    let response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
    try {
      let { data: char } = response;
      if (char.name) setCharacters((oldChars) => [...oldChars, char]);
      else window.alert("No hay personajes con ese ID");
    } catch (error) {
      alert("AXIOS ERROR", error);
    }
  }

  function onClose(id) {
    let found = characters.find((character) => character.id === id);
    let deleted = characters.filter((character) => character.id !== found.id);
    setCharacters(deleted);
  }

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="*" element={<Error />} />
        <Route path="/favorites" element={<Favorites />} />
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
