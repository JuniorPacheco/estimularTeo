import React from 'react'
import ButtonContacto from '../../components/ButtonContacto'
import Layout from '../../components/Layout'

const EstimulacionTemprana = () => {
  return (
    <Layout
        pagina={'Estimulación temprana'}
    >
        <main className='entrada'>
            <div className='entrada__container'>
                <section className='cabezera'>
                    <i className='bx bxs-baby-carriage' ></i>
                    <h1>Terapia Ocupacional en la estimulación temprana</h1>
                </section>
                <section className='principal'>
                    <img src="/estimulacionTemprana.jpg" alt="niño pequeño con juguete en la boca" />
                    <p>¿Sabías qué? El 60% de los genes humanos están dedicados al desarrollo del cerebro, y la mayoría de las neuronas se generan  durante la semana 12 a 20 del periodo prenatal” (Bergen &Woodin, 2011, pp. 15) 
                    Para hablar de la importancia de la estimulación temprana, es importante reconocer, que las experiencias tempranas sirven como bloques de construcción para el aprendizaje posterior y sientan las bases para el pensamiento crítico, la integración, el pensamiento abstracto dentro de los marcadores de desarrollo.</p>
                    <h2>Beneficios de la estimulación temprana -  0 a 3 años de edad</h2>
                    <p>
                    - Impacto del procesamiento sensorial en el Desarrollo motor, reflejos y control postural.<br/><br/>
                    - Interacción con el ambiente físico: manipulación, exploración, etc.<br/><br/>
                    - Favorece el desarrollo de los bebes y niños pequeños con retrasos del desarrollo o discapacidad.<br/><br/>
                    - Apoya a las familias durante los primeros años críticos, ya que los padres son parte de la Intervenciónco, la integración, el pensamiento abstracto dentro de los marcadores de desarrollo.<br/>
                    </p>
                </section>
                <ButtonContacto />
            </div>
        </main>
    </Layout>
  )
}

export default EstimulacionTemprana