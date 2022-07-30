import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'

const Layout = ({children, pagina}) => {
  const [cart, setCart] = useState('')
  const [visibleCart, setVisibleCart] = useState(false)
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
                    <nav className={`navbar ${visibleCart ? "on" : ""}`}>
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
                    <i className='bx bxs-cart'></i>
                    <i onClick={handleVisibleCart} className='bx bx-menu'></i>
                </div>
            </section>
        </header>
        {children}
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