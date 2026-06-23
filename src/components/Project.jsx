export default function Project(props) {

    const tags = props.tags.map(tag => (
        <button
            key={tag}
            type="button"
            className="tag"
            onClick={() => props.setFilter(tag)}
        >
            {tag}
        </button>
    ))

    return (
        <>
            <div className="project">
                <h3>{props.title}</h3>
                <p>{props.date}</p>
                <p>{props.description}</p>
                <div className="tags">
                    {tags}
                </div>
            </div>
        </>
    )
}