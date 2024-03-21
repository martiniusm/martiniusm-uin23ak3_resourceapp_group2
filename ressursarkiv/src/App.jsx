import React from 'react'
import Layout from './Components/Layout'
import { Route, Routes } from 'react-router-dom'
import Category from './Components/Category'
export default function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path='/' element={<Category />} />
                </Routes>
            </Layout>
        </>
    )
}
