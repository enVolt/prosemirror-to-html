const Node = require("../../../src/Nodes/Node");

class Div extends Node {
    matching () {
        return this.node.type === "div";
    }

    tag () {
        return "div";
    }
}

module.exports = Div;