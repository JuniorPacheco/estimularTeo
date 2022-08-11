import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useRef, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { formatearCantidad } from '../helpers'
import ProductoCart from './ProductoCart'

const Layout = ({children, pagina}) => {
  const [visibleNavbar, setVisibleNavbar] = useState(false)
  const [visibleCart, setVisibleCart] = useState(false)
  
  const { cart, deleteAllProducts, enviarDatosWhatsApp } = useContext( CartContext )

  const cartStyle = useRef()

  const handleVisibleNavbar = () => {
    setVisibleNavbar(!visibleNavbar)
  }

  const handleVisibleCart = () => {
    setVisibleCart(!visibleCart)
  }

  const handleClickLink = () => {
    setVisibleCart(false)
  }
  return (
    <div>
        <Head>
            <title>EstimularTeo - {pagina}</title>
            <meta name="description" content='Terapeuta ocupacional, materiales didácticos en fisico y descargables, terapia online, tips y recomendaciones'/>
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
        </Head>
        <header className='headerFull'>
            <section className='header'>
                <div className='header__logo'>
                    <div className='logo__image'>
                        <Link href={"/"}>
                            <img src="/logo.png" alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className='header__items'>
                    <nav className={`navbar ${visibleNavbar ? "on" : ""}`}>
                        <Link href={"/"}>
                            <a onClick={handleClickLink}>Inicio</a>
                        </Link>
                        <Link href={"/servicios"}>
                            <a onClick={handleClickLink}>Servicios</a>
                        </Link>
                        <Link href={"/material"}>
                            <a onClick={handleClickLink}>Materiales</a>
                        </Link>
                        <Link href={"/contacto"}>
                            <a onClick={handleClickLink}>Contacto</a>
                        </Link>
                    </nav>
                    <i onClick={handleVisibleCart} className='bx bxs-cart'></i>
                    <i onClick={handleVisibleNavbar} className='bx bx-menu'></i>
                </div>
            </section>
        </header>
        {children}
        <section className={`car ${visibleCart ? "active" : ""}`}>
            <h2>Carrito</h2>

            <section className="car__items">
                {/* <div className="car__vacio">
                   <img src="/carVacio.png" alt="Caja vacia"/>
                   <figcaption>Carrito Vacio</figcaption>
               </div> */}
               {
                cart.map(cartProduct => <ProductoCart key={cartProduct.id} dataProduct={cartProduct}/>)
               }
            </section>
   
            <button onClick={deleteAllProducts} className="car__buttonDeleteAll"><i className='bx bxs-message-square-x'></i> Vaciar Carrito</button>
   
            <div className="car__total">
               <p>Total: <span>{formatearCantidad(cart.reduce((acc, cur) => acc + cur.precio * cur.cantidad, 0))}</span></p>
            </div>
            
            <button onClick={enviarDatosWhatsApp} className='car__buttonPayAll'>Hacer pedido <i className='bx bxl-whatsapp'></i></button>

         </section>
        <footer>
            <p>Siguenos en nuestras redes sociales</p>
            <section className='redesSociales'>
                <a href="https://www.instagram.com/estimularteo/" rel='noreferrer' target={'_blank'}>
                    <i className='bx bxl-instagram' ></i>
                </a>
                <a href="https://www.tiktok.com/@estimularteo1.colombia" rel='noreferrer' target={'_blank'}>
                    <i className='bx bxl-tiktok' ></i>
                </a>
                <a href="https://www.facebook.com/estimularteo-108227358160090" rel='noreferrer' target={'_blank'}>
                    <i className='bx bxl-facebook-circle' ></i>
                </a>
            </section>
            <p>© Todos los derechos reservados</p>
        </footer>

    </div>
  )
}

export default Layout