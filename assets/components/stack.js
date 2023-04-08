import React from "react";
import { Grid, Avatar, Text, Spacer, Tooltip } from "@nextui-org/react";
import { FaJira, FaTools, FaGithub } from "react-icons/fa";
import { SiJavascript, SiCypress, SiPostman, SiGnubash, SiMysql} from "react-icons/si"
import {BsFiletypeSql} from "react-icons/bs"

const TechItem = ({icon, text, src}) => {
    return (
        <Tooltip style={{display:"inline-block"}} content={text}>
            <Avatar
            style={{display:"inline-block",margin:"12px"}}
            {...{icon, text, src}}
            squared
            />
        </Tooltip>

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
                <TechItem icon={<FaTools size={20}/>} text="DevTools"/>
                <TechItem icon={<SiPostman size={20} color=""/>} text="Postman"/>
                <TechItem icon={<FaGithub size={20}/>} text="Github"/>
                <TechItem icon={<BsFiletypeSql size={20}/>} text="MySQL"/>
            </Grid>
            </Grid.Container>
        </Grid.Container>
    )

}

export default Stack;