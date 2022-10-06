import React from 'react'
import './App.css'
import { Product, ProxyProduct } from './proxyExample'
import { CaiTienForm } from './components/form/CaiTienForm'
import { NongDanForm } from './components/form/NongDanForm'
import { ProductList } from './components/products/ProductList'

function App() {
  const product = new Product()
  console.log(product.getPrice())

  const proxyProduct = new ProxyProduct()
  console.log(proxyProduct.getPrice())

  return (
    <div className="App">
      <NongDanForm />
      <CaiTienForm />

      {/* <ProductList /> */}
    </div>
  )
}

export default App
