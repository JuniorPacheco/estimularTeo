import React from 'react'

const Producto = ({productData}) => {
    const {id, nombre, descripcion, precio, imagen, etiqueta} = productData
  return (
    <article className='productos__entrada'>
        <div className='productos__entrada-imagen'>
            <img src={imagen} alt="imagen de un producto" />
        </div>
        <h4 className='productos__entrada-nombre'>{nombre}</h4>
        <p className='productos__entrada-descripcion'>{descripcion}</p>
        <p className='productos__entrada-descripcion'>{precio}</p>
        <div className='productos__entrada-edad'>
            <p>{etiqueta}</p>
        </div>
    </article>
  )
}

export default Producto