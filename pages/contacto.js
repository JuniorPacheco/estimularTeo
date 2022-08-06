import React, { useState } from 'react'
import Layout from '../components/Layout'
import emailjs from '@emailjs/browser'
import Link from 'next/link'

const defaultValueForm = {
  nombre: "",
  asunto: "",
  email: "",
  mensaje: ""
}

const Contacto = () => {
  const [dataForm, setDataForm] = useState({
    nombre: "",
    asunto: "",
    email: "",
    mensaje: ""
  })
 
  const handleChangeForm = e => {
    const copyDataForm = {...dataForm}
    copyDataForm[e.target.name] = e.target.value
    setDataForm(copyDataForm)
  }

  const handleSubmit = e => {
    e.preventDefault()
    emailjs.sendForm('service_igd5qls', 'template_46zxo5j', e.target, 'aI6fpW2vlIig-jgcy')
    .then(res => {
      console.log(res.text)
      setDataForm(defaultValueForm)
    }, err => console.log(err.text))
  }
  return (
    <Layout
        pagina={"Contacto"}
    >
        <main className='contacto'>
          <div className='contacto__container'>
            <form className='contacto__form' onSubmit={handleSubmit}>
              <h1>Contáctame llenando el formulario</h1>
              <label>
                <input required onChange={handleChangeForm} value={dataForm.email} type="email" name='email' placeholder='Correo' />
              </label>
              <label>
                <input required onChange={handleChangeForm} value={dataForm.nombre} type="text" name='nombre' placeholder='Nombre' />
              </label>
              <label>
                <input required onChange={handleChangeForm} value={dataForm.asunto} type="text" name='asunto' placeholder='Asunto' />
              </label>
              <label>
                <textarea required onChange={handleChangeForm} value={dataForm.mensaje} name='mensaje' placeholder='Comentame tu situación...' cols="30" rows="10"></textarea>
              </label>
              <button type='submit'>Enviar <i className='bx bx-paper-plane' ></i></button>
            </form>
            <h2>O puedes contactarme por whatsapp pulsando en este botón</h2>
            <a href="https://wa.me/+573223909659" rel='noreferrer' target={"_blank"}><i className='bx bxl-whatsapp' ></i></a>
          </div>
        </main>
    </Layout>
  )
}

export default Contacto