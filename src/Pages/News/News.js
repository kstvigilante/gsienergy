import React from "react";
import "./News.css";
import Header from "../../Components/Header/Header";

export default function News(){
    return(
        <div className = "news">
            <Header/>
            <div className = "container">
                <h3 className = "news-title">in the news</h3>
                <a
                    href = "https://web.archive.org/web/20161001195949/http://www.gjsentinel.com/news/articles/energy-company-focusing-on-shale"
                    target = "_blank"
                    rel = "noopener noreferrer"
                    className = "news-link"
                >
                    ENERGY COMPANY FOCUSING ON SHALE
                </a>
                <p className = "news-para">
                    The Grand Valley has landed yet another new company that hopes 
                    to change the way oil is <br/> extracted from the ground 
                    that its owners say could bring the industry 
                    back to western Colorado.
                </p>
                <a
                    href = "https://web.archive.org/web/20160803230558/http://www.gsienergy.com/SUN_110815_10F_F._edMed.pdf"
                    target = "_blank"
                    rel = "noopener noreferrer"
                    className = "news-link"
                >
                    RETAIL, HEALTHCARE AND ENERGY ARE ALL MAKING MOVES
                </a>
                <p className = "news-para">
                    GSI is ready to tackle oil shale with a new set of solutions.
                </p>
            </div>
        </div>
    )
}