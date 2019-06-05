import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { Logo } from "../../config";

export default function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header-cont">
                    <img src={Logo} alt="gsi" />
                    <div className = "header-links">
                        <NavLink exact to="/" activeClassName="active-link"> home </NavLink>
                        <NavLink to="/about" activeClassName="active-link"> about </NavLink>
                        <NavLink to="/shale" activeClassName="active-link"> oil shale </NavLink>
                        <NavLink to="/technology" activeClassName="active-link"> technology </NavLink>
                        <NavLink to="/advantage" activeClassName="active-link"> gsi advantage </NavLink>
                        <NavLink to="/contact" activeClassName="active-link"> contact us </NavLink>
                        <NavLink to="/documents" activeClassName="active-link"> technical documents </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}