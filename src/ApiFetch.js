import { useEffect, useState } from 'react'


export function ApiFetch(url) {

  const [pokemons, setpokemons] = useState({ cargando: true, data: null });

  useEffect(() => {
    urlFetch(url);
  }, [url]);

  function urlFetch(url) {
    try {
      setpokemons({ cargando: true, data: null })
      fetch(url)
        .then(res => res.json())
        .then(data =>
          setpokemons({ cargando: false, data })
        );
    } catch (error) {
      console.log(error);
    }
  }
  return pokemons
}