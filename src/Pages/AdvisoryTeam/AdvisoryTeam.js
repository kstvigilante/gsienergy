import React from "react";
import Header from "../../Components/Header/Header";
import { Container } from "../../appStyle";
import {TeamTitle, MemberName, MemberDesignation, MemberDesc, AdvisoryTeamPage} from "./style";

export default function AdvisoryTeam() {
    return (
        <AdvisoryTeamPage>
            <Header />
            <Container>
                <TeamTitle>ADVISORY TEAM</TeamTitle>
                <MemberName>LARRY VANCE</MemberName>
                <MemberDesignation>ACTING CHAIRMAN/CEO</MemberDesignation>
                <MemberName>CHARLES BRIDGE</MemberName>
                <MemberDesignation>ADVISOR</MemberDesignation>
                <MemberDesc>
                    Charles Bridge brings a wealth of experience connecting 
                    investors with viable corporate partners, raising capital 
                    for corporate entities and managing financial and 
                    corporate accounting, SEC and NASD reporting, human 
                    resources, and corporate risk matters. Prior to joining OEI, 
                    he was managing director and chief financial officer with 
                    Brooke Private Equity Advisors in Boston, where he helped 
                    grow the firm to $800 million in assets under management. 
                    Charles has an MBA from Northeastern University and a bachelor of science 
                    degree from the University of Maine.
                </MemberDesc>
                <MemberName>JOHN F. MCCARTHY, III</MemberName>
                <MemberDesignation>ADVISOR</MemberDesignation>
                <MemberDesc>
                    John F. McCarthy III has practiced corporate and securities law 
                    for more than 40 years. He has extensive and diversified corporate 
                    finance experience in advising issuers, underwriters and indenture trustees 
                    in a broad range of public securities offerings and private placements of 
                    debt and equity. His experience includes structuring and documenting initial 
                    public offerings and venture capital transactions as well as the structuring 
                    and financing of startup companies. He also has expertise in negotiating and 
                    structuring complex merger, acquisition and divestiture transactions, including 
                    public company mergers, strategic acquisitions and leveraged buy-out transactions. 
                    John also has significant experience assisting clients in resolving issues 
                    involving public reporting companies, broker dealers, limited partnerships, 
                    and investment advisors. He has advised and represented numerous companies 
                    regarding corporate governance and disclosure law, employment law and Sarbanes 
                    Oxley compliance. John has negotiated and prepared numerous licensing agreements, 
                    employment agreements, manufacturing and distribution agreements, and international 
                    financing documents. In particular, he was outside general counsel to the multi-billion-dollar 
                    company that became Discovery Communications Corporation and he served as counsel to 
                    Domino Pizza International, Inc., Occidental Petroleum Corporation, American Shipbuilding 
                    Company and many other public and private companies. John has a bachelor's degree from Cornell 
                    Univeristy, a J.D. degree from the National Law Center at George Washington University, and a 
                    LLM degree from Columbia University School of Law.
                </MemberDesc>
                <MemberName>DAVE KANUCH</MemberName>
                <MemberDesignation>ADVISOR</MemberDesignation>
                <MemberDesc>
                    Dave Kanuch brings more than 30 years of experience to OEI as a systems design, testing, 
                    and operations engineer and manager for commercial nuclear power plants. Prior to his 
                    position with OEI, he was the operations director at Siempelkamp, where he managed the 
                    $35 million successful reactor vessel segmentation project at Zion Nuclear. Prior to that, 
                    Dave worked at The Babcock & Wilcox (B&W;) Company as director of design optimization and 
                    manager of nuclear steam supply systems for small modular reactors (SMRs). In that role he 
                    managed the engineering team responsible for the design of the nuclear systems, including the 
                    emergency shutdown systems. Dave was responsible for several patents related to the passive 
                    safe shutdown design features of B&W;'s SMR technology. At Westinghouse Electric, he was an 
                    advisory engineer and manager of the AP 1000 design team responsible for containment and control 
                    room safety systems. Dave has bachelor's degrees in mechanical engineering and biology fro 
                    the University of Pittsburgh.
                </MemberDesc>
            </Container>
        </AdvisoryTeamPage>
    );
}