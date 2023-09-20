import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import CategoryFilterRenderProps from './components/CategoryFilterRenderProps'
import CategoryFilterCompoundComponents from './components/CategoryFilterCompoundComponent'
import ProductsFiltered from './components/ProductsFiltered'
import products from './mocks/products.json';
import ItemList from './components/ItemList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFoundComponent from './components/NotFoundComponent'
import Categories from './components/Categories'
/**
 * Browser Router -> envuelve toda la aplicacion hasta el navbar inclusive
 * Routes-> es mi componente que envuelve la lista de rutas
 * Route -> es mi componente de ruta
 */
//const WithCategoryProducts = withCategoryFilterHoc(Products)

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/category" element={<CategoryFilterRenderProps>
            {(selectedCategory) => (
              <div>
                <Products selectedCategory={selectedCategory} />
              </div>
            )}
          </CategoryFilterRenderProps>} />
          <Route exact path="category/:categoryId" element={<Categories />} />
          <Route exact path='/products' element={<ItemList products={products} />} />
          <Route exact path="*" element={<NotFoundComponent />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
