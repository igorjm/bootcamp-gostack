import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="" alt="Tenis" />
        <strong>Tenis muito legal</strong>
        <span>R$</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="FFF"/>
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
