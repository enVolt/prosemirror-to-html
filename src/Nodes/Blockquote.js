const Node = require("./Node");

class Blockquote extends Node {
    matching () {
        return this.node.type === "blockquote";
    }

    tag () {
        return "blockquote";
    }
}

module.exports = Blockquote;