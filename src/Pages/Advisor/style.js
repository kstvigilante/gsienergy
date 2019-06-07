import styled from "styled-components";

export const AdvisorPage = styled.div`
    padding-bottom: 5%;
`

export const AdvisorTitle = styled.h3`
    color: ${ props => props.theme.secondaryFontColor };
    font-size: 25px;
    line-height: 25px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    margin: 100px 0 0 10%;
`

export const AdvisorName = styled.h3`
    color: ${ props => props.theme.secondaryFontColor };
    font-size: 25px;
    line-height: 25px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    margin: 50px 0 0 20%;
`

export const AdvisorDesg = styled.h5`
    color: ${ props => props.theme.secondaryFontColor };
    font-size: 20px;
    line-height: 25px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0 0 0 20%;
    font-weight: 400;
`

export const AdvisorDesc = styled.p`
    font-size: 18px;
    font-weight: 400px;
    letter-spacing: 2px;
    color: ${ props => props.theme.secondaryFontColor };
    margin-left: 20%;
`