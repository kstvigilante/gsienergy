import React from "react";
import Header from "../../Components/Header/Header";
import { leafImg, roundArrow, upArrow, envHeaderImg, gsiAdvantage } from "../../config";
import { AdgPage, EnvHeader, EnvHeaderImg, EnvTitleCont, EnvTitle, AdgContainer, AdgContent,
         GsiTitle, GsiDesc, AdgTitle, AdgTitleText, AdgMainPara, AdgSubTitle, AdgPara,
         AdgList, AdgListItem, GsiImgCont, GsiImgDesc, GsiAdg, GsiAdgImg }
 from "./style";

export default function Advantage() {
    return (
        <AdgPage>
            <Header />
            <EnvHeader>
                <EnvHeaderImg src = {envHeaderImg} alt = "environment" />
                <EnvTitleCont>  
                    <EnvTitle>CREATING A GREEN ALTERNATIVE TO FOSSIL FUELS DEVELOPMENT</EnvTitle>
                </EnvTitleCont>
            </EnvHeader>
            <AdgContainer>
                <AdgContent>
                    <GsiTitle>
                        THE GSI ADVANTAGE
                    </GsiTitle>
                    <GsiDesc>
                        The GSI Gasification Process delivers significant 
                        advantages over traditional and proposed ex-situ 
                        and in-situ technologies. We believe it constitutes a 
                        potential breakthrough both in terms of environmental 
                        friendliness as well as production economics that could turn oil 
                        shale and tar sands into major sources of global crude oil supply.
                    </GsiDesc>
                    <AdgTitle>
                        <img src = {leafImg} alt = "leaf"/> 
                        <AdgTitleText>ENVIRONMENTALLY FRIENDLY</AdgTitleText>
                    </AdgTitle>
                    <AdgMainPara>
                        GSI’s in-situ gasification technology is a very environmentally 
                        friendly process. It has a minimal environmental footprint, 
                        requires no water in the production process, does not create any 
                        subsurface structural disturbances and actively protects the 
                        ground water, generates very few emissions and has the potential 
                        to capture and geo-sequester all carbon dioxide produced as 
                        well as other sources of CO2.
                    </AdgMainPara>
                    <AdgMainPara>
                        GSI's in-situ gasification technology is both inherently and by design 
                        an environmentally friendly process. The inherent benefits of our 
                        technology include:
                    </AdgMainPara>
                    <AdgSubTitle>MINIMAL ENVIRONMENTAL FOOTPRINT</AdgSubTitle>
                    <AdgPara>
                        The disturbance of original production site surfaces is minimal. 
                        As an in-situ technology, there are no mining operations and no 
                        (significant) external energy source is required. All surface 
                        structures have been designed as modular, self-leveling and 
                        transportable components. Therefore, in most locations we hope 
                        to leave the property in better condition than before we started.
                    </AdgPara>
                    <AdgSubTitle>NO WATER CONSUMPTION</AdgSubTitle>
                    <AdgPara>
                        The GSI in-situ gasification technology does not use water in its 
                        retorting processes. Water in the combustion gases, kerogen and 
                        rock will be recovered and purified as per state and federal 
                        regulations. In most cases this makes the GSI process a 
                        net water producer.
                    </AdgPara>
                    <AdgSubTitle>MINIMAL EMISSIONS</AdgSubTitle>
                    <AdgPara>
                        All process and combustion gases are recovered liquid products 
                        are condensed and gaseous products are cooled and liquefied 
                        under pressure except hydrogen, which is compressed.
                    </AdgPara>
                    <AdgSubTitle>MINIMAL CARBON FOOTPRINT</AdgSubTitle>
                    <AdgPara>
                        The GSI process exhibits low well-to-pump Green House Gas emissions 
                        that are much lower than other oil shale technologies. There 
                        are also significant CO2 geo-sequestration 
                        opportunities post production.
                    </AdgPara>
                    <AdgSubTitle>ACTIVE GROUNDWATER PROTECTION</AdgSubTitle>
                    <AdgPara>
                        GSI’s in-situ oil shale gasification process actively protects 
                        the groundwater through a set of parallel efforts:
                    </AdgPara>


                    <AdgList>
                        <AdgListItem> 
                            The inherent nature of the GSI in-situ Oil Shale Gasification 
                            core process—the negative pressure system—will draw products 
                            as gases, including volatile organic and other contaminants, 
                            toward the effluent stream continuously and away 
                            from groundwater resources.
                        </AdgListItem>
                        <AdgListItem>
                            A degradable cellulose and hydrogel polymer matrix can be introduced 
                            into the aquifer layers as a temporary aquifer barrier surrounding 
                            the production plant processing site to restrict or eliminate 
                            groundwater flow into the recovery well processing area. When 
                            hydrocarbon recovery is completed the polymer matrix can be 
                            removed and the aquifer flow reestablished.
                        </AdgListItem>
                        <AdgListItem>
                            Post recovery, there is the opportunity to ensure protection of 
                            groundwater from heavy metals and other organics which may 
                            have become groundwater available during the in-situ 
                            kerogen cracking process.
                        </AdgListItem>
                    </AdgList>

                    <AdgTitle>
                        <img src = {roundArrow} alt = "leaf"/> 
                        <AdgTitleText>SELF SUSTAINABLE</AdgTitleText>
                    </AdgTitle>
                    <AdgMainPara>
                        In contrast to alternative in-situ technologies, all energy 
                        requirements of the GSI process (except for a short start-up 
                        period for the first production well) can be met without the 
                        need for an external energy supply. A portion of the hydrocarbon 
                        gases recovered from the well is sufficient to continuously 
                        fuel the heater and onsite generator systems.
                    </AdgMainPara>
                    <AdgTitle>
                        <img src = {upArrow} alt = "leaf"/>
                        <AdgTitleText>ECONOMICALLY ATTRACTIVE</AdgTitleText>
                    </AdgTitle>
                    <AdgMainPara>
                        We believe that the production cost of oil products generated 
                        from the GSI process will be significantly lower than those from 
                        traditional oil shale and tar sand production methods. 
                        The main reasons are:
                    </AdgMainPara>
                
                    <AdgSubTitle>EXTRACTION OF READILY MARKETABLE PRODUCTS</AdgSubTitle>
                    <AdgPara>
                        The GSI process yields high API light crude, medium and heavy crudes 
                        and separated hydrocarbon gases. Unlike products yielded by other 
                        production processes, GSI's process acts like a fractionation 
                        column making many of the GSI products readily marketable.
                    </AdgPara>
                    <AdgSubTitle>HIGH YIELDS</AdgSubTitle>
                    <AdgPara>
                        Most competing oil shale technologies utilize processes that are limited 
                        to recovery from only the thick oil shale rich “Mahogany” zones, often times 
                        excluding numerous other layers of rich oil shale at other depths. 
                        These other layers can contain more oil shale than the mahogany layer but 
                        are not confined to a single zone. The GSI process is not limited to only 
                        extracting products from the “Mahogany” zone – it actually allows for 
                        recovery from the entire well cylinder cross section. The GSI in-situ 
                        gasification technology may gasify and recover products from oil shale 
                        deposits as deep as 3,000 feet.
                    </AdgPara>
                    <AdgSubTitle>HIGH RETURN ON ENERGY INVESTED</AdgSubTitle>
                    <AdgPara>
                        The ratio between energy contained in the effluent mix of products 
                        (energy out) and the energy required to gasify the kerogen trapped 
                        in the rock (energy in) is expected to be very favorable on 
                        the order of 6:1.
                    </AdgPara>
                    <AdgSubTitle>LOW OPERATING COST</AdgSubTitle>
                    <AdgPara>
                        The GSI process has very low external energy requirements. Shortly 
                        after start-up, the process is self-sustainable in that a portion of 
                        the hydrocarbon gases recovered can be used as feed stocks. In 
                        addition, the GSI process is highly automated, also contributing 
                        to low operating cost.
                    </AdgPara>
                    <AdgSubTitle>LOW CAPITAL COST</AdgSubTitle>
                    <AdgPara>
                        Several factors contribute to the low capital costs for the GSI 
                        Process. The process requires drilling of only one well, whereas 
                        alternative in-situ technologies typically require drilling and 
                        casing of separate heating and recovery wells. Many elements of the 
                        above ground heating, condensing and separator equipment will 
                        be shared among several production wells. Finally, with 
                        the relatively short recovery period of 3 to 8 years, onsite 
                        equipment can be reused reducing capital expenditures for 
                        the next set of wells.
                    </AdgPara>
                    <AdgTitle>
                        <img src = {roundArrow} alt = "round" />   
                        <AdgTitleText>CARBON DIOXIDE GEO-SEQUESTRATION</AdgTitleText> 
                    </AdgTitle>
                    <GsiImgCont>
                        <GsiImgDesc>
                            <AdgMainPara>
                                Post recovery, the GSI process leaves behind a unique sub-surface 
                                environment. Where originally kerogen was cracked and removed, 
                                charred pores remain that provide very large surface areas 
                                ideally suited for CO2 adsorptive geo-sequestration. 
                                The amount of CO2 that can be sequestered in a retired 
                                GSI production site is well beyond the amount of 
                                CO2 produced by the active well. 
                            </AdgMainPara>
                            <a 
                                href = "http://www.netl.doe.gov/"
                                target = "_blank"
                                rel = "noopener noreferrer"
                            >
                                Learn more about carbon sequestration from the 
                                national energy and technology lab (NETL)
                            </a>
                        </GsiImgDesc>
                        <GsiAdg>
                            <GsiAdgImg src = {gsiAdvantage} alt = "advantage" />
                        </GsiAdg>
                    </GsiImgCont>
                </AdgContent>
            </AdgContainer>
        </AdgPage>
    )
}