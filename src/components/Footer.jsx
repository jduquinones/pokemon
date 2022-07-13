import React from 'react';
import styles from './../css/footer.module.css'
import imagenLogo from './../css/imagen/logo-nav.png';
import picachuLogo from './../css/imagen/picachu-pokebola.webp';
import react from './../css/imagen/react-svgrepo-com.svg';
import css from './../css/imagen/css-3-logo-svgrepo-com.svg';
import linkendin from './../css/imagen/linkedin-logo.svg';


export function Footer() {
  return (
    <footer className={styles.contenedorFooterAll}>
      <div className={styles.contenedorFooter}>

        <div className={styles.footerImg}>
          <img className={styles.logoImg} src={imagenLogo} width="150px" alt='logo-divegacion' />
          <img className={styles.logoImg} src={picachuLogo} width="150px" alt='logo-divegacion' />
        </div>

        <div className={styles.bloqueParrafo}>
          <h2 className={styles.titulo} >Tecnologias utilizadas</h2>
          <h3 className={styles.h3}>Web Integrada con la API de POKÉMON</h3>
            <div className={styles.contenedorLogoTexto}>
              <p className={styles.react}> <img className={styles.logoFooter} src={react} alt='logo react js' /> React Js</p>
              <p className={styles.css}> <img className={styles.logoFooter} src={css} alt='logo react js' />CCS 3</p>
            </div>
        </div>

      </div>
      <div className={styles.nombre}>
        <a href="https://www.linkedin.com/in/jose-eduardo-qui%C3%B1ones-mendoza23/" target="_blank" rel="noreferrer"> <img className={styles.logoLinkendin} src={linkendin} alt='logo Linkendin' /><p>Jose Quiñones</p></a>
      </div>
    </footer>
  )
}