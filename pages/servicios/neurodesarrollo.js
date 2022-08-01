import React from 'react'
import Layout from '../../components/Layout'

const NeuroDesarrollo = () => {
  return (
    <Layout
        pagina={'Neurodesarrollo'}
    >
        <main className='entrada'>
            <div className='entrada__container'>
                <section className='cabezera'>
                    <i className='bx bx-brain' ></i>
                    <p>Terapia Ocupacional en el Neurodesarrollo</p>
                </section>
                <section className='principal'>
                    <img src="/neurodesarrollo.jpg" alt="niños en la escuela" />
                    <p>La intervención se enfoca en apoyar al niño que presenta limitación en sus habilidades motoras, como capacidad reducida para moverse, dificultad para hacer cambios de postura, marcha, correr, saltar, dependencia en las actividades de la vida diaria, dificultad para participar en actividades escolares, etc. Esta basada en el análisis detallado de las actividades funcionales, las limitaciones, capacidades y necesidades, utilizando el análisis del movimiento típico para identificar los componentes atípicos.</p>
                    <h2>Beneficios de la intervención de terapia ocupacional desde el enfoque de neurodesarrollo </h2>
                    <p>
                    -Reducir el impacto de las deficiencias, aumentar el nivel de participación y autonomía.<br/><br/>
                    -Enfatizar en actividades funcionales impactando directamente en la higiene, vestido, alimentación, juego y traslado, ya que es importante que el niño lo refuerce diariamente.<br/><br/>
                    -Favorecer control de movimiento, control postural y alineamiento.<br/><br/>
                    -Determinar cambios en el entorno, materiales o instrumentos de uso cotidiano.<br/><br/>
                    -Despertar el interés y la motivación por la participación con reforzamiento verbal, experiencia, ensayo y error.<br/><br/>
                    -Evitar la aparición de un patrón de movimiento no deseado, promoviendo patrones de movimiento adecuados y funcionales.<br/>
                    </p>
                </section>
            </div>
        </main>
    </Layout>
  )
}

export default NeuroDesarrollo