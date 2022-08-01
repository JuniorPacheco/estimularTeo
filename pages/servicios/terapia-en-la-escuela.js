import React from 'react'
import Layout from '../../components/Layout'

const TerapiaEnLaEscuela = () => {
  return (
    <Layout
        pagina={'Terapia en la escuela'}
    >
        <main className='entrada'>
            <div className='entrada__container'>
                <section className='cabezera'>
                    <i className='bx bxs-school' ></i>
                    <h1>Terapia Ocupacional en la escuela</h1>
                </section>
                <section className='principal'>
                    <img src="/escuela.jpg" alt="niños en la escuela" />
                    <p>El rol ocupacional del niño centra sus actividades en la escuela, es por esto que un terapeuta ocupacional en dicho entorno es un profesional que puede apoyar las adaptaciones razonables del currículo que el profesor del aula realiza a través del PIAR, para aquellos niños con necesidades educativas especiales que requieran apoyo en su movilidad, adaptaciones al entorno o a los materiales de trabajo; de modo que el niño alcance su máximo nivel de participación, inclusión y rendimiento en las actividades del aula. </p>
                    <h2>Tareas del Terapeuta ocupacional en la escuela</h2>
                    <p>
                    - Evaluar para identificar las bases de las dificultades a nivel de neuro desarrollo, sensoriomotor y cognitivo.<br/><br/>
                    - Identificar las dificultades en movilidad, postura y aprendizaje.<br/><br/>
                    - Recomendaciones para el docente de aula y padres de familia.<br/><br/>
                    - Evaluar las condiciones del entorno, sugiriendo modificaciones o distribución de los espacios.<br/><br/>
                    - Prevenir la aparición de nuevas dificultades y falta de participación.<br/><br/>
                    </p>
                </section>
            </div>
        </main>
    </Layout>
  )
}

export default TerapiaEnLaEscuela