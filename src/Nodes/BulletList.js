const Node = require("./Node");

class BulletList extends Node {
    matching () {
        return this.node.type === "bullet_list";
    }

    tag () {
        return "ul";
    }
}

module.exports = BulletList;