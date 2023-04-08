import React from "react";
import { Text, Grid, Avatar, Spacer } from "@nextui-org/react";

const Name = () => {
    return(
        <Grid.Container justify="space-between" alignItems="center">
            <Grid >
                <Text
                h2
                size={40}
                >
                    Evgeny Domnin
                </Text>
                <Text>Quality Assurance Engineer</Text>
            </Grid>

            <Grid>
            <Avatar
                    // src="/images/me.png"
                    css={{size:"100px"}}
                    src="/images/me.jpg"
                    textColor="white"
                    bordered
                    color="gradient"
                />
            </Grid>
          
        </Grid.Container>
        
    )
}

export default Name;