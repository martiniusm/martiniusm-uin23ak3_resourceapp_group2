import React, { useState } from 'react'
import Nav from './Nav'
import Category from './Category'
import { resources } from '../assets/ressurser'

export default function Content() {
    const [selectedCategory, setSelectedCategory] = useState(null)

    const handleCategorySelect = (category) => {
        setSelectedCategory(category)
    };

    return (
        
            <>
            <Nav handleCategorySelect={handleCategorySelect} categories={resources.map(resource => resource.category)} />
            <Category selectedCategory={selectedCategory} resources={resources} />
            </>
    )
}
