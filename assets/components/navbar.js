import { Navbar, Text, Switch, Button, Grid, Link, Avatar} from "@nextui-org/react";
import React from "react";
import Theme from "./theme";
import { useRouter } from "next/router";
import ModalDonate from "./donateQr";
import UserCount from "./UserCount";
import { FaGithub } from "react-icons/fa";

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

            
                <Navbar variant={variant} style={{zIndex:"1000"}} >
                    <Navbar.Brand>
                        <Link href="/" onClick={HandleNavigateToHome}>Houser</Link>
                    </Navbar.Brand>



                    <Navbar.Content  variant="highlight" gap={"$0"} style={{justifyContent:"center"}}>
                        <Navbar.Item>
                        <Navbar.Link href='/' isActive={router.pathname === '/'} onClick={HandleNavigateToHome}>Home</Navbar.Link>
                        </Navbar.Item>

                        <Navbar.Item>
                        <Navbar.Link href='/doc' isActive={router.pathname === '/doc'} onClick={HandleNavigateToDocs}>Docs</Navbar.Link>
                        </Navbar.Item>

                        <Navbar.Item>
                        <Navbar.Link href='https://github.com/iamhouser/pandora' target="_blank" ><FaGithub style={{width:"26px", height:"26px", paddingLeft:"0"}}/>Source</Navbar.Link>
                        </Navbar.Item>

                    </Navbar.Content>


                    <Navbar.Content >
                        <UserCount/>
                        <ModalDonate/>

                    </Navbar.Content>



                </Navbar>




    )

}

export default Navigation
