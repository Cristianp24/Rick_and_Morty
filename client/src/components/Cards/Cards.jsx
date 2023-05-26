import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards(props) {
   const { characters, onClose } = props; 
   return ( 
     <div className={styles.Cartas}>
     {/* {characters.map(character => (
         <Card key={character.id} character={character} onClose={onClose} />
         ))} */}
          {characters.map(character => 
            <Card
               
               id={character.id}
               key={character.id}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               onClose={onClose}
               origin={character.origin?.name}
               status={character.status}
            />
            )}
   </div>
   );
}
 