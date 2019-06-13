import React from "react";
import Header from "../../Components/Header/Header";
import { Container } from "../../appStyle"
import { AdvisorPage, AdvisorTitle, AdvisorName, AdvisorDesg, AdvisorDesc} from "./style";

export default function Advisor(){
    return(
        <AdvisorPage>
            <Header/>
            <Container>
                <AdvisorTitle>GENERAL SYNFUELS ADVISORS - 2017</AdvisorTitle>
                <AdvisorName>LARRY VANCE</AdvisorName>
                <AdvisorDesg>DIRECTOR</AdvisorDesg>
                <AdvisorDesc>25 years of oil and gas industry experience</AdvisorDesc>
                <AdvisorDesc>Has explored oil shale technology since the 1980s</AdvisorDesc>
                <AdvisorName>GREG WALCHER</AdvisorName>
                <AdvisorDesg>ADVISOR</AdvisorDesg>
                <AdvisorDesc>National leader in natural resources policy</AdvisorDesc>
                <AdvisorDesc>Founder of Natural Resources Group</AdvisorDesc>
                <AdvisorName>ANDREW MALONE</AdvisorName>
                <AdvisorDesg>ADVISOR</AdvisorDesg>
                <AdvisorDesc>Primary OEI early-state investor</AdvisorDesc>
                <AdvisorDesc>Focused on responsible energy development</AdvisorDesc>
            </Container>
        </AdvisorPage>
    )
}