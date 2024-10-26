import React from 'react'
import logoCofee from '../Images/taza-de-cafe.png'
import iconoInicio from '../Images/casa-icono-silueta.png'
import iconoNosotros from '../Images/sobre-nosotros.png'
import iconoContactanos from '../Images/libreta-de-contactos.png'
import '../Styles/StyleHead.css'

export const ComponentHead = () => {
  return (
    <div className='start'>
        <img src={logoCofee} alt="Logo Coffee" className='eslogan'/>
        <div className='logos'>
            <img src={iconoNosotros} alt="Nosotros Logo" />
            <img src={iconoInicio} alt="Inicio Logo" />
            <img src={iconoContactanos} alt="Contactanos Logo" />
            {/* <li>NOSOTROS</li>
            <li>CONTACTANOS</li> */}    
        </div>
    </div>
  )
}
