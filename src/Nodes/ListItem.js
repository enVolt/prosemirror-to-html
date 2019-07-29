const Node = require("./Node");

class ItemList extends Node {
    matching () {
        return this.node.type === "list_item";
    }

    tag () {
        return "li";
    }
}

module.exports = ItemList;