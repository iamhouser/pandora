import React from "react";
import { Container, Grid } from "@nextui-org/react";

import Navigation from "../../assets/components/navbar"
import CollapseHeader from "../../assets/components/collapseHeader";
import PageDesc from "../../assets/components/PageDesc";

export default function Docs() {
    return (
        <Container style={{ margin:"0 auto", maxWidth: "900px"}} >

            <Navigation/> 
            <PageDesc 
                src={"/images/cover.jpg"}
                text={"Caroch zdes' text Ya hz"}
            />
            <CollapseHeader 
                title={"Checklist"}
                subtitle={"List of the test checklist for this website"}
                desc={""}
            />

            

        </Container>
    )
} 
