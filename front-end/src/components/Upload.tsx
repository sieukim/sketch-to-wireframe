import {Box, Button} from "@mui/material";
import React, {ChangeEvent, useEffect, useState} from "react";
import {upload} from "../modules/api";
import {getImageFileInfo} from "../utils/getImageFileInfo";
import {UploadProps} from "../types";

export function Upload({setResult}: UploadProps) {
    // image file
    const [file, setFile] = useState<File | undefined>(undefined);
    // image url
    const [url, setUrl] = useState<string>("/images/default.png");
    // image class
    const [className, setClassName] = useState<string>('default');

    // loading
    const [loading, setLoading] = useState<boolean>(false);

    // input onChange handler
    const onChangeInput = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.currentTarget.files;

        if (files && files[0]) {
            setFile(files[0]);
            setClassName('');
            setLoading(true);
            const {width, height} = await getImageFileInfo(files[0]);
            const result = await upload(files[0]);
            setResult({models: result.data, imageWidth: width, imageHeight: height});
            setLoading(false);
        }
    }

    // create the preview
    useEffect(() => {
        if (!file) {
            setUrl("/images/default.png");
            setClassName('default');
            return;
        }

        const objectURL = URL.createObjectURL(file!);
        setUrl(objectURL);
        setClassName('');

        return () => URL.revokeObjectURL(objectURL);
    }, [file]);

    return (
        <div className="upload">
            <Box className="upload-box">
                <img alt="sketch" src={url} className={className}/>
            </Box>
            <Button
                variant="outlined"
                component="label"
                disabled={loading}
                className={loading ? 'upload-loading' : ''}
            >
                {loading ? 'Loading...' : 'Upload Sketch'}
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