const Node = require("./Node");

class Paragraph extends Node {
    matching () {
        return this.node.type === "paragraph";
    }

    tag () {
        return "p";
    }
}

module.exports = Paragraph;