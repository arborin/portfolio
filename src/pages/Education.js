import React from "react";
import EducationComp from "../components/EducationComp";
import data from "../data";

function Education() {
    const { education } = data;

    console.log(education);

    return (
        <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="education"
        >
            <div className="my-auto">
                <h2 className="mb-5">Education</h2>
                {education.map((item, index) => {
                    return <EducationComp edu={item} key={index} />;
                })}
            </div>
        </section>
    );
}

export default Education;
