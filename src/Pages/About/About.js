import React from "react";
import "./About.css";
import Header from "../../Components/Header/Header";
import {Link} from "react-router-dom";

export default function About(){
    return(
        <div className = "about-page">
            <Header/>
            <div className = "about-header-img">

            </div>
            <div className = "container">
                <h1 className = "about-title">about gsi</h1>
                <p className = "about-para capital-letter">
                    eneral Synfuels International, Inc. ("GSI") is committed to 
                    delivering a green transformation for fossil fuels development. 
                    GSI has developed a patented, environmentally friendly, 
                    energy-self-sustaining and economically attractive process 
                    to recover oil and gas products from oil shale.
                </p>
                <p className = "about-para">
                    It is GSI's intent to demonstrate its technology in the field through 
                    a commercially scalable prototype. GSI will be well positioned to 
                    become a significant contributor to the Oil Shale Industry in 
                    the United States and around the world.
                </p>
                <p className = "about-para">
                    The GSI in-situ gasification technology will reduce reliance 
                    on oil imports to the U.S. by responsibly tapping into the 
                    abundant domestic energy resources of the United States.
                </p>
                <Link to = "/news" className = "about-links">in the news</Link>
                <Link to = "/advisory_team" className = "about-links">advisory management team</Link>
                <Link to = "/advisor" className = "about-links">advisors</Link>
            </div>
        </div>
    );
}