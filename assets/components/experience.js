import React from "react";
import { Grid, Table, Text, Spacer } from "@nextui-org/react";
import ResumeButton from "./resumeButton";



export default function Experience() {

    return(

        <Grid.Container>
            <Grid.Container justify="space-between" css={{alignItems:"center"}}>
                <Grid>
                <Text h2 size={20}>Work Experience</Text>
                </Grid>
                <Grid>
                    <ResumeButton/>
                </Grid>
            </Grid.Container>
            <Grid style={{width:"100%"}} >
                <Table>
                    <Table.Header>
                        <Table.Column width="25%">Period</Table.Column>
                        <Table.Column width="15%">Place</Table.Column>
                        <Table.Column width="25%">Position</Table.Column>
                        <Table.Column width={"50%"}>Requirements</Table.Column>

                    </Table.Header>
                    <Table.Body>

                    <Table.Row >
                        <Table.Cell>
                        2022-02 - 2023-08 {/*add dynamical calculation date */}
                        <Text color="primary">1 year 8 months <Text span color="success">(now)</Text></Text>
                        </Table.Cell>
                        <Table.Cell>PUSK LTD</Table.Cell>
                        <Table.Cell>Manual QA Tester</Table.Cell>
                        <Table.Cell css={{wordWrap:"break-word", whiteSpace:"pre-line"}}>
                            <Text> - Test Websites and Web Applications (Vue3, React)</Text>
                            <Text> - Identified and documented bugs in Jira, JetBrains Space</Text>
                            <Text> - Created a test documentation for projects (test cases, checklists, bug reports)</Text>
                            <Text> - Performed tests for REST API via Postman/Insomnia</Text>
                            <Text> - Performed tests on the Client side: UI, Localization, Functionality, Loading, and Usability</Text>
                            <Text> - Performed a Security tests</Text>
                        </Table.Cell>
                    </Table.Row>

                    </Table.Body>
                </Table>
                <Spacer y={2}/>
            </Grid>
        </Grid.Container>
    )
}