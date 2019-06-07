import styled from "styled-components";

export const ImgContainer = styled.div`
    position: relative;
`

export const HomeImg = styled.img`
    max-height: 100vh;
    width: 100%;

    @media (max-width: 700px){
        min-height: 40vh;
    }
`

export const ImgContent = styled.div`
    position: absolute;
    top: 0;
    left: 3%;
`

export const HomeTitle = styled.h3`
    margin-top: 100px;
    color: ${ props => props.theme.primaryFontColor };
    font-weight: 400;
`