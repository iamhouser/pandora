import { Navbar, Text, Switch, Button, Grid, Link} from "@nextui-org/react";
import React from "react";
import Theme from "./theme";
import { useRouter } from "next/router";
import ModalDonate from "./donateQr";
import UserCount from "./UserCount";

const Navigation = () => {
    const router = useRouter()
    const HandleNavigateToHome = () => {
        router.push('/')
    }
    const HandleNavigateToDocs = () => {
        router.push('/doc')
    }
    const [variant, setVariant] = React.useState("sticky");
    const [activeColor, setActiveColor] = React.useState("primary")
    return (
        <Grid.Container >
            
                <Navbar variant={variant} >
                    <Navbar.Brand>
                        <Text b color='inherit' hideIn='xs'> <Link href="/" onClick={HandleNavigateToHome}>Houser</Link> </Text>
                    </Navbar.Brand>

                    <Navbar.Content hideIn='xs' variant="highlight" style={{justifyContent:"center"}}>
                        <Navbar.Link href='/' isActive={router.pathname === '/'} onClick={HandleNavigateToHome}>Home</Navbar.Link>
                        <Navbar.Link href='/doc' isActive={router.pathname === '/doc'} onClick={HandleNavigateToDocs}>Docs</Navbar.Link>
                        <Navbar.Link href='https://github.com/iamhouser/pandora' target="_blank">Source</Navbar.Link>
                    </Navbar.Content>


                    <Navbar.Content >
                        <UserCount/>
                        <ModalDonate/>
                        {/* <Theme/> */}
                    </Navbar.Content>
                </Navbar>

        </Grid.Container>


    )

}

export default Navigation
