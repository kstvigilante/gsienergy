import React from "react";
import "./Contact.css";
import Header from "../../Components/Header/Header";

export default function Contact(){
    return(
        <div className ="contact p-5">
            <Header/>
            <div className = "contact-header"></div>
            <div className = "container">
                <h3>CONTACT GSI</h3>
                <p className = "c-name address">eneral Synfuels International, Inc.</p>
                <p className = "address">2900 Government Way</p>
                <p className = "address">Coeur d'Alene, ID 83815</p>
                <p className = "c-phno">Call: (406) 250-7750 </p>
                <p className = "c-email">Email: <span>INFO@GSIENERGY.COM</span></p>
            </div>
        </div>
    )
}