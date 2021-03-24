import React from 'react';
//import PropTypes from 'prop-types';

const Card = ({
  produto,alteraQuantidade,indice
}) => (

  <div className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <img src={produto.url_daimagem} alt="some text" />
        </div>
        <div className="media-content">
          <h4 className="title is-size-5-desktop is-size-6-touch has-text-light">
            {produto.nomedoproduto}
          </h4>
          <p className="subtitle is-size-5-desktop is-size-6-touch has-text-light">
            R$ {produto.preco.toFixed(2)}
          </p>
          {/* inserir caixa de quantidade de produtos*/}
          <input id={indice} type="text"  className="form-control" name="quantidade" aria-describedby="quantidade" value={produto.quantidade} onChange={alteraQuantidade} 
         />
        </div>
      </div>
    </div>
  </div>
);
export default Card;