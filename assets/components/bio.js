import React from "react";
import { Grid, Text } from "@nextui-org/react";

const Bio = () => {
    return (
        <Grid.Container>
            <Text h2 size={20}>
                Bio
            </Text>
            <Grid>
                <Text>
                Manual Software Tester with over a year of experience in functional, regression, integration, and user acceptance testing. Skilled in identifying defects, providing detailed bug reports, and working closely with developers to resolve issues. Experience with Frontend and Backend testing 
                </Text>
            </Grid>
        </Grid.Container>
    )
}

export default Bio;