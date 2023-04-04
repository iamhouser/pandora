import React from "react";
import { Grid, Card, Text, Link } from "@nextui-org/react";

const Learning = () => {

    return (
        
        <Grid.Container gap={2} justify="center">
            <Grid.Container>
                <Grid>
                <Text h2 size={20}>Certs and Degrees</Text>
                </Grid>
            </Grid.Container>
            <Grid>
                <Card css={{p:"$6", mw:"400px"}} >
                    <Card.Header>
                        <img
                            src="https://test.jpg"
                            alt="logo for English First"
                            width={36}
                            height={36}
                        />
                        <Grid.Container css={{pl:"$6"}}>
                            <Grid xs={12}>
                                <Text
                                h3
                                >
                                The EF Standard English Test   
                                </Text>
                            </Grid>
                            <Grid xs={12}>
                                <Text css={{color:"$accents8"}}>
                                    englishfirst.com
                                </Text>
                            </Grid>
                        </Grid.Container>
                    </Card.Header>
                    <Card.Body css={{py:"$2"}}>
                        <Text>
                            Completed English testing for non-English speakers
                        </Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link 
                        href="https://efset.org/cert/2Q736s"
                        target="_blank"
                        color="primary"
                        >
                        Check the certificate
                        </Link>
                    </Card.Footer>
                </Card>
            </Grid>

            <Grid>
                <Card css={{p:"$6", mw:"400px"}} >
                    <Card.Header>
                        <img
                            src="https://test.jpg"
                            alt="logo for MSAWT"
                            width={36}
                            height={36}
                        />
                        <Grid.Container css={{pl:"$6"}}>
                            <Grid xs={12}>
                                <Text
                                h3
                                >
                                Moscow State University   
                                </Text>
                            </Grid>
                            <Grid xs={12}>
                                <Text css={{color:"$accents8"}}>
                                    msawt.ru
                                </Text>
                            </Grid>
                        </Grid.Container>
                    </Card.Header>
                    <Card.Body css={{py:"$2"}}>
                        <Text>
                            Lorem Ipsum
                        </Text>
                    </Card.Body>
                    <Card.Footer>
                        <Text>
                            Studied from 2013 - 2015
                        </Text>
                    </Card.Footer>
                </Card>
            </Grid>
        </Grid.Container>



    )

}

export default Learning;