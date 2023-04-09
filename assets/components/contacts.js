import React from "react";
import { Text, Link, Container, Avatar, Grid, Icon } from "@nextui-org/react";
import {
    FaTelegramPlane, 
    FaFacebook, 
    FaInstagram, 
    FaCode, 
    FaLinkedinIn, FaGithub} from "react-icons/fa"
    
const ContactItem = ({icon, link, text, src, color}) => {
    return(

        <Grid>
            <Grid css={{ p: 5 }}>
            <Avatar 
                bordered 
                squared 

                icon={icon} 
                style={{display:"inline-block"}}
                src={src}
            />
                <Link css={{p: 5}} href={link} target="_blank" isExternal>
                    {text}
                </Link>
            </Grid>
        </Grid> 
    )
}



const Contacts = () => {


    return (

        <Grid.Container justify="space-around">

            <Grid.Container>
                <Text h2 size={20}>Contacts</Text>
            </Grid.Container>

            <Grid>
                <ContactItem icon={<FaTelegramPlane size={25}/>} link="https://t.me/e_domnin" text="Telegram" ></ContactItem>
                <ContactItem icon={<FaFacebook  size={25}/>} link="#" text="Facebook"></ContactItem>
                <ContactItem icon={<FaLinkedinIn  size={25}/>} link="https://linkedin.com" text="Linkedin"></ContactItem>
            </Grid>

            <Grid>
                <ContactItem icon={<FaInstagram  size={25}/>}  link="https://instagram.com/iamhouser" text="Instagram"></ContactItem>
                <ContactItem icon={<FaCode size={25}/>} link="https://www.codewars.com/users/housers" text="Codewars"></ContactItem>
                <ContactItem icon={<FaGithub size={25}/>} link="https://github.com/iamhouser" text="Github"></ContactItem>
             </Grid>
        </Grid.Container>


    )

}

export default Contacts


