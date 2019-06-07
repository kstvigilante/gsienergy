import styled from 'styled-components'
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.div`
    background-color: ${props => props.theme.headerBgColor};
`

export const HeaderCont = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;

    @media (max-width: 1210px) {
        flex-direction: column;
        align-items: center;
    }
`
export const HeaderLinks = styled.div`
    display: flex;
    align-content: center;

    @media (max-width: 1010px) {
        width: 100%;
        flex-direction: column;
        align-content: center;
    }
`

export const StyledLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${ props => props.theme.primaryFontColor };
    text-decoration: none;
    text-transform: uppercase;
    padding: 0 1rem;
    transition: background 300ms ;

    &:hover{
        background-color: ${ props => props.theme.linkHoverBgColor };
    }

    @media (max-width: 1010px) {
        padding: 0.5rem 0;
    }
`

