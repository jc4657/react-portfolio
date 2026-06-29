export default function Project(props) {

    const tags = props.tags.map(tag => (
        <button
            key={tag}
            type="button"
            className={"tag" + (props.darkMode ? " dark" : " light")}
            onClick={() => props.setFilter(tag)}
        >
            {tag}
        </button>
    ))

    return (
        <>
            <div className={"project" + (props.darkMode ? " dark" : " light")}>
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