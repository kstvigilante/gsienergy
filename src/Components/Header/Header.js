import React from "react";
import { Logo } from "../../config";
import { StyledHeader, HeaderCont, HeaderLinks, StyledLink } from "./style"
import { Container } from "../../appStyle";

export default function Header() {
    return (
        <StyledHeader>
            <Container>
                <HeaderCont>
                    <img src={Logo} alt="gsi" />
                    <HeaderLinks>
                        <StyledLink exact to="/" activeClassName="active-link"> home </StyledLink>
                        <StyledLink to="/about" activeClassName="active-link"> about </StyledLink>
                        <StyledLink to="/shale" activeClassName="active-link"> oil shale </StyledLink>
                        <StyledLink to="/technology" activeClassName="active-link"> technology </StyledLink>
                        <StyledLink to="/advantage" activeClassName="active-link"> gsi advantage </StyledLink>
                        <StyledLink to="/contact" activeClassName="active-link"> contact us </StyledLink>
                        {/* <StyledLink to="/documents" activeClassName="active-link"> technical documents </StyledLink> */}
                    </HeaderLinks>
                </HeaderCont>
            </Container>
        </StyledHeader>
    )
}