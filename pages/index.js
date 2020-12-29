import React from 'react'
import Categorias from '../components/landing/Categorias'
import Hero from '../components/landing/Hero'
import Layout from '../components/landing/Layout'
import Productos from '../components/landing/Productos'
import Testimonios from '../components/landing/Testimonios'
// import Sping from '../components/Sping'


const index = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Categorias />
        <Productos />
        <Testimonios />
      </Layout>
    </>
  )
}

export default index
