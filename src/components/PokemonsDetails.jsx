import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ApiFetch } from '../ApiFetch';
import { CardsId } from './cards/Cards';


export function PokemonsDetails() {
  const { pokemonId } = useParams();

  const [url] = useState('https://pokeapi.co/api/v2/pokemon/' + pokemonId + "/");
  const estado = ApiFetch(url);
  const { cargando, data } = estado;
  const navigate = useNavigate();

  return (
    <div>
      <div>
        {
          cargando
            ?
            <h1>Cargando...</h1>
            :            
            <CardsId results={data} />            
        }
      </div>
      <button onClick={() => navigate(-1)}> Atras</button>
    </div>
  );
}
