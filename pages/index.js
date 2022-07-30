import Image from 'next/image'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
      <Layout
        pagina="inicio"
      >
        <section className='inicio'>
          <div className='inicio__imagen--container maxWidth'>
            <div className='inicio__imagen'>
              <img src="https://images.unsplash.com/photo-1545803928-04e3f4cdd4ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="imagen personal" />
            </div>
            <section className='inicio__profesion'>
              <p>Soy Terapeuta Ocupacional y alcanzar el máximo nivel de autonomía, funcionalidad y 
                participación en las actividades de la vida diaria de una persona en las diferentes 
                etapas de la vida es mi trabajo.
              </p>
              <p>¿Quieres saber si necesitas una valoración por Terapia Ocupacional?, 
                conoce las áreas en las que trabajo aquí</p>
              <div className='inicio__vermas'>
                <Link href={"/servicios"}>
                  <div>
                    <p>Ver más</p>
                    <i className='bx bx-chevrons-down'></i>
                  </div>
                </Link>
              </div>
              <h1>Andrea Bohorquez Navarro</h1>
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
        <main>
          {/* <Image layout="responsive" width={500} height={700} src={"/colors2.jpeg"} alt="Prueba"/> */}
        </main>
      </Layout>
  )
}
