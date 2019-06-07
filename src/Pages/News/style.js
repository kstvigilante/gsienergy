import styled from "styled-components";


export const NewsTitle = styled.h3`
    color: ${ props => props.theme.secondaryFontColor };
    font-weight: bold;
    font-size: 25px;
    line-height: 25px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 50px 0 10px 30px;
`

export const NewsLink = styled.a`
    margin-left: 10%;
    margin-top: 50px;
    font-size: 14px;
    text-decoration: underline;
    color: ${ props => props.theme.secondaryFontColor };
    font-weight: 600;
`

export const NewsPara = styled.p`
    font-size: 14px;
    margin: 0 0 0 10%;
    color: ${ props => props.theme.secondaryFontColor };
`