import styles from './../css/pokemon.module.css';
import pokemonIntro from './../css/video/PokémonIntro.mp4';
import { ApiFetch } from '../ApiFetch';
import { Cards } from './cards/Cards';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';


export function Pokemons() {

  const [searchParams, setSearchParams] = useSearchParams();

  const [url] =  useState('https://pokeapi.co/api/v2/pokemon/');
  const estado = ApiFetch(url);
  const { cargando, data } = estado;

  console.log(data);

  const handleChange = (e) => {
    let search = e.target.value;
    if (search) {
      setSearchParams({ search });
    } else {
      setSearchParams({});
    }
  }

  return (
    <div>
      <div className={styles.contenedorVideo} >
        <video className={styles.video} autoPlay loop muted>
          <source src={pokemonIntro} type='video/mp4' />
        </video>
      </div>
      <div>
        <input
          type="text"
          value={searchParams.get('search') || ''}
          onChange={handleChange} />
      </div>
      <div className={styles.contenedor}>
        {   

          cargando
            ?
            <h1>Cargando...</h1>
            :            
            <Cards results={data.results.filter(e =>  {
              let filter = searchParams.get('search')
              if (!filter) return true
              
              let buscar = e.name.toLowerCase()
              return buscar.startsWith(filter.toLowerCase());
            })} />
        }
      </div>
    </div>
  );
}
