import { createContext, useState } from "react";
import data from '../data'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

      const addProductToCart = id => {
        let comprobation = false
        const newCart = cart.map(productCart => {
            if(productCart.id === id) {
                productCart.cantidad = productCart.cantidad + 1
                comprobation = true
                return productCart
            }else {
                return productCart
            }
        })
        if(!comprobation){
            const productToPush = data.filter(productData => productData.id === id)
            productToPush[0].cantidad = 1
            if(typeof productToPush[0].imagen !== "string") {
                productToPush[0].imagen = productToPush[0].imagen[0]
            }
            newCart.push(productToPush[0])
        }
        setCart(newCart)
    }

    const deleteProduct = id => {
        const newCart = cart.filter(cartProduct => cartProduct.id !== id)
        setCart(newCart)
    }

    const plusProduct = id => {
        const newCart = cart.map(cartProduct => {
            if(cartProduct.id === id) {
                cartProduct.cantidad = cartProduct.cantidad + 1
                return cartProduct
            }
            return cartProduct
        })
        setCart(newCart)
    }

    const minusProduct = id => {
        const newCart = cart.map(productCart => {
            if(productCart.id === id) {
                if(productCart.cantidad === 1){
                    return undefined
                }else {
                    productCart.cantidad = productCart.cantidad - 1
                }
            }
            return productCart
        })
        const filteredNewCart = newCart.filter(cartProduct => cartProduct !== undefined)
        setCart(filteredNewCart)
    }

    const deleteAllProducts = () => {
        setCart([])
    }
    return (
        <CartContext.Provider value={{
            cart,
            addProductToCart,
            deleteProduct,
            plusProduct,
            minusProduct,
            deleteAllProducts
        }}>
            {children}
        </CartContext.Provider>
    )
}