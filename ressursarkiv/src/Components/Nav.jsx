import React from 'react'
import { useState } from 'react';

export default function Nav({ handleCategorySelect, categories }) {
    const [active, setActive] = useState(null);

    const handleActive = (category) => {
        setActive(category);
    }

    return (
        <ul className='category'>
            {categories.map((category, i) => (
                <li key={i} onClick={() => { handleCategorySelect(category); handleActive(category); }} className={active === category ? "active" : null}>
                    <h2>{category}</h2>
                </li>
            ))}
        </ul>
    );
}
