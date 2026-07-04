import ProjectCard from "./ProjectCard"
import projectsData from "../projectsData"
import { useState } from "react"

export default function Projects({ darkMode }) {

    const [filter, setFilter] = useState("All")

    const filteredProjectData = filter === "All"
        ? projectsData
        : projectsData.filter(project => project.tags.includes(filter))

    const projects = filteredProjectData.map(project => (
        <ProjectCard
            key={project.id}
            date={project.date}
            description={project.description}
            title={project.title}
            tags={project.tags}
            setFilter={setFilter}
            darkMode={darkMode}
        />
    ))

    const uniqueFilters = ["All", ...new Set(projectsData.map(project => project.tags).flat())]
    const filterButtons = uniqueFilters.map(filterOption => (
        <button
            key={filterOption}
            onClick={() => setFilter(filterOption)}
            className={(filter === filterOption ? "active " : "") + (darkMode ? "dark" : "light")}
        >
            {filterOption}
        </button>
    ))

    return (
        <div className={ "projects" + (darkMode ? " dark" : " light") }>
            <h1>Projects</h1>
            <div className="filter-buttons">
                {filterButtons}
            </div>
            <div className="project-cards">
                {projects.toReversed()}
            </div>
        </div>
    )
}