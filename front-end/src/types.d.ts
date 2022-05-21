/*
 *
 *  Props type
 *
 */

// Upload.tsx
export type UploadProps = {
    setResult: Function;
}

// Result.tsx
export type ResultProps = {
    result: DetectionResult | undefined;
}

// Wireframe.tsx
export type WireframeProps = {
    data: Array<{ width: number, height: number, left: number, top: number, type: number, score: number }>;
    size: string, imageWidth: string, imageHeight: string;
}

// Stepper.tsx
export type StepperProps = {
    size: string;
    steps: Array<{ label: string, description: JSX.element }>;
}

/*
 *
 *  Data type
 *
 */

// Original detection result type
export type DetectionResult = {
    models: Record<string, number[][][]>,
    imageWidth: number, imageHeight: number
};

// components parameter type
export type ComponentParams = {
    width: number,
    height: number,
    left: number,
    top: number,
}