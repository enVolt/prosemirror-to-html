const Node = require("../../../src/Nodes/Node");

class User extends Node {
    matching () {
        return this.node.type === "user";
    }

    text () {
        return "Foobar";
    }
}

module.exports = User;