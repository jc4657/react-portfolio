import Project from "./Project"
import projectsData from "../projectsData"
import { useState } from "react"

export default function Timeline({ darkMode }) {

    const [filter, setFilter] = useState("All")

    const filteredProjectData = filter === "All"
        ? projectsData
        : projectsData.filter(project => project.tags.includes(filter))

    const projects = filteredProjectData.map(project => (
        <Project
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
        <>
            <h1>Projects</h1>
            <div className="filter-buttons">
                {filterButtons}
            </div>
            <div className="timeline">
                {projects}
            </div>
        </>
    )
}