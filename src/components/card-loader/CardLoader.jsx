import React from 'react';

import './CardLoader.scss';

function CardLoader() {
  return (
    <div className="card-loader">
      <div className="message">
        <i className="fas fa-spinner fa-spin" />
        Cargando
      </div>
    </div>
  );
}

export default CardLoader;
