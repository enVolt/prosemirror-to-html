const assert = require('assert');

const Renderer = require("../../src/Renderer");

describe("MultipleMarks Test", function () {
    it.only ("Nested Marks", function () {
        let json = {
            "type": "doc",
            "content": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "“"
                        },
                        {
                            "type": "text",
                            "marks": [
                                {
                                    "type": "bold"
                                }
                            ],
                            "text": "It'll be fine"
                        },
                        {
                            "type": "text",
                            "text": ". Look at me. I’ve been in three plane crashes and I’m still here flying a fourth times.\" "
                        },
                        {
                            "type": "text",
                            "marks": [
                                {
                                    "type": "bold"
                                }
                            ],
                            "text": "This would be the worst line I would say to them."
                        },
                        {
                            "type": "image",
                            "attrs": {
                                "src": "https://gateway.masmic.com/images/post/answer-3799-pURm3pCtTR4CZjLwpHiDfN-1565150920540-644x483.jpeg",
                                "alt": null,
                                "title": null
                            }
                        },
                        {
                            "type": "image",
                            "attrs": {
                                "src": "https://gateway.masmic.com/images/post/answer-3799-pURm3pCtTR4CZjLwpHiDfN-1565150953364-648x527.jpeg",
                                "alt": null,
                                "title": null
                            }
                        }
                    ]
                }
            ]
        };

        let html = '<p>“<strong>It&#039;ll be fine</strong>. Look at me. I’ve been in three plane crashes and I’m still here flying a fourth times.&quot; <strong>This would be the worst line I would say to them.</strong><img src="https://gateway.masmic.com/images/post/answer-3799-pURm3pCtTR4CZjLwpHiDfN-1565150920540-644x483.jpeg"><img src="https://gateway.masmic.com/images/post/answer-3799-pURm3pCtTR4CZjLwpHiDfN-1565150953364-648x527.jpeg"></p>';

        const renderer = new Renderer();
        assert.deepEqual(html, renderer.render(json));
    });
});
