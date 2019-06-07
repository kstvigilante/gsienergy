import React from "react";
import Header from "../../Components/Header/Header";
import { contactImg } from "../../config";
import { Container } from "../../appStyle";
import { ContactPage, ContactHeader, ContactTitle, 
         AdditionalDetails, Address, UnderLineText, CapitalLetter} 
from "./style"

export default function Contact(){
    return(
        <ContactPage>
            <Header/>
            <ContactHeader alt = "contact" src = {contactImg} />
            <Container>
                <ContactTitle>CONTACT GSI</ContactTitle>
                <CapitalLetter>eneral Synfuels International, Inc.</CapitalLetter>
                <Address>2900 Government Way</Address>
                <Address>Coeur d'Alene, ID 83815</Address>
                <AdditionalDetails>Call: (406) 250-7750 </AdditionalDetails>
                <AdditionalDetails>Email: <UnderLineText>INFO@GSIENERGY.COM</UnderLineText></AdditionalDetails>
            </Container>
        </ContactPage>
    )
}