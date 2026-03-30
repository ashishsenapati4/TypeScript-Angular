// import { useState } from 'react'
import './App.css'
import { Counter } from './components/Counter'
import './components/product'
import { ProductTemplate } from './components/product'
import type { Pen } from './types'
import { PenList } from './components/PenList'

const menu: Pen[] = [
 {id:1, name:"cello",price: 30},
 {id:2, name:"Mareko",price: 20},
 {id:3, name:"Elkos",price: 30}
]

function App() {

  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <ProductTemplate name='HeadPhone' price={6000}></ProductTemplate>
        <ProductTemplate name="Royal Enfield Meteor" price={182000} isSpecial={true}/>
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <PenList items={menu}/>
      </div>
    </>
  )
}

export default App
