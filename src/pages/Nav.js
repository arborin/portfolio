import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
    const menus = [
        { link: "about", name: "About" },
        { link: "experience", name: "Experience" },
        { link: "education", name: "Education" },
        { link: "skills", name: "Skills" },
        { link: "interests", name: "Interests" },
        { link: "awards", name: "Awards" },
    ];
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
                id="sideNav"
            >
                <Link className="navbar-brand js-scroll-trigger" href="/">
                    <span className="d-block d-lg-none">Nika Kobaidze</span>
                    <span className="d-none d-lg-block">
                        <img
                            className="img-fluid img-profile rounded-circle mx-auto mb-2"
                            src="assets/img/img1.jpg"
                            alt=""
                        />
                    </span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav">
                        {menus.map((menu, id) => {
                            console.log(menu);
                            const { name, link } = menu;
                            return (
                                // <></>
                                <li
                                    // className="nav-item"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-item active"
                                            : "nav-item"
                                    }
                                    key={id}
                                >
                                    <NavLink
                                        className="nav-link js-scroll-trigger"
                                        to={link}
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
