const assert = require('assert');

const Renderer = require("../../src/Renderer");

const HardBreakNode = require("./Custom/HardBreak");

describe("HardBreakNode Test", function () {
    it ("Self Closing Tag", function () {
        let json = {"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"some text"},{"type":"hard_break"},{"type":"text","text":"some more text"}]}]};

        let html = '<p>some text<br>some more text</p>';

        const renderer = new Renderer();
        renderer.addNode(HardBreakNode);

        assert.deepEqual(html, renderer.render(json));
    });
});
