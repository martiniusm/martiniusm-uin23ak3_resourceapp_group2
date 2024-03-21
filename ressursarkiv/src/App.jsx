import './Style/main.scss'
import React, { useState } from 'react'
import Layout from './Components/Layout'
import { Route, Routes } from 'react-router-dom'
import { resources } from './assets/ressurser'
import Category from './Components/Category'
import Home from './Components/Home'

function App() {
    const [category, setCategory] = useState("HTML")
    return (
        <>
        <Layout resources={resources} category={category} setCategory={setCategory}>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/:id' element={<Category resources={resources} category={category} setCategory={setCategory}/>} />
            </Routes>
        </Layout>
        </>
    )
}

export default App
