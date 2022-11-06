import React from "react";
import data from "../data";

function Awards() {
    const { awards } = data;

    return (
        <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="awards"
        >
            <div className="my-auto">
                <h2 className="mb-5">Awards &amp; Certifications</h2>
                <ul className="fa-ul mb-0">
                    {awards.map((award, index) => {
                        const { organization, training } = award;
                        return (
                            <li className="mb-3">
                                <i className="fa-li fa fa-trophy text-warning"></i>
                                <strong>{training}</strong> - {organization}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Awards;
