import React from "react";
import { Grid, Spacer, Table, Text, Textarea} from "@nextui-org/react";



export default function ChecklistItem() {
    return (
        <Grid.Container>
            <Grid>
            <Text h3 b> Checklist for regress</Text>
            </Grid>

            <Grid css={{width:"100%"}}>
                <Table >
                    <Table.Header>
                        <Table.Column width="20%">Procedure</Table.Column>
                        <Table.Column width="10%"> Pass/Fail</Table.Column>
                        <Table.Column width="40%">Comments</Table.Column>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row key={1} >
                            <Table.Cell>Performs primary functionality and maintains stability</Table.Cell>
                            <Table.Cell><span style={{color:'#17C964', fontWeight:"bold"}}>Pass</span></Table.Cell>
                            <Table.Cell css={{wordWrap:"break-word"}}><Textarea css={{width:"100%"}} placeholder="Type any comments"/> </Table.Cell>
                        </Table.Row>
                        <Table.Row key={2}>
                            <Table.Cell>Performs primary functionality </Table.Cell>
                            <Table.Cell><span style={{color:'#17C964', fontWeight:"bold"}}>Pass</span></Table.Cell>
                            <Table.Cell css={{wordWrap:"break-word"}}><Textarea css={{width:"100%"}} placeholder="Type any comments"/> </Table.Cell>
                        </Table.Row>
                        <Table.Row key={3}>
                            <Table.Cell>Maintains stability</Table.Cell>
                            <Table.Cell><span style={{color:'#F31260', fontWeight:"bold"}}>Fail</span></Table.Cell>
                            <Table.Cell css={{wordWrap:"break-word"}}><Textarea css={{width:"100%"}} placeholder="Type any comments"/> </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Grid>
        </Grid.Container>
    )
}

