import React from "react";
import "./Shale.css";
import Header from "../../Components/Header/Header";
import { shaleBackground } from "../../config";

export default function Shale() {
    return (
        <div className="shale-page">
            <Header />
            <div className="shale-header"></div>
            <div className="container">

                <h3 className="shale-title">
                    about oil shale and oil sands
                </h3>
                <div className="para-container">
                    <div className="para-content">
                        <p>
                            The GSI in-situ process was specifically designed to extract
                            gaseous hydrocarbon products from oil shale. Oil shale is an
                            organic-rich fine-grained sedimentary rock, containing
                            significant amounts of a compound known as kerogen, which can
                            be converted into an array of hydrocarbon products.
                        </p>
                        <p>
                            Oil Shale is not related to Shale Gas (e.g. The Marcellus Shale)
                            where fracking is used to help extract the only product, natural
                            gas or Shale Oil (e.g. The Bakken Shale), where oil in shale
                            rock is extracted also using fracking.
                        </p>
                        <p>
                            Recent estimates set the total recoverable world oil shale resources
                            at enough to produce 2.8 to 3.3 trillion barrels of oil. Approximately
                            65% of the worldâ€™s oil shale resources are located in the Green River
                            Formation in northwestern Colorado, northeastern Utah and southwestern
                            Wyoming. The majority of the oil shale in the Green River Basin
                            is comprised of marlstone.
                        </p>
                        <p>
                            The GSI in-situ technology can also be used to extract oil from the
                            bitumous tar/oil sands. There are more than 50 tar sands deposits
                            located in eastern Utah, containing an estimated 12 to 19 billion
                            barrels of oil.
                        </p>
                        <div className="additional-links">
                            <h3>Additional Information and Resources:</h3>
                            <a 
                                href = "https://web.archive.org/web/20180819162923/http://en.wikipedia.org/wiki/Oil_shale"
                                target = "_blank"
                                rel = "noopener noreferrer"
                            >
                                HTTP://EN.WIKIPEDIA.ORG/WIKI/OIL_SHALE
                            </a>
                            <a 
                                href = "https://web.archive.org/web/20180819162923/http://ostseis.anl.gov/guide/oilshale/"
                                target = "_blank"
                                rel = "noopener noreferrer"
                            >
                                HTTP://OSTSEIS.ANL.GOV/GUIDE/OILSHALE/
                            </a>
                            <a 
                                href = "https://web.archive.org/web/20171107134031/http://www.instituteforenergyresearch.org/energy-overview/oil-shale/"
                                target = "_blank"
                                rel = "noopener noreferrer"
                            >
                                HTTP://WWW.INSTITUTEFORENERGYRESEARCH.ORG/ENERGY-OVERVIEW/OIL-SHALE/
                            </a>
                            <a 
                                href = "https://web.archive.org/web/20180819162923/http://energy.usgs.gov/OilGas/UnconventionalOilGas/OilShale.aspx"
                                target = "_blank"
                                rel = "noopener noreferrer"
                            >
                                HTTP://ENERGY.USGS.GOV/OILGAS/UNCONVENTIONALOILGAS/OILSHALE.ASPX
                            </a>
                        </div>
                    </div>
                    <div className="para-content">
                        <p>
                            Oil shale deposits have been identified in some 40 countries.
                            Current estimates of recoverable worldwide oil shale resources
                            range from 2.8 - 3.2 trillion barrels (more than twice current
                            proven conventional oil reserves). Recoverable oil from oil
                            shale in the U.S. is estimated between 800 billion to 1.2
                            trillion barrels by the USGS.
                        </p>
                        <div className="shale-map">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}