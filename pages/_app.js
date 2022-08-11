import { useEffect, useState } from 'react'
import '../styles/globals.css'
import data from '../data'
import { CartProvider } from '../context/CartContext'

function MyApp({ Component, pageProps }) {
  const [filter, setFilter] = useState('')
  const [dataRender, setDataRender] = useState([])

  const handleFiltro = filterCategorie => {
    setFilter(filterCategorie)
    const newData = data.filter(product => {
      if(!filterCategorie) {
        return true
      } else {
        if(product.tipo === filterCategorie) {
          return true
        }
        return false
      }
    })
    setDataRender(newData)
  }

  useEffect(() => {
    setDataRender(data)
  }, [])

  return (
    <CartProvider>
      <Component {...pageProps} 
        filter={filter}
        setFilter={setFilter}
        dataRender={dataRender}
        handleFiltro={handleFiltro}
      />
    </CartProvider>
  )
}

export default MyApp
