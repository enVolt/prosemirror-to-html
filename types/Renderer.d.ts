export = Renderer;
declare class Renderer {
    document: any;
    nodes: (typeof import("./Nodes/Blockquote") | typeof import("./Nodes/CodeBlock") | typeof import("./Nodes/Image"))[];
    marks: (typeof import("./Marks/Bold") | typeof import("./Marks/Link"))[];
    setDocument(value: any): void;
    renderNode(node: any): any;
    renderOpeningTag(tags: any): any;
    renderClosingTag(tags: any): any;
    render(value: any): string;
    addNode(node: any): void;
    addNodes(nodes: any): void;
    addMark(mark: any): void;
    addMarks(marks: any): void;
}
//# sourceMappingURL=Renderer.d.ts.map