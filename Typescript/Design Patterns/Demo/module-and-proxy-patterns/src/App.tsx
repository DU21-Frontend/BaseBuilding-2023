import React from 'react'
import './App.css'
import { CaiTienForm } from './components/form/CaiTienForm'
import { NongDanForm } from './components/form/NongDanForm'
import { ProductList } from './components/products/ProductList'

function App() {
  return (
    <div className="App">
      <NongDanForm />
      <CaiTienForm />

      {/* <ProductList /> */}
    </div>
  )
}

export default App
