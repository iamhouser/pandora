import React from "react";
import { Container, Grid, Spacer } from "@nextui-org/react";

import Navigation from "../../assets/components/navbar"
import CollapseHeader from "../../assets/components/collapseHeader";
import PageDesc from "../../assets/components/PageDesc";
import CardTextItem from "../../assets/components/CardTextItem";
import Footer from "../../assets/components/footer";
import ChecklistItem from "../../assets/components/ChecklistItem";

export default function Docs() {
    return (
        <Container style={{ margin:"0 auto", maxWidth: "900px"}} >

            <Navigation/> 
            <PageDesc 
                src={"/images/cover.jpg"}
                text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&aposs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}
            />

            <CardTextItem/>
            <Spacer y={1}/>

            <CardTextItem/>
            <Spacer y={1}/>

            <ChecklistItem/>
            <Spacer y={1}/>

            <Footer/>
            <Spacer y={1}/>
        </Container>
    )
} 
