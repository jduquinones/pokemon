import { CardsPokemons } from './CardsPokemons';
import styles from './../../css/cards.module.css';
import { CardPokemon } from './CardPokemon';

export function Cards({ results }) {

  return (
    <div>    
      <ul className={styles.listDos}>            
        {          
          results.map(p => (
            <li className={styles.list} key={p.name}>
              <CardsPokemons url={p.url} />              
            </li>            
          ))          
        }        
      </ul>
    </div>
  )
}

export function CardsId({ results }) {
  return (
    <div className={styles.cardId}>
      {
        <CardPokemon data={results} />
      }
    </div>
  )
}

