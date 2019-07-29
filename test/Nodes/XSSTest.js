const assert = require('assert');

const Renderer = require("../../src/Renderer");

describe("XSS Test", function () {
    it ("Text should not get rendered as html", function () {
        let json = {"type":"doc","content":[{"type":"text","text":"<script>alert(1)<\/script>"}]};

        let html = '&lt;script&gt;alert(1)&lt;/script&gt;';

        assert.deepEqual(html, (new Renderer()).render(json));
    });
});
