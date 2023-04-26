import React from "react";
import { Card, Grid, Spacer, Text, Link } from "@nextui-org/react";

export default function CardTextItem({title, header, steps = [], result}) {
    const newList = () => {
        const done = steps.map((step, index )=> <li key={index}>{step}</li>)
        return <ol>{done}</ol>
    }
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
                            {newList()}
                        </Text>
                        <Spacer/>
                        <Text b>Expected Result:</Text>
                        <Spacer/>
                        <Text className="TabCase">{result}</Text>
                    </Card.Body>
                    <Card.Footer>
                        <Text> <span style={{fontFamily:"monospace", fontSize:"15px"}}>#Functional Testing </span></Text>
                    </Card.Footer>
                </Card>
            </Grid>
        </Grid.Container>
    )
}