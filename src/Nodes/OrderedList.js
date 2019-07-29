const Node = require("./Node");

class OrderedList extends Node {
    matching () {
        return this.node.type === "ordered_list";
    }

    tag () {
        return "ol";
    }
}

module.exports = OrderedList;