const Mark = require("./Mark");

class Code extends Mark {
    matching () {
        return this.mark.type === "code";
    }

    tag () {
        return "code";
    }
}

module.exports = Code;