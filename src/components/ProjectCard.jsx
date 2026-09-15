import RedirectIcon from "../assets/redirect.svg?react"

export default function ProjectCard(props) {

    const tags = props.tags.map(tag => (
        <button
            key={tag}
            type="button"
            className={props.darkMode ? "dark" : "light"}
            onClick={() => props.setFilter(tag)}
        >
            {tag}
        </button>
    ));

    return (
        <>
            <div className={"project" + (props.darkMode ? " dark" : " light")}>
                <div className="project-card-header">
                    <h3>{props.title}</h3>
                    <a href={props.link} target="_blank">
                        <RedirectIcon className="icon" />
                    </a>
                    
                </div>
                <p>
                    {((props["start-date"].getYear() === props["end-date"].getYear()) && (props["start-date"].getMonth() !== props["end-date"].getMonth())
                        ? props["start-date"].toLocaleDateString("en-US", {
                            month: "long",
                        })
                        : props["start-date"].toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric"
                        })
                    ) + ((props["start-date"].getTime() === props["end-date"].getTime())
                        ? ""
                        : " to " + props["end-date"].toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric"
                        })
                        )}
                </p>
                <p>{props.description}</p>
                <div className="filter-buttons">
                    {tags}
                </div>
            </div>
        </>
    )
}