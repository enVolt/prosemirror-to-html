const Node = require("./Node");

class CodeBlock extends Node {
    matching () {
        return this.node.type === "code_block";
    }

    tag () {
        return [
            {
                tag: "pre"
            },
            {
                tag: "code"
            }
        ];
    }
}

module.exports = CodeBlock;