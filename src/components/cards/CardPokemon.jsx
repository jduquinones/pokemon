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
        <div className={styles.cardP}>
          <span>Nombre:</span> <p className={styles.colorNombre}>{data.forms[0].name}</p>
        </div>

        <div className={styles.cardP}>
          <span>Tipo:</span> <p className={styles.colorTipo}>{data.types[0].type.name}</p>
        </div>

        <div className={styles.cardP}>
          <span>Habilidad 1:</span> <p className={styles.colorAbilidad}>{data.abilities[0].ability.name}</p>
        </div>

        {
          !
            data.abilities[1]
            ?
            null
            :
            <div className={styles.cardP}>
              <span>Habilidad 2:</span> <p className={styles.colorAbilidad}>{!data.abilities[1] ? null : data.abilities[1].ability.name}</p>
            </div>
        }

      </div>
    </div>
  )
}
