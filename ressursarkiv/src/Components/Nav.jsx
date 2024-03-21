import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function Nav({ resources, category}) {
    const [active, setActive] = useState();
    return (
        <>
            <ul className='category'>
                {resources.map((element, i) => 
                <li key={i+"cat"}>
                    <Link to={"/" + element.category.toLowerCase().replaceAll(" ", "-")} className={category.toUpperCase() === element.category.toUpperCase() ? "active": null}> 
                        <h2>{element.category}</h2>
                    </Link>
                </li>)}
            </ul>
        </>
    );
}
