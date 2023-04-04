import React from "react";
import { Grid, Avatar, Text, Spacer } from "@nextui-org/react";

const TechItem = ({icon, text}) => {
    return (

            <Avatar
            style={{display:"inline-block",margin:"12px"}}
            icon={icon}
            text={text}
            squared
            />

    )
}

const Stack = () => {

    return (
        <Grid.Container alignItems="center" >
            <Grid.Container>
            <Text h2 size={20}>Technologies</Text>
            </Grid.Container>
            <Grid.Container justify="center">
            <Grid>
                <TechItem icon text="Jira"/>
                <TechItem icon text="JS"/>
                <TechItem icon text="Bash"/>
                <TechItem icon text="Cypress"/>
                <TechItem icon text="DevTools"/>
                <TechItem icon text="Postman"/>
            </Grid>
            </Grid.Container>
        </Grid.Container>
    )

}

export default Stack;