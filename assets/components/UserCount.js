import React from "react";
import { Button, Grid, Tooltip } from "@nextui-org/react";
import { UserIcon } from "./UserIcon";

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }


// export function users() {

//     const time = new Date()
//     const hours = time.getHours()
//     let users = randomNumber(1,5)

//     if ( hours >= 15 ) {
//         users = randomNumber(6,10)
//         return users
//     }
//     return users

// }


export default function UserCount() {
    const time = new Date()
    const hours = time.getHours()
    let users = 2

    if ( hours >= 15 ) {
        users = 9

        return (
            <Grid.Container>
                <Grid>
                    <Tooltip content="Watching now" placement="bottom">
                        <Button auto color={"success"} icon={<UserIcon fill="currentColor" filled />} >{users}</Button>
                    </Tooltip>
                </Grid>
            </Grid.Container>
        )
    }
        return (
                <Grid.Container>
                    <Grid>
                        <Tooltip content="Watching now" placement="bottom">
                            <Button auto color={"success"} icon={<UserIcon fill="currentColor" filled />}>{users}</Button>
                        </Tooltip>
                    </Grid>
                </Grid.Container>
        )
    


}