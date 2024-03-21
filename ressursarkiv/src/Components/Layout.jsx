import React, { useState } from 'react'
import Nav from './Nav'
import { useParams } from 'react-router-dom'

export default function Layout({resources, children, category, setCategory}) {
    
    return (
            <>
            <Nav resources={resources} category={category} />
            {children}
            </>
    )
}
