import React from "react";
import { Grid, Text, Collapse } from "@nextui-org/react";

export default function CollapseGroup () {
    return (
        <Grid css={{width:"100%"}}>
            <Collapse.Group shadow>
                <Collapse title="1"></Collapse>
                <Collapse title="1"></Collapse>
                <Collapse title="1"></Collapse>
                
            </Collapse.Group>
        </Grid>
    )
}