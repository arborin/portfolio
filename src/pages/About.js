import React from "react";
import data from "../data";

function About() {
    const { about } = data;
    const { pages } = data.about;
    const { first_name, last_name, mobile, email, city, address, text } = about;

    console.log(pages);

    return (
        <section
            className="resume-section p-3 p-lg-5 d-flex d-column"
            id="about"
        >
            <div className="my-auto">
                <h1 className="mb-0">
                    {last_name}
                    <span className="text-primary">{first_name}</span>
                </h1>
                <div className="subheading mb-5">
                    {mobile} · {city} · {address} ·
                    <a href="mailto:name@email.com">{email}</a>
                </div>
                <p className="mb-5">{text}</p>
                <ul className="list-inline list-social-icons mb-0">
                    {pages.map((page, id) => {
                        const { name, link } = page;

                        return (
                            <li className="list-inline-item" key={id}>
                                <a href={link} target="_blank">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i
                                            className={`fa fa-${name} fa-stack-1x fa-inverse`}
                                        ></i>
                                    </span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default About;
