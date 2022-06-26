import React from 'react'
import { Link } from 'react-router-dom';
import { ApiFetch } from '../../ApiFetch'
import  styles from './../../css/cardsPokemon.module.css';

export function CardsPokemons({ url }) {
  const estado = ApiFetch(url);
  const { cargando, data } = estado

  return (
    <div className={styles.contenedorCards} >    
      {
        cargando
          ?
          <h1>Cargando</h1>
          :
          <div className={styles.cards}>
            <div>
              <Link className='list' to={"/pokemonsDetails/" + data.id}>
                <img className={styles.imgCards} src={data.sprites.other.dream_world.front_default} alt='pokemon' width="150px" />
              </Link>
            </div>
            <div className={styles.tituloCard}>
              <p className={styles.cardP} >{data.forms[0].name}</p>
            </div>            
          </div>   
      }
    </div>
  )
}
