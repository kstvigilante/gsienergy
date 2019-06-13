import styled from 'styled-components'
import {Link} from "react-router-dom";

export const AboutPage = styled.div`
    padding-bottom: 5%;
`

export const AboutImageHeader = styled.img`
    width: 100%;
    max-height: 250px;

    @media (max-width: 700px) {
        min-height: 125px;
    }
`

export const AboutTitle = styled.h1`
    margin-top: 100px;
    font-size: 25px;
    letter-spacing: 2px;
    color: ${ props => props.theme.secondaryFontColor };
    text-transform: uppercase;
    font-weight: 600;
`

export const AboutPara = styled.p`
    color: ${ props => props.theme.secondaryFontColor };
    width: 40%;
    margin-left: 30px;

    @media (max-width: 700px) {
        width: 100%;
        margin-left: 0;
    }
`
export const CapitalLetter = styled(AboutPara)`
    &:before{
        content:"o";
        text-transform: capitalize;
        font-size: 32px;
    }
`

export const AboutLinks = styled(Link)`
color: #44504E;
    margin: 20px 0px 20px 30px;
    text-transform: uppercase;
`

