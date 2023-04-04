import React from "react";
import { Grid, Avatar, Text, Spacer } from "@nextui-org/react";
import { FaJira } from "react-icons/fa";
import { SiJavascript, SiCypress, SiPostman, SiGnubash} from "react-icons/si"

const TechItem = ({icon, text, src}) => {
    return (

            <Avatar
            style={{display:"inline-block",margin:"12px"}}
            icon={icon}
            text={text}
            src={src}
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
                <TechItem icon={<FaJira size={20} color="default"/>} text="Jira"/>
                <TechItem icon={<SiJavascript size={20} color=""/>} text="JS"/>
                <TechItem icon={<SiGnubash size={20} />} text="Bash"/>
                <TechItem icon={<SiCypress  size={20}/>} text="Cypress"/>
                <TechItem icon text="DevTools"/>
                <TechItem icon={<SiPostman size={20} color=""/>} text="Postman"/>
            </Grid>
            </Grid.Container>
        </Grid.Container>
    )

}

export default Stack;