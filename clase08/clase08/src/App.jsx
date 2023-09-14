import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import CategoryFilterRenderProps from './components/CategoryFilterRenderProps'
import CategoryFilterCompoundComponents from './components/CategoryFilterCompoundComponent'

//const WithCategoryProducts = withCategoryFilterHoc(Products)

function App() {


  return (
    <>
      <Navbar />
      <Home />
      {/* <CategoryFilterRenderProps> */}
      {/* {(selectedCategory) => ( 
          <div>
            <Products selectedCategory={selectedCategory} />
          </div>
        )}*/}
      {/* </CategoryFilterRenderProps> */}

      <CategoryFilterCompoundComponents >
        <Products />

      </CategoryFilterCompoundComponents>
    </>
  )
}

export default App
