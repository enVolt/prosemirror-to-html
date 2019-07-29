const assert = require('assert');

const Renderer = require("../../src/Renderer");

const DivNode = require("./Custom/Div");
const UserNode = require("./Custom/User");

describe("CustomNode Test", function () {
    it ("Single Node", function () {
        let json = {
            "type": "doc",
            "content": [
                {
                    "type": "div"
                }
            ]
        };

        let html = '<div></div>';

        const renderer = new Renderer();
        renderer.addNode(DivNode);
        assert.deepEqual(html, renderer.render(json));
    });

    it ("Array Node", function () {
        let json = {
            "type": "doc",
            "content": [
                {
                    "type": "div"
                }
            ]
        };

        let html = '<div></div>';

        const renderer = new Renderer();
        renderer.addNodes([DivNode]);
        assert.deepEqual(html, renderer.render(json));
    });

    it ("Custom Node with only Text", function () {
        let json = {
            "type": "doc",
            "content": [
                {
                    "type": "user",
                    "attrs": {
                        "id": 123
                    }
                }
            ]
        };

        let html = 'Foobar';

        const renderer = new Renderer();
        renderer.addNodes([UserNode]);
        assert.deepEqual(html, renderer.render(json));
    });
});
