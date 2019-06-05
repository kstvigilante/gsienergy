import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import { homeBackground } from "../../config"

export default function home() {
    return (
        <div>
            <Header />
            <div className="home">
                <div className="container">
                    <h3 className="home-title">A NEW APPROACH TO RECOVERING OIL AND GAS FROM OIL SHALE</h3>
                </div>
            </div>
        </div>
    );
}