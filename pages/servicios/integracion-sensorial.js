import React from 'react'
import Layout from '../../components/Layout'

const IntegracionSensorial = () => {
  return (
    <Layout
        pagina={'Integración Sensorial'}
    >
        <main className='entrada'>
            <div className='entrada__container'>
                <section className='cabezera'>
                    <i className='bx bx-pulse' ></i>
                    <h1>Terapia Ocupacional en la Integración Sensorial</h1>
                </section>
                <section className='principal'>
                    <img src="/integracionSensorial.jpg" alt="niño con riendo con la el cuerpo pintado" />
                    <p>En esta área la intervención está enfocada en evaluar el procesamiento de las sensaciones que tiene el niño de los estímulos que están a su alrededor; que puede asociarse al desarrollo de habilidades motoras y nivel de alerta; determinando si el procesamiento y las respuestas que da el niño a dichas sensaciones están afectando su desempeño y participación en las actividades de la vida diaria y escuela. </p>
                    <h2>Aquí puedes ver algunas señales de alerta</h2>
                    <p>
                    - Inseguridad o angustia ante el movimiento.<br/><br/>
                    - Pobre participación en actividades de motoras gruesas.<br/><br/>
                    - Escritura deficiente o poco clara.<br/><br/>
                    - Dificultad por quedarse quieto o permanecer sentado.<br/><br/>
                    - No se puede vestir, ponerse las medias o zapatos, entre otros.<br/><br/> 
                    - Dificultad en las funciones posturales y oculomotoras.<br/><br/>
                    - Incomodidad ante diferentes texturas de los alimentos, selectivo en su alimentación.<br/><br/> 
                    - Defensividad táctil, no le gusta que lo toquen o abracen.<br/><br/>
                    - Incomodidad ante algunas texturas o etiquetas de la ropa.<br/><br/>
                    - Incomodidad ante texturas de materiales escolares, colbón, tempera, plastilina, entre otros.<br/> 
                    </p>
                </section>
            </div>
        </main>
    </Layout>
  )
}

export default IntegracionSensorial