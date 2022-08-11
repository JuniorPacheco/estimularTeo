import { createContext, useEffect, useState } from "react";
import data from '../data'
import descargables from "../data/descargables";
import { formatearCantidad } from "../helpers";

export const CartContext = createContext()

function useStickyState(defaultValue, key) {
    const [value, setValue] = useState(defaultValue);
  
    useEffect(() => {
      const stickyValue = window.localStorage.getItem(key);
  
      if (stickyValue !== null) {
        setValue(JSON.parse(stickyValue));
      }
    }, [key]);
  
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    return [value, setValue];
  }

export const CartProvider = ({children}) => {
    const [cart, setCart] = useStickyState([], 'carritoEstimularTeo')

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
            const totalData = [...data, ...descargables]
            const productToPush = totalData.filter(productData => productData.id === id)
            console.log(productToPush)
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

    function enviarDatosWhatsApp(){
        const numeroWhatsApp = "573223909659";
        const totalCompra = cart.reduce((acc, arr) => acc + arr.cantidad * arr.precio, 0)
        let textoProductos = "";
        cart.forEach(item => {
            textoProductos += 
            `=> *${item.nombre}*%0A Tipo: ${item.entrega}%0A Cantidad: ${item.cantidad}%0A Precio Unidad: ${formatearCantidad(item.precio)}%0A Sub Total: ${formatearCantidad(item.precio * item.cantidad)}%0A%0A`;
        })
        console.log(textoProductos);
        let url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=
        *_Hola Buenos dias/tardes, me interesan estos productos_*%0A%0A${textoProductos}%0A *_TOTAL_*:${totalCompra}`;
        window.open(url);
        setCart([])
    }
    return (
        <CartContext.Provider value={{
            cart,
            addProductToCart,
            deleteProduct,
            plusProduct,
            minusProduct,
            deleteAllProducts,
            enviarDatosWhatsApp
        }}>
            {children}
        </CartContext.Provider>
    )
}