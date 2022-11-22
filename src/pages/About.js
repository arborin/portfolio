import React from "react";
import data from "../data";

function About() {
    const { about } = data;
    const { pages } = data.about;
    const { first_name, last_name, mobile, email, city, address, text } = about;

    console.log(pages);

    const sendRequest = () => {
        const url = "http://45.9.46.62:8887/api/smsCheck.php";

        const myHeaders = new Headers();

        myHeaders.append(
            "x-smstoken",
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9jaXRhZGVsaS5jb20iLCJhdWQiOiJodHRwOlwvXC9jaXRhZGVsaS5jb20iLCJpYXQiOjE2NjkxMDEyMzEsIm5iZiI6MTY2OTEwMTIzMSwiZXhwIjoxNjY5MTAxNDExLCJkYXRhIjp7ImlwIjoiNDUuOS40Ni42MiIsImlwX2xvY2F0aW9uIjoiZ2xvYmFsIiwib3NfYnJvd3NlciI6IlBvc3RtYW5SdW50aW1lXC83LjI5LjIiLCJhY3RpdmF0ZSI6MSwiaWQiOiI0NjkiLCJpZF9zdGFmZiI6IjQxOSIsInVzZXJuYW1lIjoibi5rb2JhaWR6ZSIsImZ1bGxuYW1lIjoiXHUxMGRjXHUxMGQ4XHUxMGQ5XHUxMGQwIFx1MTBkOVx1MTBkZFx1MTBkMVx1MTBkMFx1MTBkOFx1MTBlYlx1MTBkNCIsImNhdCI6IjEiLCJkZWZhdWx0X2lkX21vZHVsaSI6IjI3NSIsIm11bHRpX2FjY2VzcyI6IjAiLCJzbXNfY29kZSI6IjAyOTQifX0.Va0eW_PUrnCRPT2XFovMyz2HwtWpaQKws0OPyGYBbh8"
        );

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: "",
            redirect: "follow",
        };

        fetch(url, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    };

    return (
        <section
            className="resume-section p-3 p-lg-5 d-flex d-column"
            id="about"
        >
            <div className="my-auto">
                <h1 className="mb-0">
                    <span>{last_name} </span>

                    <span className="text-primary">{first_name}</span>
                </h1>
                <div className="subheading mb-5">
                    {city} · {address} · {mobile} ·{" "}
                    <a href="mailto:name@email.com">{email}</a>
                </div>
                <div>
                    <button className="btn" onClick={sendRequest}>
                        Send request
                    </button>
                </div>
                <p className="mb-5">{text}</p>
                <ul className="list-inline list-social-icons mb-0">
                    {pages.map((page, id) => {
                        const { name, link } = page;

                        return (
                            <li className="list-inline-item" key={id}>
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
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
