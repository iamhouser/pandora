import React from "react";
import { Grid, Spacer, Table, Text, Textarea} from "@nextui-org/react";



export default function ChecklistItem() {
    return (
        <Grid.Container>
            <Grid>
            <Text h3 b> Checklist for regress</Text>
            </Grid>

            <Grid style={{width:"100%"}}>
                <Table css={{minWidth:"100%", height:"auto"}} >
                    <Table.Header>
                        <Table.Column width="0%">Procedure</Table.Column>
                        <Table.Column width="0%"> Pass/Fall</Table.Column>
                        <Table.Column width="0%">Comments</Table.Column>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row key={1}>
                            <Table.Cell>Performs primary functionality and maintains stability</Table.Cell>
                            <Table.Cell>Pass</Table.Cell>
                            <Table.Cell css={{wordWrap:"break-word"}}><Textarea placeholder="Type any comments"/> </Table.Cell>
                        </Table.Row>
                        <Table.Row key={2}>
                            <Table.Cell>Performs primary functionality </Table.Cell>
                            <Table.Cell>Pass</Table.Cell>
                            <Table.Cell css={{wordWrap:"break-word"}}><Textarea placeholder="Type any comments"/> </Table.Cell>
                        </Table.Row>
                        <Table.Row key={3}>
                            <Table.Cell>Maintains stability</Table.Cell>
                            <Table.Cell>Fall</Table.Cell>
                            <Table.Cell css={{wordWrap:"break-word"}}><Textarea placeholder="Type any comments"/> </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Grid>
        </Grid.Container>
    )
}
