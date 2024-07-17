// src/components/MyComponent.jsx

import React from 'react';
import _ from 'lodash';
import { useQuery } from '@tanstack/react-query';

import myFunc, { anotherFunc } from '@/utils/myUtils';

import './MyComponent.css'; // Importação absoluta desnecessária
import NonExistentModule from 'non-existent-module'; // Mód
ulo inexistente

const MyComponent = () => {
  // Variável não utilizada

  const unusedVar = 'I am not used';


  const { data } = useQuery('myQuery', async () => {
    const response = await fetch('/api/data');
    return response.json();
  });

  // Desestruturação de resposta de fetch não permitida
  
  const { id, name } = data;

  return (
    <div>
      {/* Caracteres não escapados */}
      <h1>It's my component!</h1>
      {/* Espalhamento de props */}
      <SomeComponent {...data} />
    </div>
  );
};

// Exportação padrão preferida pelo Airbnb
export default MyComponent;
