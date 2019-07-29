const Node = require("./Node");

class Heading extends Node {
    matching () {
        return this.node.type === "heading";
    }

    tag () {
        return `h${this.node.attrs.level}`;
    }
}

module.exports = Heading;