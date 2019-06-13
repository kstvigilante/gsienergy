import React from "react";
import Header from "../../Components/Header/Header";
import { technologyHeader, shalePrcoessImg } from "../../config";
import { TechImgContainer, TechImage, TechTitleCont, TechTitle, TechContainer, TechContent, 
         TechOverView, TechOverViewDesc, TechHeading, TechDesc, ListITemDesc, ListFooter, KeyProcessImg } 
from "./style"
import {Container} from "../../appStyle";

export default function Technology() {
    return (
        <div className="p-5">
            <Header />
            <TechImgContainer>
                <TechImage src = {technologyHeader} alt = "tech"/>
                <TechTitleCont>
                    <TechTitle>OEI HAS DEVELOPED A NEW <i>IN-SITU</i> GASIFICATION EXTRACTION PROCESS</TechTitle>
                    <TechTitle>WITH GREAT POTENTIAL FOR RECOVERING OIL AND GAS</TechTitle>
                    <TechTitle>FROM OIL SHALE AND OIL SANDS DEPOSITS.</TechTitle>
                </TechTitleCont>
            </TechImgContainer>
           
            <Container>
                <TechContainer>
                    <TechContent>
                        <TechOverView>OEI TECHNOLOGY OVERVIEW</TechOverView>
                        <TechOverViewDesc>
                            OEI's technology stands out in a class of new oil shale
                            production methods called in-situ processing technologies.
                            Within the class of in-situ production technologies,
                            OEI's patented process has several unique features that
                            promise an environmental and economical breakthrough for
                            recovering oil and gas from oil shale and tar sands deposits.
                        </TechOverViewDesc>
                        <TechHeading>SINGLE WELL DESIGN</TechHeading>
                        <TechDesc>
                            The single well design is used in which a heat distributing inlet
                            conduit is inserted into a gas effluent outlet conduit.
                        </TechDesc>
                        <TechHeading>GAS FLOW MANAGEMENT</TechHeading>
                        <TechDesc>
                            Our gas flow management system ensures control of oxygen content
                            and movement of effluent gases towards the outlet conduit.
                        </TechDesc>
                    </TechContent>
                    <TechContent>
                        <TechHeading>EXPANDED RECOVERY</TechHeading>
                        <TechDesc>
                            The OEI process is not limited to extracting products only from
                            the “Mahogany Zone” but allows for recovery from the entire well
                            cross-section, making possible cost-effective recovery from many
                            areas not useable by other processes. The OEI heating and recovery
                            systems are also well suited for product recovery
                            from oil sands deposits.
                        </TechDesc>
                        <TechHeading>CONDENSER AND TREATMENT SYSTEM</TechHeading>
                        <TechDesc>
                            Our condenser and treatment system safely separates the various
                            grades of oil products and associated lighter gases (hydrogen,
                            methane, propane, butane etc.) above ground.
                        </TechDesc>
                        <TechHeading>CO2 GEOSEQUESTRATION</TechHeading>
                        <TechDesc>
                            The OEI process post-recovery leaves behind a unique sub-surface
                            environment in the form of a large surface area of charred
                            pores that adsorb high amounts of carbon dioxide for
                            sequestration purposes.
                        </TechDesc>
                    </TechContent>
                </TechContainer>
            </Container>
            <hr></hr>
            <Container>
                <TechContainer>
                    <TechContent>
                        <TechHeading>OEI'S <i>IN-SITU</i> GASIFICATION PROCESS</TechHeading>
                        <TechOverViewDesc>
                            Unlike traditional extraction methods, our
                            proprietary technology is economical, environmentally
                            friendly, and self-sustaining. The OEI process is
                            a conceptually simple system:
                        </TechOverViewDesc>
                        <ul>
                            <ListITemDesc>
                                Gases are heated in an above ground system.
                            </ListITemDesc>
                            <ListITemDesc>
                                While carefully controlling oxygen content, the
                                heated gases are delivered into the bottom of the
                                production well using an inlet conduit, thereby
                                heating the entire cross section of rock
                                and oil shale layers.
                            </ListITemDesc>
                            <ListITemDesc>
                                The continuous heating of rock and oil shale layer
                                creates a hydrocarbon rich mix of hot gases that
                                flow into an effluent conduit that is anchored
                                around the opening of the production well.
                            </ListITemDesc>
                            <ListITemDesc>
                                These effluent gases are then condensed to separate Medium
                                and Light Crude Oil (in liquid phase) and associated
                                lighter gases such as Hydrogen, Menthane, Propane and Butane.
                            </ListITemDesc>
                        </ul>
                        <ListFooter>
                            The process achieves a controlled and relatively quick production of 
                            partially refined and readily marketable products.
                        </ListFooter>
                    </TechContent>
                    <TechContent>
                        <KeyProcessImg src = {shalePrcoessImg} alt = "key process"/>
                    </TechContent>
                </TechContainer>
            </Container>
        </div>
    )
}