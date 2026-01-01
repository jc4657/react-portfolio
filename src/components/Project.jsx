export default function Project(props) {
    return (
        <>
            <div class="project title">
                <h3>{props.title}</h3>
                <p>{props.date}</p>
            </div>

            <div class="project description">
                <p>{props.description}</p>
            </div>
        </>
    )
}