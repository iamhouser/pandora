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
                        <Table.Column width="30%">Period</Table.Column>
                        <Table.Column width="20%">Place</Table.Column>
                        <Table.Column width="15%">Position</Table.Column>
                        <Table.Column>Requirements</Table.Column>

                    </Table.Header>
                    <Table.Body>

                    <Table.Row >
                        <Table.Cell>
                        2022-02 - 2023-08 {/*add dynamical calculation date */}
                        <Text color="primary">1 year 8 months <Text span color="success">(now)</Text></Text>
                        </Table.Cell>
                        <Table.Cell>PUSK LTD</Table.Cell>
                        <Table.Cell>Tester</Table.Cell>
                        <Table.Cell css={{wordWrap:"break-word", whiteSpace:"pre-line"}}>
                            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                            <Text style={{wordBreak:"break-all"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                            <Text></Text>
                            <Text></Text>
                            <Text></Text>
                        </Table.Cell>
                    </Table.Row>

                    </Table.Body>
                </Table>
                <Spacer y={2}/>
            </Grid>
        </Grid.Container>
    )
}