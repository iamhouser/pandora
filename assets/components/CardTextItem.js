import React from "react";
import { Card, Grid, Spacer, Text, Link } from "@nextui-org/react";

export default function CardTextItem() {
    return(
        <Grid.Container >
            <Grid style={{width:"100%"}}>
                <Spacer/>
                <Text h3 b> <Link href="/doc#case1"></Link>Test case for login </Text>
                <Spacer/>
                <Card >
                    <Card.Header>
                        <Text b>Checking for correct using</Text>
                    </Card.Header>
                    <Card.Divider/>
                    <Card.Body>
                        <Text b>Steps for reproduce:</Text>
                        <Spacer/>
                        <Text className="TabCase">
                            <ol>
                                <li>Test</li>
                                <li>Test</li>
                                <li>Test</li>
                                <li>Test</li>
                                <li>Test</li>
                                <li>Test</li>
                                <li>Test</li>
                            </ol>
                        </Text>
                        <Spacer/>
                        <Text b>Expected Result:</Text>
                        <Spacer/>
                        <Text className="TabCase">Idk to be honest</Text>
                    </Card.Body>
                    <Card.Footer>
                        <Text>me, just me</Text>
                    </Card.Footer>
                </Card>
            </Grid>
        </Grid.Container>
    )
}