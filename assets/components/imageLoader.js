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
                        <Loading type="gradient"/>
                    ) : (
                        <Image
                        src="/images/cover.jpg"
                        onLoad= { HandleLoad }
                        showSkeleton
                    />
                    )
                }
                
            </Grid>
        </Grid.Container>
    )
}