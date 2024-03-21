import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Category({ resources, category, setCategory}) {
  const {id} = useParams()
  useEffect(()=>{setCategory(id.toUpperCase())})

    return (
      <>
        {resources.filter(resource => resource.category.toUpperCase().replaceAll(" ", "-") === id.toUpperCase()).map((resource, i) => 
        <article key={i} className="input">
            <h2>{resource.category}</h2>
            <p>{resource.text}</p>
            <ul>
                {resource.sources.map((element, i) => <li key={i}><a href={element.url}>{element.title}</a></li>)}
            </ul>
        </article>
            )
        }
      </>
    );
  }
  