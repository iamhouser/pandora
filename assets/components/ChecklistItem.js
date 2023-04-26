import React from "react";
import { Grid, Spacer, Table, Text, Textarea} from "@nextui-org/react";



export default function ChecklistItem({steps = []}) {
    const Listing = () => {
        const result = steps.map((step, index) => 
            <Table.Row key={index} >
                    <Table.Cell css={{wordWrap:"break-word", whiteSpace:"pre-line"}}>{step}</Table.Cell>
                    <Table.Cell><span style={{color:'#17C964', fontWeight:"bold"}}>Pass</span></Table.Cell>
                    <Table.Cell css={{wordWrap:"break-word"}}><Textarea css={{width:"100%", alignItems:"center"}} placeholder="Type any comments"/> </Table.Cell>
             </Table.Row>
        )

        return result
    }
    return (
        <Grid.Container>
            <Grid>
            <Text h3 b> Checklist for regress</Text>
            </Grid>

            <Grid css={{width:"100%"}}>
                <Table >
                    <Table.Header>
                        <Table.Column width="20%">Procedure</Table.Column>
                        <Table.Column width="10%" css={{alignItems:"center"}}> Pass/Fail</Table.Column>
                        <Table.Column width="20%">Comments</Table.Column>
                    </Table.Header>

                    <Table.Body>
                        {Listing()}
                    </Table.Body>
                </Table>
            </Grid>
        </Grid.Container>
    )
}

