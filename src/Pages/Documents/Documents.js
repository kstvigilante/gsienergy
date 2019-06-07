import React from "react";
import Header from "../../Components/Header/Header";
import { documentImg } from "../../config";
import { Container } from "../../appStyle";
import { DocHeader, DocTitle} from "./style";

export default function Documents() {
    return (
        <div>
            <Header />
            <DocHeader src = {documentImg} alt = "documents" />

            <Container>
                <DocTitle>technical documents</DocTitle>
            </Container>
        </div>
    )
}