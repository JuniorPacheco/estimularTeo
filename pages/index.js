import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home({handleFiltro}) {
  const router = useRouter()
  const handleClickLinkProducts = e => {
    handleFiltro(e.target.dataset.link)
    router.push('material')
  }
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
              <img src="/imageInicio.png" alt="imagen de nuño con juegos didacticos y enlace para ir a materiales" />
              <div className='bannerGreen__imageProductsSection'>
                <img src="/imageProductsSection.png" alt="imagen de secciones de los materiales a manejar" />
                <div className='bannerGreen__containerButtons'>
                  <button onClick={handleClickLinkProducts} data-link="lenguaje">Lenguaje</button>
                  <button onClick={handleClickLinkProducts} data-link="conceptos_basicos">Conceptos basicos</button>
                  <button onClick={handleClickLinkProducts} data-link="lecto_escritura">Lecto-escritura</button>
                  <button onClick={handleClickLinkProducts} data-link="razonamiento_matematico">Razonmiento matemático</button>
                  <button onClick={handleClickLinkProducts} data-link="habitos_rutinas">Hábitos y rutinas</button>
                  <button onClick={handleClickLinkProducts} data-link="combos">Combos</button>
                </div>
              </div>
            </section>
            <section className='bannerGreen'>
              <img src="/materialesDescargables.png" alt="imagen materiales descargables" />
            </section>
        </section>
      </Layout>
  )
}
