import styled from "styled-components";

export const DocHeader = styled.img`
    max-height: 245px;
    width: 100%;

    @media (max-width: 700px){
        min-height: 125px;
    }
`

export const DocTitle = styled.h1`
    color: ${ props => props.theme.secondaryFontColor };
    font-weight: bold;
    font-size: 25px;
    line-height: 25px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
`