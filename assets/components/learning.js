import React from "react";
import { Grid, Card, Text, Link } from "@nextui-org/react";

export const LearnItem = ({title, imageUrl, webUrl, description, confirmUrl, textForUrl}) => {
    return (
        <Grid>
                <Card css={{p:"$6", mw:"400px", height:"auto"}} >
                    <Card.Header>
                        <img
                            src={imageUrl}
                            alt=""
                            width={36}
                            height={36}
                        />
                        <Grid.Container css={{pl:"$6"}}>
                            <Grid xs={12}>
                                <Text h3>{title}</Text>
                            </Grid>
                            <Grid xs={12}>
                                <Text css={{color:"$accents8"}}>{webUrl}</Text>
                            </Grid>
                        </Grid.Container>
                    </Card.Header>
                    <Card.Body css={{py:"$2"}}>
                        <Text>{description}</Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link 
                        href={confirmUrl}
                        target="_blank"
                        color="primary"
                        >
                        {textForUrl}
                        </Link>
                    </Card.Footer>
                </Card>
            </Grid>
    )
}


const Learning = () => {

    return (
        
        <Grid.Container gap={2} justify="center" >

            <Grid.Container>

                <Grid>
                <Text h2 size={20}>Certs and Degrees</Text>
                </Grid>

            </Grid.Container>
        
            <Grid.Container justify="center" gap={2} css={{height:"auto",}}>
                <LearnItem 
                    title="The EF Standard English Test" 
                    imageUrl="/images/download.png" 
                    webUrl="englishfirst.com" 
                    description="Completed English testing for non-English speakers"
                    confirmUrl="https://efset.org/cert/2Q736s" 
                    textForUrl="Check the certificate"
                />



                <LearnItem
                    title={"Moscow State University of Water Transport"}
                    imageUrl={"/images/msawt.jpeg"}
                    webUrl={"msawt.ru"}
                    description={"Department of navigation and fleet operation"}
                    confirmUrl={"https://msawt.ru"}
                    textForUrl={"Studied from 2013 - 2015"}
                />
            </Grid.Container>
            
        </Grid.Container>



    )

}

export default Learning;