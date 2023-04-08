import React from "react";
import { Text, Grid, Image, Spacer } from "@nextui-org/react";

export default function PageDesc({text, src}) {
    return (
        <Grid.Container>
            <Grid>
                <Image src={src}/>
                <Spacer y={1}/>
            </Grid>

            <Grid>
                <Text>{text}</Text>
                <Spacer y={1}/>
            </Grid>
        </Grid.Container>
    )
}