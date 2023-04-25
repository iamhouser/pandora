import React from "react";
import { Card, Grid, Spacer, Text, Link } from "@nextui-org/react";

export default function CardTextItem({title, header, step1, step2, result}) {
    return(
        <Grid.Container >
            <Grid style={{width:"100%"}}>
                <Spacer/>
                <Text h3 b> <Link href="/doc#case1"></Link>{title}</Text>
                <Spacer/>
                <Card >
                    <Card.Header>
                        <Text b>{header}</Text>
                    </Card.Header>
                    <Card.Divider/>
                    <Card.Body>
                        <Text b>Steps for reproduce:</Text>
                        <Spacer/>
                        <Text className="TabCase">
                            <ol>
                                <li>{step1}</li>
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
                        <Text className="TabCase">{result}</Text>
                    </Card.Body>
                    <Card.Footer>
                        <Text>me, just me</Text>
                    </Card.Footer>
                </Card>
            </Grid>
        </Grid.Container>
    )
}