import React from "react";
import { Grid, Collapse, Text, Checkbox } from "@nextui-org/react";

import ChecklistItem from "./ChecklistItem";


export default function CollapseHeader ({title, desc, subtitle}) {

    return (
        <Grid.Container >
            <Grid css={{width:"100%"}} >
                <Collapse shadow title={title} subtitle={subtitle} >
                    <Text size={20}>{desc}</Text>
                    <ChecklistItem/>
                </Collapse>
            </Grid>



        </Grid.Container>
    )

}