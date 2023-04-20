import React from "react";
import { Grid, Image, Text, Button, Link, Container, Spacer } from "@nextui-org/react";

import Router, { useRouter } from "next/router";
import Footer from "../../assets/components/footer";



export default function ErrorPage() {

    const router = useRouter()
    
    const HandleNavigateToHome = () => {
        router.push('/')
    }

    return (
        <Container style={{maxWidth:"800px", margin:"auto"}}>
            <Grid.Container style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100hv"}}>
                <Grid style={{alignItems:"center", paddingTop:"15%"}} justify="center">
                    <Image src="/images/michael.gif"/>
                    <Spacer y={2}/>
                </Grid>
                <Grid  style={{alignItems:"center"}} justify="center">
                    <Text h1>Oops, we dont have such page</Text>
                    <Spacer y={2}/>
                </Grid>
        
                <Button onPress={HandleNavigateToHome} shadow>Home</Button>
                
            </Grid.Container>

            <Spacer y={4}/>

            <Footer/>
            <Spacer y={1}/>
        </Container>
    )
}
