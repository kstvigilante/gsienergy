import styled from "styled-components";

export const TechImgContainer = styled.div`
    position: relative;
`

export const TechImage = styled.img`
    max-height: 300px;
    width:100%;

    @media (max-width: 700px){    
        min-height: 180px;
    }
`

export const TechTitleCont = styled.div`
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    width: 90%;
    max-width: 1440px;
    margin: 0 auto;
`

export const TechTitle = styled.h3`
    margin:0;
    color: ${ props => props.theme.primaryFontColor };
    font-weight: 400;
`

export const TechContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 50px 0;

    @media (max-width: 700px){
        flex-direction: column;
    }
`

export const TechContent = styled.div`
    width: 45%;

    @media (max-width: 700px){
        width: 100%;
    }
`

export const TechOverView = styled.div`
    color: ${ props => props.theme.secondaryFontColor };
    font-weight: 600;
    font-size: 25px;
    line-height: 25px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
`

export const TechOverViewDesc = styled.p`
    color: ${ props => props.theme.secondaryFontColor };
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
`

export const TechHeading = styled.h6`
    color: ${ props => props.theme.tertiaryFontColor };
    text-transform: uppercase;
    font-size: 18px;
    line-height: 20px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 0px;
`

export const TechDesc = styled.p`
    padding-left: 10px;
    line-height: 20px;
    font-style: italic;
    color: ${ props => props.theme.secondaryFontColor };
    margin: 5px 0 0 0;
`

export const ListITemDesc = styled.li`
    padding-left: 10px;
    line-height: 20px;
    color: ${ props => props.theme.secondaryFontColor };
    margin: 20px 0 0 0;
`

export const ListFooter = styled.p`
    color: ${ props => props.theme.secondaryFontColor };
`

export const KeyProcessImg = styled.img`
    margin-top: 50px;
    max-height: 385px;
    width: 100%;
`