import Image from 'next/image'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
      <Layout
        pagina="Inicio"
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
            <section className='bannerGreen'>
              <h2>También disponemos de materiales didácticos</h2>
              <h2>Por edades</h2>
              <i className='bx bxs-chevrons-down' ></i>
              <i className='bx bxs-chevrons-down' ></i>
              <i className='bx bxs-chevrons-down' ></i>
              <Link href={'/material'}>
                <div className='inicio__imagenMateriales'>
                  <img src="/imageMateriales.png" alt="imagen de nuño con juegos didacticos y enlace para ir a materiales" />
                </div>
              </Link>
            </section>
        </section>
      </Layout>
  )
}
