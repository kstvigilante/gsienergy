import React from "react";
import Header from "../../Components/Header/Header";
import { Container } from "../../appStyle";
import { NewsTitle, NewsLink, NewsPara } from "./style";

export default function News(){
    return(
        <div>
            <Header/>
            <Container>
                <NewsTitle>in the news</NewsTitle>
                <NewsLink
                    href = "http://www.gjsentinel.com/news/articles/energy-company-focusing-on-shale"
                    target = "_blank"
                    rel = "noopener noreferrer"
                >
                    ENERGY COMPANY FOCUSING ON SHALE
                </NewsLink>
                <NewsPara>
                    The Grand Valley has landed yet another new company that hopes 
                    to change the way oil is <br/> extracted from the ground 
                    that its owners say could bring the industry 
                    back to western Colorado.
                </NewsPara>
                <NewsLink
                    href = "http://www.gsienergy.com/SUN_110815_10F_F._edMed.pdf"
                    target = "_blank"
                    rel = "noopener noreferrer"
                >
                    RETAIL, HEALTHCARE AND ENERGY ARE ALL MAKING MOVES
                </NewsLink>
                <NewsPara>
                    OEI is ready to tackle oil shale with a new set of solutions.
                </NewsPara>
            </Container>
        </div>
    )
}