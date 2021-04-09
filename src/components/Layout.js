import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ProdutosProvider from "../context/ProdutosProvider";


import Header from 'components/Header';
import 'styles/index.scss';

const Layout = ({ children, produtos }) => {
  console.log("Layout", produtos)
  return (

    <BrowserRouter>
      <ProdutosProvider>
        <Header produtos={produtos} />
        <div className="container">
          {children}
        </div>
      </ProdutosProvider>
    </BrowserRouter>

  )
}

export default Layout;
