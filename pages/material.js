import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Producto from '../components/Producto'
import data from '../data'

const Material = () => {
  const [dataRender, setDataRender] = useState([])
  useEffect(() => {
    setDataRender(data)
  }, [])

  const handleFiltro = e => {
    console.log(e.target.value)
    const newData = data.filter(product => {
      if(!e.target.value) {
        return true
      } else {
        if(product.tipo === e.target.value) {
          return true
        }
        return false
      }
    })
    setDataRender(newData)
  }
  return (
    <Layout
        pagina={"Materiales"}
    >
        <main className='materiales'>
          <div className='materiales__container'>
            <h1>Materiales</h1>
            <section className='materiales__filtros'>
              <p>Filtro</p>
              <select onChange={handleFiltro}>
                <option value="">Todos los productos</option>
                <option value="normal">Normales</option>
                <option value="combo">Combos</option>
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