import React from 'react'
import Layout from '../components/Layout'
import Producto from '../components/Producto'
import descargables from '../data/descargables'

const MaterialesDescargables = () => {
  return (
    <Layout
        pagina={"Materiales"}
    >
        <main className='materiales'>
          <div className='materiales__container'>
            <h1>Materiales Descargables</h1>
            <section className='materiales__products'>
                {
                    descargables.map(product => <Producto key={product.id} productData={product} />)
                }
            </section>
          </div>
        </main>
    </Layout>
  )
}

export default MaterialesDescargables
