import React from 'react'
import Layout from './Components/Layout'
import { Route, Routes } from 'react-router-dom'
export default function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path='/:CatId' element={<Layout />} />
                </Routes>
            </Layout>
        </>
    )
}
