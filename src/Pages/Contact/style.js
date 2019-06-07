import styled from "styled-components";

export const ContactPage = styled.div`
    padding-bottom: 5%;
`

export const ContactHeader = styled.img`
    max-height: 245px;
    width: 100%;

    @media (max-width: 700px) {
        min-height: 125px;
    }
`

export const ContactTitle = styled.h3`
    color: ${ props => props.theme.secondaryFontColor };
    font-weight: bold;
    font-size: 25px;
    line-height: 25px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
`

export const Address = styled.p`
    margin: 0 0 0 30px;
    color: ${ props => props.theme.secondaryFontColor };
`

export const AdditionalDetails = styled.p`
    margin: 15px 0 0 30px;
    color: ${ props => props.theme.secondaryFontColor };
`

export const UnderLineText = styled.span`
    text-decoration: underline;
`

export const CapitalLetter = styled(Address)`
    &:before{
        content:"g";
        text-transform: capitalize;
        font-size: 32px;
    }
`