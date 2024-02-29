import { resources } from "../assets/ressurser"
import Content from './Content'
import Nav from './Nav'
export default function Category(){

    return(
        <>
        {resources.map(resource =>
            <Content category={resource.category} text={resource.text} sources={resource.sources}/>
            )}
        {resources.map(category =>
            <Nav category={category.category}/>
            )}
        </>
    )
}