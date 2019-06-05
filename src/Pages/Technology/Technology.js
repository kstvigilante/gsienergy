import React from "react";
import "./Technology.css";
import Header from "../../Components/Header/Header";

export default function Technology() {
    return (
        <div className="p-5">
            <Header />
            <div className="technology-header">
                <div className="tech-title">
                    <h3>GSI HAS DEVELOPED A NEW <i>IN-SITU</i> GASIFICATION EXTRACTION PROCESS</h3>
                    <h3>WITH GREAT POTENTIAL FOR RECOVERING OIL AND GAS</h3>
                    <h3>FROM OIL SHALE AND OIL SANDS DEPOSITS.</h3>
                </div>
            </div>
            <div className="container">
                <div className="tech-container">
                    <div className="tech-content">
                        <h3 className = "tech-overview">GSI TECHNOLOGY OVERVIEW</h3>
                        <p className = "tech-overview-desc">
                            GSI's technology stands out in a class of new oil shale
                            production methods called in-situ processing technologies.
                            Within the class of in-situ production technologies,
                            GSI's patented process has several unique features that
                            promise an environmental and economical breakthrough for
                            recovering oil and gas from oil shale and tar sands deposits.
                        </p>
                        <h6 className = "tech-heading">SINGLE WELL DESIGN</h6>
                        <p className = "tech-desc">
                            The single well design is used in which a heat distributing inlet
                            conduit is inserted into a gas effluent outlet conduit.
                        </p>
                        <h6 className = "tech-heading">GAS FLOW MANAGEMENT</h6>
                        <p className = "tech-desc">
                            Our gas flow management system ensures control of oxygen content
                            and movement of effluent gases towards the outlet conduit.
                        </p>
                    </div>
                    <div className="tech-content">
                        <h6 className = "mt-2 tech-heading">EXPANDED RECOVERY</h6>
                        <p className = "tech-desc">
                            The GSI process is not limited to extracting products only from
                            the “Mahogany Zone” but allows for recovery from the entire well
                            cross-section, making possible cost-effective recovery from many
                            areas not useable by other processes. The GSI heating and recovery
                            systems are also well suited for product recovery
                            from oil sands deposits.
                        </p>
                        <h6 className = "tech-heading">CONDENSER AND TREATMENT SYSTEM</h6>
                        <p className = "tech-desc">
                            Our condenser and treatment system safely separates the various
                            grades of oil products and associated lighter gases (hydrogen,
                            methane, propane, butane etc.) above ground.
                        </p>
                        <h6 className = "tech-heading">CO2 GEOSEQUESTRATION</h6>
                        <p className = "tech-desc">
                            The GSI process post-recovery leaves behind a unique sub-surface
                            environment in the form of a large surface area of charred
                            pores that adsorb high amounts of carbon dioxide for
                            sequestration purposes.
                        </p>
                    </div>
                </div>
            </div>
            <hr className="tech-hr"></hr>
            <div className="container">
                <div className="tech-container">
                    <div className="tech-content">
                        <h3 className = "tech-heading">GSI'S <i>IN-SITU</i> GASIFICATION PROCESS</h3>
                        <p className = "tech-overview-desc">
                            Unlike traditional extraction methods, our
                            proprietary technology is economical, environmentally
                            friendly, and self-sustaining. The GSI process is
                            a conceptually simple system:
                        </p>
                        <ul>
                            <li className = "list-item-desc">
                                Gases are heated in an above ground system.
                            </li>
                            <li className = "list-item-desc">
                                While carefully controlling oxygen content, the
                                heated gases are delivered into the bottom of the
                                production well using an inlet conduit, thereby
                                heating the entire cross section of rock
                                and oil shale layers.
                            </li>
                            <li className = "list-item-desc">
                                The continuous heating of rock and oil shale layer
                                creates a hydrocarbon rich mix of hot gases that
                                flow into an effluent conduit that is anchored
                                around the opening of the production well.
                            </li>
                            <li className = "list-item-desc">
                                These effluent gases are then condensed to separate Medium
                                and Light Crude Oil (in liquid phase) and associated
                                lighter gases such as Hydrogen, Menthane, Propane and Butane.
                            </li>
                        </ul>
                        <p className = "list-footer">
                            The process achieves a controlled and relatively quick production of 
                            partially refined and readily marketable products.
                        </p>
                    </div>
                    <div className="tech-content">
                        <div className="key-process">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}