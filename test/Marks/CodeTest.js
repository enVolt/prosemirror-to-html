const assert = require('assert');

const Renderer = require("../../src/Renderer");

describe("Predefined Mark Test", function () {
    it ("Code", function () {
        let json = {
            type: "doc",
            content: [
                {
                    type: "text",
                    text: "Example Text",
                    marks: [
                        {
                            type: "code"
                        }
                    ]
                }
            ]
        };

        let html = "<code>Example Text</code>";

        assert.deepEqual(html, (new Renderer()).render(json));
    });

    it ("Link", function () {
        let json = JSON.parse('{"type":"doc","content":[{"type":"text","text":"Example Link","marks":[{"type":"link","attrs":{"href":"https:\/\/scrumpy.io"}}]}]}');

        let html = '<a href="https://scrumpy.io">Example Link</a>';

        assert.deepEqual(html, (new Renderer()).render(json));
    });
});