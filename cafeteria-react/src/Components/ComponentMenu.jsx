import React, {useState} from 'react'
import '../Styles/StyleMenu.css'

export const ComponentMenu = () => {

  const [selected, setSelected] = useState('bebidaCaliente');

  const handleBedidaCalienteClick = () => {
    setSelected('bebidaCaliente');
  };

  const handlePostreClick = () => {
    setSelected('postre');
  };

  const handleComplementoClick = () => {
    setSelected('complemento');
  };

  const handleBebidaFriaClick = () => {
    setSelected('bebidaFria');
  };

  return (
    <div className='menu'>
        <ul>
            <li
              className= {`menu-bebida-caliente ${selected == 'bebidaCaliente' ? 'active' : ''}`}
              onClick={handleBedidaCalienteClick}
            >BEBIDAS CALIENTES</li>
            <li
              className= {`menu-postre ${selected == 'postre' ? 'active' : ''}`}
              onClick={handlePostreClick}
            >POSTRES</li>
            <li
              className= {`menu-complemento ${selected == 'complemento' ? 'active' : ''}`}
              onClick={handleComplementoClick}
            >COMPLEMENTOS</li>
            <li
              className= {`menu-bebida-fria ${selected == 'bebidaFria' ? 'active' : ''}`}
              onClick={handleBebidaFriaClick}
            >BEBIDAS FRÍAS</li>
        </ul>
    </div>
  )
}
