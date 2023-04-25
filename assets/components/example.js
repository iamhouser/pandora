import React from "react";
import { Grid, Text, Button, Tooltip, Spacer, Link } from "@nextui-org/react"

export default function Example () {
    const HandleNavigateToDocs = () => {
        router.push('/doc')
    }
    return (
        <Grid.Container>
            <Grid.Container>
                <Grid>
                    <Text h2 size={20}>Test Documentation for this website</Text>
                </Grid>
            </Grid.Container>

            <Grid>
                <Text> If you want to see a real examples how I am creating the test documentation, you can check these in the documentation Section. The documentation made with the example of this site, so feel free to explore! </Text>
            </Grid>
            <Spacer y={1}/>
            <Grid.Container justify="center">
                <Grid>
                <Link href="/doc" onClick={HandleNavigateToDocs}>
                        <Button color="gradient" size="xl" shadow auto animated>
                            Documentation
                        </Button>
                </Link>
                </Grid>
            </Grid.Container>
            <Spacer y={1}/>
        </Grid.Container>
    )
}