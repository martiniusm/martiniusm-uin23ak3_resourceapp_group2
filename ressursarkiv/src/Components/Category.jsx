export default function Category({ selectedCategory, resources }) {
    return (
      <>
        {selectedCategory && (
          resources
            .filter((resource) => resource.category === selectedCategory)
            .map((resource, i) => (
              <article className="input" key={i}>
                <h2>{resource.category}</h2>
                <p>{resource.text}</p>
                <ul>
                  {resource.sources.map((element, j) => (
                    <li key={j}>
                      <a href={element.url}>{element.title}</a>
                    </li>
                  ))}
                </ul>
              </article>
            ))
        )}
      </>
    );
  }
  