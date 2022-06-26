import React from 'react';
import styles from './../css/footer.module.css'
import imagenLogo from './../css/imagen/logo-nav.png';
import picachuLogo from './../css/imagen/picachu-pokebola.webp';


export  function Footer() {
  return (
    <div className={styles.contenedorFooter}>
        <div className={styles.footer}>
          <img className={styles.logoImg} src={imagenLogo} width="100px" alt='logo-divegacion' />          
          <img className={styles.logoImg} src={picachuLogo} width="100px" alt='logo-divegacion' />
        </div>
        <p> Cards  Pokemon</p>
    </div> 
  )
}