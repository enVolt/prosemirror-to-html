const assert = require('assert');

const Renderer = require("../../src/Renderer");

describe("Custom Mark Test", function () {
    it ("Single Mark", function () {
        const SuperscriptMark = require("./Custom/SuperScript");

        let json = {
            type: "doc",
            content: [
                {
                    type: "text",
                    text: "Example Text",
                    marks: [
                        {
                            type: "superscript"
                        }
                    ]
                }
            ]
        };

        let html = "<sup>Example Text</sup>";

        const renderer = new Renderer();
        renderer.addMark(SuperscriptMark);

        assert.deepEqual(html, renderer.render(json));
    });

    it ("Array Mark", function () {
        const SuperscriptMark = require("./Custom/SuperScript");

        let json = {
            type: "doc",
            content: [
                {
                    type: "text",
                    text: "Example Text",
                    marks: [
                        {
                            type: "superscript"
                        }
                    ]
                }
            ]
        };

        let html = "<sup>Example Text</sup>";

        const renderer = new Renderer();
        renderer.addMarks([SuperscriptMark]);

        assert.deepEqual(html, renderer.render(json));
    });
});