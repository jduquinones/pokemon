import React from 'react';
import styles from './../css/layout.module.css'
import imagenLogo from './../css/imagen/logo-nav.png';
import picachuLogo from './../css/imagen/picachu-pokebola.webp';


export  function Nav() {
  return (
    <div className={styles.contenedorNavegador}>
        <nav className={styles.navegador}>
          <img className={styles.logoImg} src={imagenLogo} width="170px" alt='logo-navegacion' />
          <p> Cards  Pokemon</p>
          <img className={styles.logoImg} src={picachuLogo} width="170px" alt='logo-navegacion' />
        </nav>
    </div> 
  )
}
