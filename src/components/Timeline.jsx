import Project from "./Project"
import projectsData from "../projectsData"

export default function Timeline() {

    const projects = projectsData.map(project => <Project date={project.date} description={project.description} title={project.title}/>)

    return (
        <div class="timeline">
            {projects}
        </div>
    )
}