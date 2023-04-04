import React from "react";
import { Switch, useTheme } from "@nextui-org/react";

export default function Theme() {
    const { theme } = useTheme();

    return (
        <Switch
            shadow
            color="primary"
            checked={theme}
        />
    )
}