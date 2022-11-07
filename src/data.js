const data = {
    about: {
        first_name: "nika",
        last_name: "kobaidze",
        mobile: "(+995) 555 12 12 39",
        email: "nika.kobaidze@gmail.com",
        city: "tbilisi",
        address: "Gldani III Disctrict, Block 79B Flat(68) ",
        pages: [
            {
                name: "facebook",
                link: "https://www.facebook.com/kobaidzenika/",
            },
            {
                name: "youtube",
                link: "https://www.youtube.com/channel/UClaY-QGIGC_50RFv1csr5mw",
            },
            { name: "github", link: "https://github.com/arborin" },
            {
                name: "linkedin",
                link: "https://www.linkedin.com/in/nika-kobaidze-3a7771227/",
            },
        ],
        text: "I have over 4 years of experience in various areas in Software and Web Development. Excellent in Web Application using  PHP, Laravel, Python, Flask, React, AJAX,  MySQL, MVC,  GIT, OOP Concepts and Design Pattern Experience.",
    },
    experience: [
        {
            organization: "Citadeli",
            position: "PHP Developer",
            date_from: "2021",
            date_to: "present",
            job_desc: "Create and support company CRM system based on php.",
        },
        {
            organization: "Digital Governance Agency",
            position: "PHP Developer",
            date_from: "2022",
            date_to: "present",
            job_desc: "Create and support web applications based on php.",
        },
        {
            organization: "Odeo Soft",
            position: "Python Developer",
            date_from: "2020",
            date_to: "2021",
            job_desc:
                "Create and develop crm applications/modules for client's business needs.",
        },
        {
            organization: "Medison Ambulatories",
            position: "PHP Developer",
            date_from: "2018",
            date_to: "2020",
            job_desc:
                "Create and support medical applications according business needs, implement a data integration processes.",
        },
        {
            organization: "JSC Silknet",
            position: "VoIP Administrator",
            date_from: "2017",
            date_to: "2018",
            job_desc:
                "Instalation/Configuration/Automation and support VOIP based systems and services.",
        },
        {
            organization: "State military scientific-technical center DELTA",
            position: "Python Developer",
            date_from: "2014",
            date_to: "2017",
            job_desc:
                "Create and support new modules for ERP system according to the company’s needs",
        },
        {
            organization: "LTD 'MyGPS'",
            position: "Embedded system programmer",
            date_from: "2014",
            date_to: "2014",
            job_desc:
                "Hardware programming, create and develop new C/C++ applications for microcontrollers.",
        },
        {
            organization: "LTD 'Geonet'",
            position: "Junior Network Administrator",
            date_from: "2011",
            date_to: "2014",
            job_desc: "Configuration and support network devices",
        },
        {
            organization: "Georgian Railway",
            position: "Junior Network Administrator",
            date_from: "2010",
            date_to: "2011",
            job_desc: "Configuration, monitoring and support internal network",
        },
        {
            organization: "LTD 'Comptawn'",
            position: "IT Support",
            date_from: "2011",
            date_to: "2011",
            job_desc: "Installing and configuration a computer software.",
        },
        {
            organization: "A. Chikobava institute of linguistics",
            position: "Helpdesk",
            date_from: "2010",
            date_to: "2011",
            job_desc:
                "Installing and configuration a computer hardware, software, systems, networks, printers and scanners.",
        },
    ],
    education: [
        {
            univeristy: "Georgian technical university",
            faculty: "Faculty of systems and networks",
            degree: "Master’s degree",
            start_date: "2010",
            end_date: "2012",
        },
        {
            univeristy: "I. Javakhishvili Tbilisi state University",
            faculty: "Faculty of exact and natural sciences",
            degree: "Bachelor’s degree",
            start_date: "2006",
            end_date: "2010",
        },
        {
            univeristy: "Georgian technical university",
            faculty: "Faculty of transport and mechanical engineering",
            degree: "Bachelor’s degree",
            start_date: "2008",
            end_date: "2012",
        },
        {
            univeristy: "Information technologies academy",
            faculty: "Computer networks and systems",
            degree: "Technical",
            start_date: "2008",
            end_date: "2010",
        },
    ],
    skills: {
        programming: [
            { name: "PHP", logo: "php" },
            { name: "Laravel", logo: "laravel" },
            { name: "Javascript", logo: "javascript" },
            { name: "React", logo: "react" },
            { name: "HTML", logo: "html5" },
            { name: "CSS3", logo: "css3" },
            { name: "Bootstrap", logo: "bootstrap" },
            { name: "Python", logo: "python" },
            { name: "Mysql", logo: "mysql" },
            { name: "Postgresql", logo: "postgresql" },
            { name: "GIT", logo: "git" },
            { name: "Linux", logo: "linux" },
            { name: "Docker", logo: "docker" },
        ],
        other: [
            "Microcontroller progamming",
            "Raspberry PI",
            "AVR",
            "Arduino",
            "Psoc",
            "STM32",
            "Networking",
        ],
    },
    interests: [
        "Electronic Enginearing",
        "Internet of Things",
        "Astronomy",
        "Painting",
    ],
    awards: [
        {
            organization: "Georgian innovation and technology agency",
            training: "Python programming training",
            year: 2018,
        },
        {
            organization: "University of Georgia",
            training: "Microelectronic and microcontroller programming",
            year: 2018,
        },
        {
            organization: "Georgian data exchange agency",
            training: " Cyber security",
            year: 2018,
        },
        {
            organization: "Information technologies academy",
            training: "Cisco Certified Network Associate – CCNA",
            year: 2018,
        },
        {
            organization: "Cisco",
            training: "Cisco Certified Network Associate Security ",
            year: 2018,
        },
        {
            organization: "Web studio Lemons",
            training: "Web programing course (HTML, CSS, PHP, MySQL)",
            year: 2018,
        },
    ],
    projects: {
        react: [
            {
                title: "todo list",
                desc: "Todo list using react hooks",
                url: "https://github.com/arborin/ol-academy-react-todo",
                image: "/assets/img/todolist.jpg",
            },
            {
                title: "Context Menu",
                desc: "Simple context menu using react",
                url: "https://github.com/arborin/ol-academy-context-menu",
                image: "",
            },
            {
                title: "React Popup",
                desc: "Popup wondow react project",
                url: "https://github.com/arborin/ol-academy-popup-with-handling-outside-click",
                image: "/assets/img/popup.jpg",
            },
            {
                title: "Portfolio Page",
                desc: "My protfolio page using react library",
                url: "https://github.com/arborin/portfolio",
                image: "/assets/img/portfolio.jpg",
            },
        ],
        laravel: [
            {
                title: "TRCP",
                desc: "Truck parking management system",
                url: "http://google.com",
                image: "",
            },
            {
                title: "CRM",
                desc: "Simple CRM",
                url: "http://google.com",
                image: "",
            },
        ],
        python: [
            {
                title: "SEEKER M",
                desc: "Multi-purpose mountable laser rangefinder",
                url: "https://github.com/arborin/nc_network",
                image: "/assets/img/seeker_m.jpg",
            },
            {
                title: "PZEM 016",
                desc: "Energy monitoring system",
                url: "https://github.com/arborin/pzem_016",
                image: "/assets/img/pzm_016.jpg",
            },
        ],
    },
};

export default data;
