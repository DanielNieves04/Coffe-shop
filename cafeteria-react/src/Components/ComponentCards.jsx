import React, { useState } from 'react';
import cooffeshop from '../Images/coffee-shop.jpg';
import '../Styles/StyleCards.css';

export const ComponentCards = () => {
  const [selected, setSelected] = useState('producto');

  const handleProductoClick = () => {
    setSelected('producto');
  };

  const handleInformacionClick = () => {
    setSelected('informacion');
  };

  return (
    <div className='cards'>
      <div className={`card ${selected === 'informacion' ? 'flipped' : ''}`}>
        <div className='card-inner'>
          <div className='card-front'>
            <div className='card-head'>
              <ul>
                <button
                  className={`card-head-producto ${selected === 'producto' ? 'active' : ''}`}
                  onClick={handleProductoClick}
                >
                  Producto
                </button>
                <button
                  className={`card-head-informacion ${selected === 'informacion' ? 'active' : ''}`}
                  onClick={handleInformacionClick}
                >
                  Información
                </button>
              </ul>
            </div>
            <img src={cooffeshop} className="card-img" alt="Coffee Shop" />
            <div className='card-body'>
              <h5>Titulo</h5>
              <button>Pedir</button>
            </div>
          </div>
          <div className='card-back'>
            <div className='card-head'>
              <ul>
                <button
                  className={`card-head-producto ${selected === 'producto' ? 'active' : ''}`}
                  onClick={handleProductoClick}
                >
                  Producto
                </button>
                <button
                  className={`card-head-informacion ${selected === 'informacion' ? 'active' : ''}`}
                  onClick={handleInformacionClick}
                >
                  Información
                </button>
              </ul>
            </div>
            <p className='card-parrafo'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper porttitor, eget nisi
              habitant porta suscipit diam donec facilisis, pellentesque at magna condimentum fusce
              imperdiet augue in. Inceptos ridiculus mi aenean dignissim hendrerit in, aptent tellus
              platea cursus porta laoreet volutpat.
            </p>
            <div className='card-body'>
              <h5>Titulo</h5>
              <button>Pedir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
