import styles from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar(props) {
   const { onSearch} = props;
   const [character, setCharacter] = useState('');
   const handleChange = (e) => {
      setCharacter(e.target.value);
   }
   return (
      <div className={styles.div}>
          <input className={styles.search} placeholder="  Introduzca ID!..."type='search'value={character}onChange={handleChange} />
      
      <button  className={styles.buttonSearch} onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}

