import React from "react";
import { Card, Grid, Spacer, Text } from "@nextui-org/react";

export default function CardTextItem() {
    return(
        <Grid.Container >
            <Grid style={{width:"100%"}}>
                <Spacer/>
                <Text h3 b> Test case for login</Text>
                <Spacer/>
                <Card >
                    <Card.Header>
                        <Text b>Checking for correct using</Text>
                    </Card.Header>
                    <Card.Divider/>
                    <Card.Body>
                        <Text b>Steps for reproduce:</Text>
                        <Spacer/>
                        <Text>&emsp;1. hello!</Text>
                        <Text>&emsp;2. hello!</Text>
                        <Text>&emsp;3. hello!</Text>
                        <Spacer/>
                        <Text b>Expected Result:</Text>
                        <Spacer/>
                        <Text>&emsp;Idk to be honest</Text>
                    </Card.Body>
                    <Card.Footer>
                        <Text>me, just me</Text>
                    </Card.Footer>
                </Card>
            </Grid>
        </Grid.Container>
    )
}