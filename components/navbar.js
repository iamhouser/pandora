import { Navbar, Text, Switch} from "@nextui-org/react";
import React from "react";
import Theme from "./theme";

const Navigation = () => {

    const [variant, setVariant] = React.useState("sticky");
    const [activeColor, setActiveColor] = React.useState("primary")
    return (

                <Navbar variant={variant}>
                    <Navbar.Brand>
                        <Text b color='inherit' hideIn='xs'>

                                Houser   

                        </Text>
                    </Navbar.Brand>

                    <Navbar.Content hideIn='xs' variant="highlight">
                        <Navbar.Link href='#' isActive >My projects</Navbar.Link>
                        <Navbar.Link href='https://github.com/iamhouser/pandora' target="_blank">Source</Navbar.Link>
                        <Navbar.Link href='#'>Donate</Navbar.Link>
    
                    </Navbar.Content>

                    <Navbar.Content>
                        <Theme/>
                    </Navbar.Content>
                </Navbar>



    )

}

export default Navigation
