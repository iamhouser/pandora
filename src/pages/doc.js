import React from "react";
import { Container, Grid, Spacer } from "@nextui-org/react";

import Navigation from "../../assets/components/navbar"
import PageDesc from "../../assets/components/PageDesc";
import CardTextItem from "../../assets/components/CardTextItem";
import Footer from "../../assets/components/footer";
import ChecklistItem from "../../assets/components/ChecklistItem";

export default function Docs() {

    return (
        <Container style={{ margin:"0 auto", maxWidth: "900px"}} >

            <Navigation/> 
            <PageDesc 
                src={"/images/cover.jpg"}
                text={"This is the test documentation that I created base on my working experience for this small website"}
            />

            <CardTextItem
                title = {"Donate Button Functionality Test Case"}
                header = {"Ensuring Secure and Reliable Payment Processing"}
                steps = {
                    [
                        "Verify that the 'Donate' button is visible on the website and is located in a prominent position", 
                        "Click on the 'Donate' button and verify that it navigates to the donation page of the website", 
                        "Verify that the donation page contains a clear and concise explanation of the purpose of the donation",
                        "Verify that the QR code visible and route to Buy Me Coffee merchant by scanning", 
                        "Donate any amount through third party merchant"
                    ]
                }
                result = {"The recipient received the exact amount that was sent"}
            />
            <Spacer y={1}/>

            <CardTextItem
                title = {"Donate Button Functionality Test Case"}
                header = {"Ensuring Secure and Reliable Payment Processing"}
                steps = {
                    [
                        "Verify that the 'Donate' button is visible on the website and is located in a prominent position.", 
                        "Click on the 'Donate' button and verify that it navigates to the donation page of the website", 
                        "Verify that the donation page contains a clear and concise explanation of the purpose of the donation",
                        "Verify that the payment processing system is secure and reliable, and that the donor's payment information is protected", 
                        "Verify that the donor receives a confirmation message after completing the donation process", 
                        "Verify that the funds was arrive to recipient"
                    ]
                }
                result = {"The funds have been arrive to recipient"}
            />
            <Spacer y={1}/>

            <ChecklistItem
                steps = {
                    [
                        "Ensure that all images, videos, and other media elements are loading properly", 
                        "Verify that all links on the website are working correctly and directing to the correct pages", 
                        "Test the website's compatibility across multiple browsers(Firefox, Chrome, Edge, Safari) and devices (iPhone 12, iPad Air, iPhone 7)",
                        "'Download .pdf' button are visible and download the resume in PDF format"
                    ]
                }
            />
            <Spacer y={1}/>

            <Footer/>
            <Spacer y={1}/>
        </Container>
    )
} 
