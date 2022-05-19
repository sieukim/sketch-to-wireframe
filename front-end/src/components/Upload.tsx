import {Box, Button} from "@mui/material";
import React, {ChangeEvent, useEffect, useState} from "react";
import {upload} from "../modules/api";

export function Upload() {
    // image file
    const [file, setFile] = useState<File | undefined>(undefined);
    // image url
    const [url, setUrl] = useState<string | undefined>(undefined);

    // input onChange handler
    const onChangeInput = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.currentTarget.files;

        if (files && files[0]) {
            setFile(files[0]);
            const result = await upload(files[0]);
            console.log(result);
        }
    }

    // create the preview
    useEffect(() => {
        if (!file) {
            setUrl(undefined);
            return;
        }

        const objectURL = URL.createObjectURL(file!);
        setUrl(objectURL);

        return () => URL.revokeObjectURL(objectURL);
    }, [file]);

    return (
        <div className="upload">
            <Box className="upload-box">
                <img alt="sketch" src={url}/>
            </Box>
            <Button
                variant="outlined"
                component="label"
            >
                Upload Sketch
                <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={onChangeInput}
                />
            </Button>
        </div>
    )
}