import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from './Layout';
import { Pokemons } from './components/Pokemons';
import { PokemonsDetails } from './components/PokemonsDetails';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Pokemons />} ></Route>
        <Route path="pokemonsDetails/:pokemonId" element={<PokemonsDetails />} ></Route>
        <Route path="*" element={<Navigate replace to="/" />} ></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

