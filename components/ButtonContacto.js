import Link from 'next/link'
import React from 'react'

const ButtonContacto = () => {
  return (
    <div className='button__contacto-container'>
        <Link href={"/contacto"}>
            <button className='button__Contacto'>
                Contáctame <i className='bx bxs-conversation' ></i>
            </button>
        </Link>
    </div>
  )
}

export default ButtonContacto