import { React,  useState } from "react";
import { Grid, Image, Loading } from "@nextui-org/react";

export const ImageLoader = () => {
    const [isLoading, setIsLoading] = useState(false)
    const HandleLoad = () => setIsLoading(true)

    return (
        <Grid.Container justify="center">
            <Grid>
                {
                    isLoading ? (
                        <Loading />
                    ) : (
                        <Image
                        src="/images/cover.jpg"
                        onLoad= { HandleLoad }
                        
                    />
                    )
                }
                
            </Grid>
        </Grid.Container>
    )
}