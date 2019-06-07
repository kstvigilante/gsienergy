import styled from "styled-components";

export const AdgPage = styled.div`
    background-color: ${ props => props.theme.primaryBgColor };
    padding-bottom: 5%;
`

export const EnvHeader = styled.div`
    position: relative;
`

export const EnvHeaderImg = styled.img`
    max-height: 300px;
    width: 100%;

    @media (max-width: 700px) {
        min-height: 125px;
    }
`

export const EnvTitleCont = styled.div`
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    width: 70%;
    max-width: 1440px;
    margin: 0 auto;
`

export const EnvTitle = styled.h3`
    color: ${ props => props.theme.primaryFontColor };
    font-weight: 400;
`

export const AdgContainer = styled.div`
    width: 70%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const AdgContent = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
`

export const GsiTitle = styled.h3`
    color: ${ props => props.theme.secondaryFontColor };
    font-weight: bold;
    font-size: 25px;
    line-height: 25px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
    margin-top: 50px;
`

export const GsiDesc = styled.p`
    font-size: 16px;
    color: ${ props => props.theme.septenaryFontColor };
    line-height: 18px;
    margin: 0;
    font-weight: 600;
`

export const AdgTitle = styled.div`
    font-size: 23px;
    color: ${ props => props.theme.quaternaryFontColor };
    line-height: 30px;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    margin: 2rem 0 0 0;
    display: flex;
    align-items: center;
`

export const AdgTitleText = styled.span`
    margin-left: 15px;
`

export const AdgMainPara = styled.p`
    font-size: 17px;
    color: ${ props => props.theme.septenaryFontColor };
    line-height: 18px;
`

export const AdgSubTitle = styled.h3`
    color: ${ props => props.theme.quinaryFontColor };
    margin-bottom: 0px;
    margin-left: 32px;
    margin-top: 2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 20px;
    font-size: 16px;
    font-weight: bold;
`

export const AdgPara = styled.p`
    font-size: 16px;
    color: ${ props => props.theme.septenaryFontColor };
    line-height: 18px;
    margin: 0 0 0 32px;
    font-weight: 400;
`

export const AdgList = styled.ul`
    margin-left: 32px;
    margin-top: 0px;
`

export const AdgListItem = styled.li`
    font-size: 16px;
    color: ${ props => props.theme.septenaryFontColor };
    line-height: 18px;
    padding-top: 15px;
    font-weight: 400;
`

export const GsiImgCont = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 700px) {
        flex-direction: column
    }
`

export const GsiImgDesc = styled.div`
    width: 50%;
    
    @media (max-width: 700px) {
        width: 100%;
    }
`

export const GsiAdg = styled.div`
    width: 45%;

    @media (max-width: 700px) {
        width: 100%;
    }
`

export const GsiAdgImg = styled.img`
    max-height: 216px;
    margin-top: 20px;
    width: 100%;
`