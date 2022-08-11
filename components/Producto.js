import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { formatearCantidad } from '../helpers'

const Producto = ({productData}) => {
    const {addProductToCart} = useContext(CartContext)
    const {id, nombre, descripcion, precio, imagen, etiqueta, tipo} = productData
  return (
    <article className='productos__entrada'>
        <div className={`productos__entrada-imagen ${typeof imagen !== "string" ? "Animacion__imagen" : ""}`}>
          {
            typeof imagen !== "string" ? (
              imagen.map((product_iamge, index) => <img key={index} src={product_iamge} alt="imagen de un producto" />)
            ) : (
              <img src={imagen} alt="imagen de un producto" />
            )
          }
        </div>
        <h4 className='productos__entrada-nombre'>{nombre}</h4>
        <p className='productos__entrada-descripcion'>{descripcion}</p>
        <p className='productos__entrada-descripcion'>{formatearCantidad(precio)}</p>
        <button className='productos_entrada-carrito' onClick={() => addProductToCart(id)}>Agregar al <i className='bx bxs-cart'></i></button>
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