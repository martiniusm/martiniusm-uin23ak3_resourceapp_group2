import { resources } from "../assets/ressurser"
export default function Category(){

    return(
        <>
        {resources.map((resource, i) => 
        <article key={i}>
            <h2>{resource.category}</h2>
            <p>{resource.text}</p>
            <ul>
                {resource.sources.map((element, i) => <li key={i}><a href={element.url}>{element.title}</a></li>)}
            </ul>
        </article>
            )}
        </>
    )
}