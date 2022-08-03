import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'

const Servicios = () => {
  return (
    <Layout
        pagina={"Servicios"}
    >
        <main className='servicios'>
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
                    <Link href={'/servicios/integracion-sensorial'}>
                        <article className='servicio'>
                            <i className='bx bx-pulse' ></i>
                            <p>Terapia ocupacional – integración sensorial</p>
                        </article>
                    </Link>
                    <Link href={'/servicios/neurodesarrollo'}>
                        <article className='servicio'>
                            <i className='bx bx-brain' ></i>
                            <p>Terapia ocupacional – neurodesarrollo</p>
                        </article>
                    </Link>
                    <Link href={'/servicios/estimulacion-temprana'}>
                        <article className='servicio'>
                            <i className='bx bxs-baby-carriage' ></i>
                            <p>Terapia ocupacional – estimulación temprana</p>
                        </article>
                    </Link>
                    <Link href={'/servicios/neurorehabilitacion'}>
                        <article className='servicio'>
                            <i className='bx bxs-brain'></i>
                            <p>Terapia ocupacional – neurorehabilitación</p>
                        </article>
                    </Link>
                    <Link href={'/servicios/terapia-en-la-escuela'}>
                        <article className='servicio'>
                            <i className='bx bxs-school' ></i>
                            <p>Terapia ocupacional – en la escuela</p>
                        </article>
                    </Link>
                </section>
            </div>
        </main>
    </Layout>
  )
}

export default Servicios