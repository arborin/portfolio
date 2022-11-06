import React from "react";
import ExperienceComp from "../components/ExperienceComp";
import data from "../data";

function Experiance() {
    const { experience } = data;
    console.log(experience);

    return (
        <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="experience"
        >
            <div className="my-auto">
                <h2 className="mb-5">Experience</h2>

                {experience.map((item, index) => {
                    return <ExperienceComp job={item} key={index} />;
                })}
            </div>
        </section>
    );
}

export default Experiance;
