const assert = require('assert');

const Renderer = require("../src/Renderer");

describe("Input Test", function () {
    it ("JSON Input", function () {
        let json = {
            type: "doc",
            content: [
                {
                    type: "text",
                    text: "Example Text"
                }
            ]
        };

        let html = "Example Text";

        assert.deepEqual(html, (new Renderer()).render(json));
    });

    it ("Stringified JSON Input", function () {
        let json = JSON.stringify({
            type: "doc",
            content: [
                {
                    type: "text",
                    text: "Example Text"
                }
            ]
        });
        let html = "Example Text";

        assert.deepEqual(html, (new Renderer()).render(json));
    });
});