import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Producto from '../components/Producto'

const Material = ({filter, dataRender, handleFiltro}) => {
  return (
    <Layout
        pagina={"Materiales"}
    >
        <main className='materiales'>
          <div className='materiales__container'>
            <h1>Materiales</h1>
            <section className='materiales__filtros'>
              <p>Filtro</p>
              <select value={filter} onChange={e => handleFiltro(e.target.value)}>
                <option value="">Todos los productos</option>
                <option value="lenguaje">Lenguaje</option>
                <option value="conceptos_basicos">Conceptos Basicos</option>
                <option value="lecto_escritura">Lecto-escritura</option>
                <option value="razonamiento_matematico">Razonamiento matemático</option>
                <option value="habitos_rutinas">Hábitos y rutinas</option>
                <option value="combos">Combos</option>
              </select>
            </section>
            <section className='materiales__products'>
                {
                    dataRender.map(product => <Producto key={product.id} productData={product} />)
                }
            </section>
          </div>
        </main>
    </Layout>
  )
}

export default Material