import styled from "styled-components";

export const AdvisoryTeamPage = styled.div`
    padding-bottom: 5%;
`

export const TeamTitle = styled.h3`
    color: ${ props => props.theme.secondaryFontColor };
    font-size: 25px;
    line-height: 25px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    margin: 50px 0 0 50px;
`

export const MemberName = styled.h3`
    color: ${ props => props.theme.secondaryFontColor };
    font-weight: bold;
    font-size: 25px;
    line-height: 25px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    margin: 50px 0 0 20%;

    @media (max-width: 700px) {
        margin-left: 0;
    }
`

export const MemberDesignation = styled.h5`
    font-size: 18px;
    color: ${ props => props.theme.secondaryFontColor };
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    margin: 0 0 0 20%;

    @media (max-width: 700px) {
        margin-left: 0;
    }
`

export const MemberDesc = styled.p`
    font-size: 17px;
    color: ${ props => props.theme.septenaryFontColor };
    line-height: 18px;
    margin-left: 20%;
    width: 50%;

    @media (max-width: 700px) {
        margin-left: 0;
        width: 100%;
        text-align: justify;
    }
`