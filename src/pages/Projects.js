import React from "react";
import ProjectsComp from "../components/ProjectsComp";
import "./Projects.css";
import data from "../data";

function Projects() {
    const { projects } = data;
    const project_titles = Object.keys(projects);
    return (
        <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="projects"
        >
            <div className="my-auto">
                {project_titles.map((title, index) => {
                    return (
                        <ProjectsComp
                            title={title}
                            projects={projects[title]}
                            key={index}
                        />
                    );
                })}

                {/* {} */}
            </div>
        </section>
    );
}

export default Projects;
