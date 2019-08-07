const Node = require("./Node");

class Image extends Node {
    matching () {
        return this.node.type === "image";
    }

    selfClosing () {
        return true;
    }

    tag () {
        return {
            tag: "img",
            attrs: {
                "src": this.node.attrs.src,
                "alt": this.node.attrs.alt,
                "title": this.node.attrs.title
            }
        };
    }
}

module.exports = Image;