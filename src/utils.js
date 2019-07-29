module.exports.htmlEntities = (text) => {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};

module.exports.arrayify = (element) => {
    if (!element) return [];
    if (element instanceof Array) {
        return element;
    }
    return [element];
};