import React from 'react'
import Layout from '../../components/Layout'

const Neurorehabilitacion = () => {
  return (
    <Layout
        pagina={'Neurorehabilitación'}
    >
        <main className='entrada'>
            <div className='entrada__container'>
                <section className='cabezera'>
                    <i className='bx bxs-brain'></i>
                    <h1>Terapia Ocupacional en la Neurorehabilitación</h1>
                </section>
                <section className='principal imagenNeurorehabilitacion'>
                    <img src="/neurorehabilitacion.jpg" alt="Personas adultas sonriendo" />
                    <p>La disfunción física es una condición resultado de una serie de consecuencias que se producen por diferentes traumas y/o enfermedades como enfermedad cerebro vascular, síndrome de sobre uso, trauma raquimedular, o en cualquier parte del cuerpo, Parkinson, amputación, entre otros. Todas estas influyen en la persona produciendo disfunción física; viendo  disminuidas sus capacidades físicas para llevar a cabo las diferentes actividades, ocupaciones y rutinas de su vida. </p>
                    <h2>Beneficios Terapia Ocupacional en neuro- rehabilitacion</h2>
                    <p>
                    -Favorecer la motivación y los intereses de las personas después de la pérdida ocupacional.<br/><br/>
                    -Potenciar las capacidades y destrezas necesarias para un desempeño ocupacional lo mas autónomo y funcional posible.<br/><br/>
                    -Favorecer el desarrollo de habilidades sociales y habilidades emocionales (autoconocimiento, autocontrol, automotivación, empatía) que permitan a la persona asumir un rol activo en la relación con los demás.<br/><br/>
                    -Habilitar en el uso de los productos de apoyo necesarios. <br/><br/>
                    -Escuchar, informar y asesorar a la familia del estado general del familiar, de pautas de manejo ante determinadas circunstancias y de los productos de apoyo y de las adaptaciones necesarias, haciéndoles partícipes del proceso de tratamiento.<br/>
                    </p>
                </section>
            </div>
        </main>
    </Layout>
  )
}

export default Neurorehabilitacion