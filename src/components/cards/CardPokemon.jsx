import React from 'react'
import styles from './../../css/cardsPokemonDetails.module.css';


export function CardPokemon({ data }) {

  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedorCards}>
        <div>
          <p className={styles.cardID}> <span>Tarjeta #</span> {data.id}</p>
        </div>
        <div className={styles.cards}>
          <img className={styles.imgCards} src={data.sprites.other.dream_world.front_default} alt='pokemon' />
        </div>       
      </div>
      <div className={styles.contenedorData}>
          <div>
            <p className={styles.cardP}> <span>Nombre:</span> <div className={styles.colorNombre}>{data.forms[0].name}</div></p>
          </div>
          <div>
            <p className={styles.cardP}> <span>Tipo:</span> <div className={styles.colorTipo}>{data.types[0].type.name}</div></p>
          </div>
          <div>
            <p className={styles.cardP}> <span>Habilidad 1:</span> <div className={styles.colorAbilidad}>{data.abilities[0].ability.name}</div></p>
          </div>
          <div>
            <p className={styles.cardP}> <span>Habilidad 2:</span> <div className={styles.colorAbilidad}>{data.abilities[1].ability.name}</div></p>
          </div>
        </div>
    </div>
  )
}
