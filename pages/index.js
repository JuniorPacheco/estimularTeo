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
              <img src="/logo.png" alt="logo" />
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
            <p>Soy Terapeuta Ocupacional y alcanzar el máximo nivel de autonomía, funcionalidad y 
              participación en las actividades de la vida diaria de una persona en las diferentes 
              etapas de la vida es mi trabajo.</p>
            <h1>Andrea Bohorquez</h1>
          </section>
        </div>
        <h2>¿Qué hace un terapeuta ocupacional en la escuela?</h2>
        <p className='inicio__textoPrincipal'>
        El rol ocupacional del niño centra sus actividades en la escuela, es por esto que un 
        terapeuta ocupacional en dicho entorno es un profesional que puede apoyar las adaptaciones 
        razonables del currículo que el profesor del aula realiza a través del PIAR, para aquellos 
        niños que lo requieran, de modo que, además de asistir a la clase, también alcancen su máximo 
        nivel de participación, inclusión y rendimiento en las actividades del aula. 
        El terapeuta ocupacional será una parte vital del equipo que trabaja con los niños que tienen 
        necesidades educativas especiales y requieren apoyo adicional para lograr mejores resultados 
        en la escuela, ya que se encargará de identificar la base de las dificultades de cada 
        niño a nivel de neurodesarrollo y desarrollo sensoriomotor determinando el impacto en lo 
        relacionado con el movimiento, la postura, la comunicación y el aprendizaje, corrigiendo y 
        previniendo la aparición de mayores dificultades que puedan generarse; lo hará través de observaciones 
        y razonamientos clínicos; proporcionando recomendaciones al profesor encargado para que pueda aplicarlas 
        en el aula.
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
