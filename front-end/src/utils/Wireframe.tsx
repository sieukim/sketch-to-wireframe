import {getComponent} from "./getComponent";
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
                {data.map(value => getComponent(value, value.type, `key${value.width}`))}
            </div>
        </div>
    )
}