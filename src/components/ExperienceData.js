import React from "react";

function ExperienceData(props) {
    const job = props.job;

    const { position, organization, job_desc, date_from, date_to } = job;
    return (
        <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
                <h3 className="mb-0">{position}</h3>
                <div className="subheading mb-3">{organization}</div>
                <p>{job_desc}</p>
            </div>
            <div className="resume-date text-md-right">
                <span className="text-primary">
                    {date_from} - {date_to}
                </span>
            </div>
        </div>
    );
}

export default ExperienceData;
