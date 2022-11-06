import React from "react";
import data from "../data";

function Skills() {
    const { programming, other } = data.skills;

    return (
        <div>
            <section
                className="resume-section p-3 p-lg-5 d-flex flex-column"
                id="skills"
            >
                <div className="my-auto">
                    <h2 className="mb-5">Skills</h2>

                    <div className="subheading mb-3">
                        Programming Languages &amp; Tools
                    </div>
                    <ul className="list-inline list-icons">
                        {programming.map((item, id) => {
                            const { name, logo } = item;
                            return (
                                <li className="list-inline-item" key={id}>
                                    <i
                                        className={`devicons devicons-${logo}`}
                                    ></i>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="subheading mb-3">Other Skills</div>
                    <ul className="fa-ul mb-0">
                        {other.map((item, id) => {
                            return (
                                <li key={id}>
                                    <i className="fa-li fa fa-check"></i>
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Skills;
