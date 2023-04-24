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
        <Container>
            <Grid.Container style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "0 auto", maxWidth: "900px", paddingTop:"10%" }}>
                <Grid justify="center">
                    <Image src="/images/michael.gif"/>

                </Grid>
                <Spacer/>
                <Grid>
                    <Text h1>Oops, we dont have such page</Text>

                </Grid>
                <Spacer/>
                <Grid >
                    <Button onPress={HandleNavigateToHome} shadow>Home</Button>
                </Grid>
                
            </Grid.Container>

            <Spacer y={4}/>

            <Footer/>

        </Container>
    )
}
