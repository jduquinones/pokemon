import styles from './../css/pokemon.module.css';
import pokemonIntro from './../css/video/PokémonIntro.mp4';
import { useState } from 'react';
import { ApiFetch } from '../ApiFetch';
import { Cards } from './cards/Cards';


export function Pokemons() {
  const [url] = useState('https://pokeapi.co/api/v2/pokemon');
  const estado = ApiFetch(url);
  const { cargando, data } = estado;

  return (
    <div>
      <div className={styles.contenedorVideo} >
        <video className={styles.video} autoPlay loop muted>
          <source src={pokemonIntro} type='video/mp4' />
        </video>
      </div>
      <div className={styles.contenedor}>
        {
          cargando
            ?
            <h1>Cargando...</h1>
            :
            <Cards results={data.results} />
        }
      </div>
    </div>
  );
}
