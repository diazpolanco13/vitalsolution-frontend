import React from 'react'
import Categorias from '../components/landing/Categorias'
import Hero from '../components/landing/Hero'
import Layout from '../components/landing/Layout'
import Productos from '../components/landing/Productos'
// import Sping from '../components/Sping'


const index = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Categorias />
        <Productos />
      </Layout>
    </>
  )
}

export default index
