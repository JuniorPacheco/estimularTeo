import React from 'react'
import Layout from '../components/Layout'

const Contacto = () => {
  return (
    <Layout
        pagina={"Contacto"}
    >
        <main className='contacto'>
          <div className='contacto__container'>
            <form className='contacto__form'>
              <h1>Contáctame llenando el formulario</h1>
              <label>
                <input type="email" />
              </label>
              <label>
                <input type="text" placeholder='Asunto' />
              </label>
              <label>
                <textarea placeholder='Comentame tu situación' cols="30" rows="10"></textarea>
              </label>
            </form>
          </div>
        </main>
    </Layout>
  )
}

export default Contacto