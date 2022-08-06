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
              <img src="/imageHeader.png" alt="imagen personal" />
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
            </section>
          </div>
            <section className='bannerGreen'>
              <Link href={'/material'}>
                  <img src="/imageInicio.png" alt="imagen de nuño con juegos didacticos y enlace para ir a materiales" />
              </Link>
              <div className='bannerGreen__imageProductsSection'>
                <img src="/images/Imageproductssection.png" alt="imagen de secciones de los materiales a manejar" />
                <div className='bannerGreen__containerButtons'>
                  <button>Lenguaje</button>
                  <button>Conceptos basicos</button>
                  <button>Lecto-escritura</button>
                  <button>Razonmiento matemático</button>
                  <button>Hábitos y rutinas</button>
                  <button>Combos</button>
                </div>
              </div>
            </section>
        </section>
      </Layout>
  )
}
