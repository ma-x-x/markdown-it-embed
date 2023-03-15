## markdown-it-embed

PDF、video、audio、doc、viewer for markdown-it

## Installation

```
yarn add  @maxx5/markdown-it-embed
```

## Usage

```js
import markdownIt from "markdown-it";
import markdownItEmbed from "@maxx5/markdown-it-embed";
const md = new markdownIt("default", {
  html: true,
});
md.use(markdownItEmbed);
const pdfUrl = "xxxx.pdf";

md.render(`![pdf](${pdfUrl})`);
```

### Options

```js
md.use(require("@maxx5/markdown-it-embed"), {
  embedExtensions: ["pdf", "doc", "html"],
});
```

## Development

### Test

```
npm test
```
