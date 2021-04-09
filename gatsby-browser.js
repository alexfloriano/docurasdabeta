import React from 'react';
import ProdutosProvider from './src/context/ProdutosProvider';

export const wrapRootElement = ({ element }) => {
    return (
        <ProdutosProvider>
            {element}
        </ProdutosProvider>
    )
}