import styled from "styled-components";

export const ShalePage = styled.div`
    padding-bottom: 5%;
`

export const ShaleImageHeader = styled.img`
    width: 100%;
    max-height: 250px;

    @media (max-width: 700px) {
        min-height: 125px;
    }
`

export const ShaleTitle = styled.h3`
    margin-top: 100px;
    font-size: 25px;
    letter-spacing: 2px;
    color: ${ props => props.theme.secondaryFontColor };
    text-transform: uppercase;
    font-weight: 600;
`

export const ShaleMapImage = styled.img`
    width: 100%;
    max-height: 275px;
`

export const ParaContainer = styled.div`
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 700px) {
        flex-direction: column;
    }
`

export const ParaContent = styled.div`
    width: 45%;
    
    @media (max-width: 700px) {
        width: 100%;
        margin-top: 50px;
    }
`

export const StyledP = styled.p`
    margin-bottom: 15px;
    margin-top: 0px;
    color: ${ props => props.theme.secondaryFontColor };
    font-weight: 400;
    text-align: justify;
`

export const AdditionLinksTitle = styled.h3`
    font-size: 16px;
    color: ${ props => props.theme.secondaryFontColor };
    font-weight: 600;
    margin-top: 50px;
`

export const AdditionalLinks = styled.a`
    display: block;
    font-size: 12px;
    color: ${ props => props.theme.secondaryFontColor };
    margin-top: 25px;
    margin-left: 25px;
    
    @media (max-width: 700px) {
        display: block;
        margin-left: 0;
        overflow: hidden;
    }

`