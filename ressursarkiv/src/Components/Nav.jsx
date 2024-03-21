import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Nav({ handleCategorySelect, categories }) {
    const {catId} = useParams()

    const [active, setActive] = useState(null);

    const handleActive = (category) => {
        setActive(category);
    }

    return (
        <ul className='category'>
            {categories.map((category, i) => (
                <li key={i} onClick={() => { handleCategorySelect(category); handleActive(category); }} className={active === category ? "active" : null}>
                    <Link to={"/"+category.replaceAll(" ", "-")} className={active === category? "active": null}>
                        <h2>{category}</h2>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
