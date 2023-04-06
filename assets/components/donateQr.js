import React, { useState } from "react";
import { Modal, Image, Text, Button, Grid, Spacer } from "@nextui-org/react";


export default function ModalDonate() {
    const [visible, setIsVisible] = useState(false)
    const handler = () => setIsVisible(true)
    const closeHandler = () => setIsVisible(false)

    return (
        <Grid.Container>
            <Grid>
                <Button auto color={"primary"} onPress={handler}>🔥</Button>
                <Modal open={visible} onClose={closeHandler} closeButton>
                    <Modal.Header>
                        <Text h3 b> You can support me here!</Text>
                    </Modal.Header>

                    <Modal.Body>
                        <Image src="images/bmc_qr.png"/>
                        <Spacer/>
                    </Modal.Body>
                </Modal>
            </Grid>
        </Grid.Container>
    )
 }