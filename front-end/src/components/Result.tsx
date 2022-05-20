import {useEffect} from "react";
import {Stepper} from "../utils/Stepper";

// current screen width
const [screenWidth] = [window.innerWidth];

type ResultProps = {
    result: JSON | undefined;
}

export function Result({result}: ResultProps) {
    useEffect(() => {
        console.log(result);
    }, [result])

    const width = screenWidth >= 1024 ? '30vw' : '60vw';
    const height = screenWidth >= 1024 ? '30vw' : '60vw';

    return (
        <div className="result">
            <Stepper width={width} height={height}/>
        </div>
    )
}