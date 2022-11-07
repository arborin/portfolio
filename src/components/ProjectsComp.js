import React from "react";

function ProjectsComp(props) {
    const { title, projects } = props;
    return (
        <>
            <h2 className="mb-5">{title} Projects</h2>
            {projects.map((project, index) => {
                const { title, desc, url, image } = project;
                let img_url = image
                    ? `url(${image})`
                    : "url('assets/img/no_img.jpg')";
                return (
                    <div className="card" key={index}>
                        <div
                            className="card-img"
                            style={{
                                backgroundImage: `${img_url}`,
                            }}
                        >
                            <div className="overlay">
                                <div className="overlay-content">
                                    <a
                                        className="hover"
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="card-content">
                            <a href="/">
                                <h2>{title}</h2>
                                <p>{desc}</p>
                            </a>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default ProjectsComp;
