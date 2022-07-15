import styles from "./../css/pokemon.module.css";
import pokemonIntro from "./../css/video/PokémonIntro.mp4";
import { ApiFetch } from "../ApiFetch";
import { Cards } from "./cards/Cards";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import Next from "./../css/imagen/next.svg";
import Previous from "./../css/imagen/previous.svg";

export function Pokemons() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState("https://pokeapi.co/api/v2/pokemon/");

  const url = page;
  const estado = ApiFetch(url);
  const { cargando, data } = estado;

  const next = () => {
    setPage(data.next)
  }

  const previe = () => {
    setPage(data.previous)
  }

  const handleChange = (e) => {
    let search = e.target.value;
    if (search) {
      setSearchParams({ search });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div>
      <div className={styles.contenedorVideo}>
        <video className={styles.video} autoPlay loop muted>
          <source src={pokemonIntro} type="video/mp4" />
        </video>
      </div>
      <div className={styles.contenidoSearch}>
        <input
          className={styles.search}
          type="text"
          placeholder="Buscar..."
          value={searchParams.get("search") || ""}
          onChange={handleChange}
        />
      </div>
      <div className={styles.contenedor}>
        {cargando ? (
          <h1>Cargando...</h1>
        ) : (
          <Cards
            results={data.results.filter((e) => {
              let filter = searchParams.get("search");
              if (!filter) return true;

              let buscar = e.name.toLowerCase();
              return buscar.startsWith(filter.toLowerCase());
            })}
          />
        )}
      </div>
      <div>
        {cargando
          ?
          <h1>Cargando...</h1>
          :
          !searchParams.get("search")
            ?
            <div className={styles.contenidoPaginador}>
              <button className={!data.previous ? styles.none : styles.button} onClick={previe}><img src={Previous} alt="imagen Anterior" /></button>
              <button className={data.next === "https://pokeapi.co/api/v2/pokemon/?offset=640&limit=20" ? styles.none : styles.button} onClick={next}><img src={Next} alt="imagen siguiente" /></button>
            </div>
            :
            null
        }
      </div>
    </div>
  );
}
