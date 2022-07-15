import React from 'react'
import { useState } from 'react';
import { ApiFetch } from '../ApiFetch';


export function Paginacion({ dataApi }) {
  const [page, setPage] = useState();

  const [url] = useState("https://pokeapi.co/api/v2/pokemon/");
  const estado = ApiFetch(url);
  const { cargando, data } = estado;

  
 
  return (
    <div>
      <button onClick={setPage(data.next)}>Siguiente</button>
    </div>
  )
}
