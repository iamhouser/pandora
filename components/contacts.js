import React from "react";
import { Text, Link, Container, Avatar, Grid, Icon } from "@nextui-org/react";
import { FaTelegram } from 'react-icons/fa'

const ContactItem = ({icon, link, text}) => {
    return(

        <Grid>
            <Grid css={{ p: 5 }}>
            <Avatar squared icon={icon} style={{display:"inline-block"}}/>
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
            <Grid>
                <ContactItem icon link="https://t.me/e_domnin" text="Telegram" ></ContactItem>

                <ContactItem icon link="https://telegram.org" text="Facebook"></ContactItem>

                <ContactItem icon link="https://linkedin.com" text="Linkedin"></ContactItem>
            </Grid>
            <Grid>
                <ContactItem icon link="https://instagram.com" text="Instagram"></ContactItem>

                <ContactItem icon link="https://codewars.com" text="Codewars"></ContactItem>
             </Grid>
        </Grid.Container>
    )

}

export default Contacts


