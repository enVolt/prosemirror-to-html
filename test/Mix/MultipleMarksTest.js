const assert = require('assert');

const Renderer = require("../../src/Renderer");

describe("MultipleMarks Test", function () {
    it ("Nested Marks", function () {
        let json = {"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Example Text","marks":[{"type":"bold"},{"type":"italic"}]}]}]};

        let html = '<p><strong><em>Example Text</em></strong></p>';

        const renderer = new Renderer();
        assert.deepEqual(html, renderer.render(json));
    });
});
