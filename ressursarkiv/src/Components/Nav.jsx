import { resources } from "../assets/ressurser";

export default function Nav(){
    return(
        <>
        <ul>
            {resources.map ((element, i) => <li key={i}><h2>{element.category}</h2></li>)}
        </ul>
        </>
    )
}