import { React,  useState } from "react";
import { Grid, Image, Loading } from "@nextui-org/react";

export const ImageLoader = () => {
    const [isLoading, setIsLoading] = useState(true)
    const Handler = () => setIsLoading(false)

    return (
        <Grid.Container justify="center">
            <Grid>
                {
                    isLoading ? (
                        <Loading type="gradient"/>
                    ) : (
                        <Image
                        src="images/cover.jpg"
                        onLoad={Handler}
                        showSkeleton
                    />
                    )
                }
                
            </Grid>
        </Grid.Container>
    )
}