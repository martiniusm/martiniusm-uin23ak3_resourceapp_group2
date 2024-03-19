import { resources } from "../assets/ressurser";

export default function Nav(){
    return(
        <>
        <ul>
            {resources.map ((item, i) => <li key={i}><h2>{item.category}</h2></li>)}
        </ul>
        </>
    )
}