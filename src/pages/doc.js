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
                text={"This is the test documentation that I created base on my working experience for this small website"}
            />

            <CardTextItem
                title = {"Donate Button Functionality Test Case"}
                header = {"Ensuring Secure and Reliable Payment Processing"}
                step1 = {"Go to https://pandorame.vercel.app"}
                result = {""}
            />
            <Spacer y={1}/>

            <CardTextItem
                title = {"Donate Button Functionality Test Case"}
                header = {"Ensuring Secure and Reliable Payment Processing"}
                step1 = {"Go to https://pandorame.vercel.app"}
                result = {""}
            />
            <Spacer y={1}/>

            <ChecklistItem/>
            <Spacer y={1}/>

            <Footer/>
            <Spacer y={1}/>
        </Container>
    )
} 
