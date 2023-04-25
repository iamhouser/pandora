import React from "react";
import { Grid, Table, Text, Spacer } from "@nextui-org/react";
import ResumeButton from "./resumeButton";



export default function Experience() {

    const calculation = function(startMonth, startYear, endMonth, endYear) {

        let year = (endYear - startYear)*12
        let result = (year + (endMonth - startMonth))/12
        let regexp = /\w+$/gm

        if (result > 0) {
            return (result.toFixed() + ' years and ' + String(Math.round(result * 10)/10).match(regexp) + ' months')
        }

        return (String(Math.round(result * 10)/10) + ' months')


    }

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
                        01.2022 - 03.2023
                        <Text color="primary">{calculation(1, 2022, 3, 2023)} <Text span color="success">(now)</Text></Text>
                        </Table.Cell>
                        <Table.Cell>PUSK LTD</Table.Cell>
                        <Table.Cell>Manual QA Tester</Table.Cell>
                        <Table.Cell css={{wordWrap:"break-word", whiteSpace:"pre-line"}}>

                            <Text> - Test Websites and Web Applications (Vue3, React)</Text>
                            <Text> - Identified and documented 500+ bugs in Jira and JetBrains Space.</Text>
                            <Text> - Create and maintain test documentation, including 200+  test cases, checklists and bug reports by using test design techniques.</Text>
                            <Text> - Developed comprehensive test suites for REST API using Postman/Insomnia, resulting in 90% reduction in critical defects</Text>
                            <Text> - Performed tests on the Client side: UI, Localization, Functionality, Loading, and Usability</Text>
                            <Text> - Performed a Security tests, which help to discover a critical security vulnerability that allowed unauthorized access to sensitive user data</Text>

                        </Table.Cell>
                    </Table.Row>

                    </Table.Body>
                </Table>
                <Spacer y={2}/>
            </Grid>
        </Grid.Container>
    )
}