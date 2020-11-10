import React from 'react';
//import PropTypes from 'prop-types';

const Card = ({
  produto
}) => (

    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            {produto.url_daimagem}
          </div>
          <div className="media-content">
            <h4 className="title is-size-5-desktop is-size-6-touch has-text-light">
              {produto.nomedoproduto}
            </h4>
            <p className="subtitle is-size-5-desktop is-size-6-touch has-text-light">
              {produto.preco}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
export default Card;