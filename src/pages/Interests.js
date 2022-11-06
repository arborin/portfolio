import React from "react";
import data from "../data";

function Interests() {
    const { interests } = data;
    console.log(interests);
    return (
        <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="interests"
        >
            <div className="my-auto">
                <h2 className="mb-5">Interests</h2>

                <ul className="fa-ul mb-0">
                    {interests.map((item, id) => {
                        return (
                            <li key={id} className="orange-text mb-3">
                                <i className="fa-li fa fa-check"></i>
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Interests;
