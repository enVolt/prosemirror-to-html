# ProseMirror to HTML (JS)

(This package is based on [prosemirror-to-html](https://github.com/scrumpy/prosemirror-to-html), which was originally written for PHP.)

Takes ProseMirror JSON and outputs HTML.

## Installation
```bash
npm install prosemirror-to-html --save
```

## Usage

```js
const Renderer = require("prosemirror-to-html").Renderer;

const renderer = new Renderer();

console.log(renderer.render({
  "type": "doc",
  "content": [
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "text": "Example Paragraph"
        }
      ]
    }
  ]
}));  // `<p>Example Text</p>`
```

## Supported Nodes

* Blockquote
* BulletList
* CodeBlock
* Heading
* ListItem
* OrderedList
* Paragraph

## Supported Marks

* Bold
* Code
* Italic
* Link

## Custom Nodes

Define your node as a class -

```js
const Node = require("prosemirror-to-html").Node;

class CustomNode extends Node {
    matching () {
        return this.node.type === "custom_node";
    }

    tag () {
        return "cnode";
    }
}
```

Feed it to `renderer` instance -
```js
renderer.addNode(CustomNode);
```