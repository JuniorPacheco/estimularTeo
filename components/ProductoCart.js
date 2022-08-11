import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { formatearCantidad } from '../helpers'

const ProductoCart = ({dataProduct}) => {
    const {imagen, nombre, precio, cantidad, id} = dataProduct
    const {deleteProduct, plusProduct, minusProduct} = useContext(CartContext)
  return (
    <article className='itemC'>
        <div className='itemC__imagen'>
            <img src={imagen} alt="imagen producto" />
        </div>
        <div className='itemC__info'>
            <p className="itemC__nombre">{nombre}</p>
            <p className="itemC__precio">
                Precio c/u: <span>{formatearCantidad(precio)}</span>
            </p>
            <p className="itemC__subtotal">
                Subtotal: <span>{formatearCantidad(precio * cantidad)}</span>
            </p>
        </div>
        <div className='itemC__actions'>
            <div className='itemC__btnMenos'>
                <i onClick={() => minusProduct(id)} className='bx bxs-minus-circle'></i>
            </div>
            <p className="itemC__cantidad">{cantidad} unidades</p>
            <div className='itemC__btnMas'>
                <i onClick={() => plusProduct(id)} className='bx bxs-plus-circle'></i>
            </div>
        </div>
        <div className='itemC__deleteAll'>
            <i onClick={() => deleteProduct(id)} className='bx bxs-message-square-x'></i>
        </div>
   </article>
  )
}

export default ProductoCart
