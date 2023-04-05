import React from "react";
import { Text, Grid, Spacer } from "@nextui-org/react";

const Footer = () => {
    return(
        <Grid.Container justify="center">
            <Grid>
                <Text size={15}>
                    © {new Date().getFullYear()} Evgeny Domnin. All Rights Reserved.
                </Text>
            </Grid>
            <Spacer/>
            
        </Grid.Container>
    )
}

export default Footer;