import React from "react";
import Header from "../../Components/Header/Header";
import {aboutImage} from "../../config";
import { AboutPage, AboutImageHeader, AboutTitle, AboutPara, AboutLinks, CapitalLetter } from "./style";
import { Container } from "../../appStyle";

export default function About(){
    return(
        <AboutPage>
            <Header/>
            <AboutImageHeader src = {aboutImage} alt = "about"/>
            <Container>
                <AboutTitle>about oei</AboutTitle>
                <CapitalLetter>
                    mni Energy International, Inc. ("OEI") is committed to 
                    delivering a green transformation for fossil fuels development. 
                    OEI has developed a patented, environmentally friendly, 
                    energy-self-sustaining and economically attractive process 
                    to recover oil and gas products from oil shale.
                </CapitalLetter>
                <AboutPara>
                    It is OEI's intent to demonstrate its technology in the field through 
                    a commercially scalable prototype. OEI will be well positioned to 
                    become a significant contributor to the Oil Shale Industry in 
                    the United States and around the world.
                </AboutPara>
                <AboutPara>
                    The OEI in-situ gasification technology will reduce reliance 
                    on oil imports to the U.S. by responsibly tapping into the 
                    abundant domestic energy resources of the United States.
                </AboutPara>
                <AboutLinks to = "/news">in the news</AboutLinks>
                <AboutLinks to = "/advisory_team">advisory management team</AboutLinks>
                <AboutLinks to = "/advisor">advisors</AboutLinks>
            </Container>
        </AboutPage>
    );
}