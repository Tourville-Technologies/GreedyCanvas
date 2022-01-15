declare class GreedyCanvas {
    constructor(ResX: number, ResY: number)

    Destroy(): void;
    SetParent(parent: Instance): void;
    SetPixel(x: number, y: number, color: Color3): void;
    Clear(x?: number): void;
    Render(): void;
}
export default GreedyCanvas;
