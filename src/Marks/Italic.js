const Mark = require("./Mark");

class Italic extends Mark {
    matching () {
        return this.mark.type === "italic";
    }

    tag () {
        return "em";
    }
}

module.exports = Italic;