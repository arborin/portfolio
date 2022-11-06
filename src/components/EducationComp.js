import React from "react";

function EducationData(props) {
    const { edu } = props;
    //     univeristy: "Georgian technical university",
    // faculty: "Faculty of systems and networks",
    // degree: "Master’s degree",
    // start_date: "2010",
    // end_date: "2012",
    const { univeristy, faculty, degree, start_date, end_date } = edu;

    return (
        <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
                <h3 className="mb-0">{univeristy}</h3>
                <div className="subheading mb-3">{degree}</div>
                <div>{faculty}</div>
                {/* <p>GPA: 3.23</p> */}
            </div>
            <div className="resume-date text-md-right">
                <span className="text-primary">
                    {start_date} - {end_date}
                </span>
            </div>
        </div>
    );
}

export default EducationData;
