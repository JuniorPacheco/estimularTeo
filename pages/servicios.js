import React from 'react'
import Layout from '../components/Layout'

const Servicios = () => {
  return (
    <Layout
        pagina={"servicios"}
    >
        <h1>asdadasdasda</h1>
        <main>
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
                    <p>ÁREAS DE TRABAJO DE LA TERAPIA OCUPACIONAL</p>
                    <section className='servicios__disposicion'>
                        <article className='servicio'>
                            <i className='bx bx-pulse' ></i>
                            <p>Terapia ocupacional – integración sensorial</p>
                        </article>
                        <article className='servicio'>
                            <i className='bx bx-brain' ></i>
                            <p>Terapia ocupacional – neurodesarrollo</p>
                        </article>
                        <article className='servicio'>
                            <i className='bx bxs-baby-carriage' ></i>
                            <p>Terapia ocupacional – estimulación temprana</p>
                        </article>
                        <article className='servicio'>
                            <i className='bx bxs-brain'></i>
                            <p>Terapia ocupacional – neurorehabilitación</p>
                        </article>
                        <article className='servicio'>
                            <i className='bx bxs-school' ></i>
                            <p>Terapia ocupacional – en la escuela</p>
                        </article>
                    </section>
                </div>
            </section>
        </main>
    </Layout>
  )
}

export default Servicios