import {GetComponent} from "./GetComponent";
import {WireframeProps} from "../types";


export function Wireframe({data, size, imageWidth, imageHeight}: WireframeProps) {
    return (
        <div
            style={{
                width: size,
                height: size,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            id="wireframe"
        >
            <div
                style={{
                    position: "relative",
                    width: imageWidth,
                    height: imageHeight,
                    boxSizing: 'border-box',
                }}
            >
                {data.map(value => GetComponent(value, value.type, `key${value.width}`, size))}
            </div>
        </div>
    )
}