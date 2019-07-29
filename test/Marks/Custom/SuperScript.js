const Mark = require("../../../src/Marks/Mark");

class Superscript extends Mark {
    matching () {
        return this.mark.type === "superscript";
    }

    tag () {
        return "sup";
    }
}

module.exports = Superscript;