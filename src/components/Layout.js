import React from 'react';
import Header from 'components/Header';
import 'styles/index.scss';

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <div className="container">
        {children}
      </div>
    </>
  )
}

export default Layout;
