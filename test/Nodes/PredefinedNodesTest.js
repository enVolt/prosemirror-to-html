const assert = require('assert');

const Renderer = require("../../src/Renderer");

describe("Predefined Nodes Test", function () {
    it("Blockquote", function () {
        let json = {
            type: "doc",
            content: [
                {
                    type: "blockquote",
                    content: [
                        {
                            type: "text",
                            text: "Example Quote"
                        }
                    ]
                }
            ]
        };

        let html = "<blockquote>Example Quote</blockquote>";

        assert.deepEqual(html, (new Renderer()).render(json));
    });

    it("Bullet List", function () {
        let json = {
            "type": "doc",
            "content": [
                {
                    "type": "bullet_list",
                    "content": [
                        {
                            "type": "list_item",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "first list item"
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        let html = "<ul><li>first list item</li></ul>";

        assert.deepEqual(html, (new Renderer()).render(json));
    });

    it("CodeBlock", function () {
        let json = {"type":"doc","content":[{"type":"code_block","content":[{"type":"text","text":"Example Text"}]}]};

        let html = "<pre><code>Example Text</code></pre>";

        assert.deepEqual(html, (new Renderer()).render(json));
    });

    it("Heading", function () {
        let json = {"type":"doc","content":[{"type":"heading","attrs":{"level":2},"content":[{"type":"text","text":"Example Headline"}]}]};

        let html = "<h2>Example Headline</h2>";

        assert.deepEqual(html, (new Renderer()).render(json));
    });

    it("Ordered List", function () {
        let json = {"type":"doc","content":[{"type":"ordered_list","content":[{"type":"list_item","content":[{"type":"text","text":"first list item"}]}]}]};

        let html = "<ol><li>first list item</li></ol>";

        assert.deepEqual(html, (new Renderer()).render(json));
    });

    it("Paragraph", function () {
        let json = {"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Example Paragraph"}]}]};

        let html = "<p>Example Paragraph</p>";

        assert.deepEqual(html, (new Renderer()).render(json));
    });
});