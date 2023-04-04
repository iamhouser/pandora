import React from "react";
import { Text, Link, Container, Avatar, Grid, Icon } from "@nextui-org/react";
import { FaTelegram } from 'react-icons/fa'

const ContactItem = ({icon, link, text}) => {
    return(
        <Grid.Container alignItems="center" css={{ p: 2 }}>
            <Avatar squared icon={icon}/>
            <Grid css={{ p: 5 }}>
                <Link href={link} isExternal>
                    {text}
                </Link>
            </Grid>
        </Grid.Container>
    )
}



const Contacts = () => {


    return (
        <Grid.Container >
             <ContactItem icon link="https://t.me/e_domnin" text="Telegram"></ContactItem>

             <ContactItem icon link="https://telegram.org" text="Facebook"></ContactItem>

             <ContactItem icon link="https://telegram.org" text="Linkedin"></ContactItem>

        </Grid.Container>
    )

}

export default Contacts


