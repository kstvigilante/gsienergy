import React from "react";
import "./Advisor.css";
import Header from "../../Components/Header/Header";

export default function Advisor(){
    return(
        <div className = "p-5">
            <Header/>
            <div className = "container">
                <h3 className = "advisor-title">GENERAL SYNFUELS ADVISORS - 2017</h3>
                <h3 className = "advisor-name">LARRY VANCE</h3>
                <h5 className = "advisor-desg">DIRECTOR</h5>
                <p className = "advisor-desc">25 years of oil and gas industry experience</p>
                <p className = "advisor-desc">Has explored oil shale technology since the 1980s</p>
                <h3 className = "advisor-name">GREG WALCHER</h3>
                <h5 className = "advisor-desg">ADVISOR</h5>
                <p className = "advisor-desc">National leader in natural resources policy</p>
                <p className = "advisor-desc">Founder of Natural Resources Group</p>
                <h3 className = "advisor-name">ANDREW MALONE</h3>
                <h5 className = "advisor-desg">ADVISOR</h5>
                <p className = "advisor-desc">Primary GSI early-state investor</p>
                <p className = "advisor-desc">Focused on responsible energy development</p>
            </div>
        </div>
    )
}