import { Navbar, Text, Switch, Button, Grid} from "@nextui-org/react";
import React from "react";
import Theme from "./theme";
import { useRouter } from "next/router";
import ModalDonate from "./donateQr";

const Navigation = () => {
    const router = useRouter()
    const [variant, setVariant] = React.useState("sticky");
    const [activeColor, setActiveColor] = React.useState("primary")
    return (
        <Grid.Container>

                <Navbar variant={variant}>
                    <Navbar.Brand>
                        <Text b color='inherit' hideIn='xs'> Houser </Text>
                    </Navbar.Brand>

                    <Navbar.Content hideIn='xs' variant="highlight" >
                        <Navbar.Link href='/' isActive={router.pathname === '/'} >Home</Navbar.Link>
                        <Navbar.Link href='/doc' isActive={router.pathname === '/doc'}>Docs</Navbar.Link>
                        <Navbar.Link href='https://github.com/iamhouser/pandora' target="_blank">Source</Navbar.Link>
                    </Navbar.Content>


                    <Navbar.Content>
                        <ModalDonate/>
                        {/* <Theme/> */}
                    </Navbar.Content>
                </Navbar>

        </Grid.Container>


    )

}

export default Navigation
