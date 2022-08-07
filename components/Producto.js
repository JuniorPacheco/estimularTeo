import React from 'react'
import { formatearCantidad } from '../helpers'

const Producto = ({productData}) => {
    const {id, nombre, descripcion, precio, imagen, etiqueta, tipo} = productData
  return (
    <article className='productos__entrada'>
        <div className='productos__entrada-imagen'>
            <img src={imagen} alt="imagen de un producto" />
        </div>
        <h4 className='productos__entrada-nombre'>{nombre}</h4>
        <p className='productos__entrada-descripcion'>{descripcion}</p>
        <p className='productos__entrada-descripcion'>{formatearCantidad(precio)}</p>
        <div className='productos__entrada-edad'>
            <p>{etiqueta}</p>
        </div>
        {
          tipo === "combos" && (
            <div className='productos__entrada-tipo'>
                <p>{tipo}</p>
            </div>
          )
        }
    </article>
  )
}

export default Producto