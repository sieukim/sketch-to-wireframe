import * as React from "react";
import {useEffect, useState} from "react";
import {Stepper} from "../utils/Stepper";
import {ResultProps} from "../types";
import {Wireframe} from "../utils/Wireframe";
import {getSize} from "../utils/getSize";

const defaultSteps = [
    {
        label: 'Faster R-CNN',
        description: <span>Faster R-CNN's result</span>,
    },
    {
        label: 'TOOD',
        description:
            <span>TOOD's Result</span>,
    },
    {
        label: 'YOLOF',
        description: <span>YOLOF's Result</span>,
    },
    {
        label: 'YOLOX',
        description: <span>YOLOX's Result</span>,
    },
];

export function Result({result}: ResultProps) {
    // current screen size
    const screenSize = window.innerWidth;
    // Stepper's size
    const stepperSize = screenSize >= 1024 ? '20vw' : '60vw';
    // Stepper's step
    const [steps, setSteps] = useState(defaultSteps);

    useEffect(() => {
        if (!result) return;

        // detection result
        const {models, imageWidth, imageHeight} = result;

        // wireframe container size
        const [width, height] = getSize(parseInt(stepperSize.substring(0, 2)), imageWidth, imageHeight);

        for (const model in models) {
            const data = models[model]
                .flatMap((value, type) => value.map(data => ({data, type})))
                .filter(value => value.data.length > 0)
                .map(({data: [xMin, yMin, xMax, yMax, score], type}) => ({
                    left: xMin / imageWidth * 100,
                    top: yMin / imageHeight * 100,
                    width: (xMax - xMin) / imageWidth * 100,
                    height: (yMax - yMin) / imageHeight * 100,
                    type,
                    score,
                }))
                .filter(({score}) => score >= 0.3);

            setSteps(steps => ([
                ...steps.slice(1),
                {
                    ...steps[0],
                    description: <Wireframe data={data} size={stepperSize} imageWidth={width} imageHeight={height}/>
                },
            ]));
        }
    }, [result]);

    return (
        <div className="result">
            <Stepper size={stepperSize} steps={steps}/>
        </div>
    )
}