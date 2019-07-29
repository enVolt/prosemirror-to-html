const Node = require("../../../src/Nodes/Node");

class HardBreak extends Node {
    matching () {
        return this.node.type === "hard_break";
    }

    selfClosing () {
        return true;
    }

    tag () {
        return "br";
    }
}

module.exports = HardBreak;