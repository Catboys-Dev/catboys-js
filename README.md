# Catboys.js

## The official wrapper for the catboys.com API! Very small in size with no external dependencies.

---

[![npm](https://img.shields.io/npm/v/catboys.svg)](https://www.npmjs.com/package/catboys)
[![npm](https://img.shields.io/npm/dt/catboys.svg?maxAge=3600)](https://www.npmjs.com/package/catboys)
[![install size](https://packagephobia.now.sh/badge?p=catboys)](https://packagephobia.now.sh/result?p=catboys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Patreon](https://img.shields.io/badge/Donate-Patreon-orange.svg)](https://www.patreon.com/CatboyLounge)

[![NPM](https://nodei.co/npm/catboys.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/catboys/)

## Installation

```
npm install catboys
```

## Functions

| Function   | Description                                                                                | Returns (JSON)                                                              |
| ---------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| `img`      | Get a URL of a catboy image                                                                | `{url: <image url>}`                                                        |
| `baka`     | Get a URL of an image representing baka                                                    | `{url: <image url>}`                                                        |
| `response` | Get a response of a virtual catboy                                                         | `{cat: <catemoji>}`                                                         |
| `8Ball`    | Replies with text as a response to the magic 8Ball and a matching image.                   | `{response: <8Ball response string>, url: <URL to a matching 8Ball image>}` |
| `dice`     | Replies with text as an integer response to the virtual 6-sided dice and a matching image. | `{response: <dice response string>, url: <URL to a matching dice image>}`   |

## Example

```js
const client = require(`catboys`);
const catboy = new client();

async function test() {
    console.log(await catboy.img());
}

test();
```

Which returns:

```json
{
    "url": "https://cdn.catboys.com/images/image_31.jpg"
}
```

## Credit

[Nekos.life](https://nekos.life) - base code for this package and inspiration to create catboys.com
