import React from 'react'

export default function Nav({ handleCategorySelect, categories }) {
    return (
        <ul>
            {categories.map((category, i) => (
                <li key={i} onClick={() => handleCategorySelect(category)}>
                    <h2>{category}</h2>
                </li>
            ))}
        </ul>
    );
}
