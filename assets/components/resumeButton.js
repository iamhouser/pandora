import React from "react";
import { Button } from "@nextui-org/react";


export const downloadFile = async (fileName) => {
    const fileUrl = `public/${fileName}`
    const response = await fetch(fileUrl, {
        headers: {
            'Content-Type': 'application/pdf, charset=utf-8',
            'Content-Disposition': 'attachment; filename="final.pdf"'
        }
    });
    const blob = await response.blob()

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.setAttribute('download', fileName);
    link.click();
    window.URL.revokeObjectURL(link.href);
}



export default function ResumeButton () {
    const handleDownload = () => {
        downloadFile('final.pdf');
    }
    return (
        <Button size={"sm"} onClick={handleDownload} shadow auto >Download .pdf</Button>
    )
}