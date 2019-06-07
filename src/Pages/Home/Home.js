import React from "react";
import Header from "../../Components/Header/Header";
import { homeBackground } from "../../config"
import { ImgContainer, HomeImg, ImgContent, HomeTitle } from "./style";

export default function home() {
    return (
        <div>
            <Header />
            <ImgContainer>
                <HomeImg src={homeBackground} alt="home" />
                <ImgContent>
                    <HomeTitle>A NEW APPROACH TO RECOVERING OIL AND GAS FROM OIL SHALE</HomeTitle>
                </ImgContent>
            </ImgContainer>

        </div>
    );
}
