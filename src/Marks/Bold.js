const Mark = require("./Mark");

class Bold extends Mark {
    matching () {
        return this.mark.type === "bold";
    }

    tag () {
        return "strong";
    }
}

module.exports = Bold;