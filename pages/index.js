import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [cart, setCart] = useState('')
  const [visibleCart, setVisibleCart] = useState(false)
  const handleVisibleCart = () => {
    setVisibleCart(!visibleCart)
  }

  const handleClickLink = () => {
    setVisibleCart(false)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>EstimularTeo</title>
        <meta name="description" content="Terapeuta ocupacional, materiales didácticos en fisico y descargables, terapia online, tips y recomendaciones" />
        <link rel="icon" href="/logo.png" />
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
      </Head>
      <header className='headerFull'>
        <section className='header'>
          <div className='header__logo'>
            <div className='logo__image'>
              <img src="/logoCompleto.png" alt="logo" />
            </div>
          </div>
          <div className='header__items'>
            <nav className={`navbar ${visibleCart ? "on" : ""}`}>
              <a onClick={handleClickLink} href="#">Inicio</a>
              <a onClick={handleClickLink} href="#">Servicios</a>
              <a onClick={handleClickLink} href="#">Material</a>
              <a onClick={handleClickLink} href="#">Contacto</a>
            </nav>
            <i className='bx bxs-cart'></i>
            <i onClick={handleVisibleCart} className='bx bx-menu'></i>
          </div>
        </section>
      </header>
      <section className='inicio'>
        <div className='inicio__imagen--container maxWidth'>
          <div className='inicio__imagen'>
            <img src="https://images.unsplash.com/photo-1545803928-04e3f4cdd4ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="imagen personal" />
          </div>
          <section className='inicio__profesion'>
            <p>Terapeuta Ocupacional y Creadora de EstimularTeo</p>
            <p>Certificación en integración sensorial</p>
            <h1>Andrea Bohorquez</h1>
          </section>
        </div>
        <p className='inicio__textoPrincipal'>
        It is a long established fact that a reader will be distracted by the readable content of a page when 
        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
        of letters, as opposed to using Content here, content here, making it look like readable English. 
        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
        and a search for lorem ipsum will uncover many web sites still in their infancy. 
        </p>
      </section>
      <section className='servicios'>
        <div className='servicios__container'>
          <h2>Servicios</h2>
          <div className='points'>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
            <div className="point"></div>
          </div>
          <article className='servicio'>
            <i className='bx bxs-book-reader'></i>
            <p>Materiales didácticos en fisico y descargables</p>
          </article>
          <article className='servicio'>
            <i className='bx bx-laptop'></i>
            <p>Terapia Online</p>
          </article>
          <article className='servicio'>
            <i className='bx bxs-select-multiple' ></i>
            <p>Tips y Recomendaciones</p>
          </article>
          <article className='servicio'>
            <i className='bx bxs-calendar-check'></i>
            <p>Citas Programables</p>
          </article>

        </div>
      </section>
      <main>
        {/* <Image layout="responsive" width={500} height={700} src={"/colors2.jpeg"} alt="Prueba"/> */}
      </main>
    </div>
  )
}
