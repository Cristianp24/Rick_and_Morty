import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav({onSearch, logout, random}) {
  
  return (
    <div className={style.Nav}>
      <Link to="/about">
        <span className={style.logout}>About</span>
      </Link>
      <Link to="/home">
        <span className={style.logout}>Home</span>
      </Link>
      <Link to="/favorites">
        <span className={style.logout}>Favorites</span>
      </Link>
      <SearchBar onSearch={onSearch} />
        <button className={style.logout}onClick={random}>Random</button>
      <button className={style.logout} onClick={logout}>Logout</button>
    </div>
  );
}
