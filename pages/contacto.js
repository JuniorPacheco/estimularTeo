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
                <input type="email" placeholder='Correo' />
              </label>
              <label>
                <input type="text" placeholder='Asunto' />
              </label>
              <label>
                <textarea placeholder='Comentame tu situación...' cols="30" rows="10"></textarea>
              </label>
              <button type='submit'>Enviar <i className='bx bx-paper-plane' ></i></button>
            </form>

            <h2>O puedes contactarme por whatsapp pulsando en este botón</h2>
            <i className='bx bxl-whatsapp' ></i>
          </div>
        </main>
    </Layout>
  )
}

export default Contacto