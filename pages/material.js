import React from 'react'
import Layout from '../components/Layout'
import Producto from '../components/Producto'
import data from '../data'

const Material = () => {
  console.log(data)
  return (
    <Layout
        pagina={"Materiales"}
    >
        <main className='materiales'>
          <div className='materiales__container'>
            <h1>Materiales</h1>
            <section className='materiales__products'>
                {
                    data.map(product => <Producto key={product.id} productData={product} />)
                }
            </section>
          </div>
        </main>
    </Layout>
  )
}

export default Material