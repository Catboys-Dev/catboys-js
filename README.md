# Catboys-js

## Installation
```
npm i -s catboys
```
Official wrapper for the catboys.com API! Very small install size with no external dependencies.

### SFW

| Function | Description |
| -------- | ----------- |
| `img` | Get a URL of a catboy image |
| `catboy`| Get response of a virtual catboy |
| `8Ball` | Sends the text and replies with a `text` as a response to the magic 8Ball and an image as well.|


All of the endpoints but the ones marked with `text`, except 8Ball in the description will return JSON: `{ url: <theURL>}`.

`sfw.img` will return JSON `{url: <image url>}`
`sfw.catboy` will return JSON: `{cat: <catemoji>}`
`sfw.8Ball` will return JSON `{response: <8Ball response string>, url: <URL to a matching 8Ball image>}`

As of now, `8Ball` is the only one with query parameters. It requires an object containing the parameter, and the key should be the value.
`{text: 'Some example text here.}` 

## Typings

I've added a typings file and will be working to improve it. This allows editors like VSC to use intellisense/autocomplete to suggest functions and help out with parameters and to see what you'll be receiving as a result of function calls.


## Examples

Await/Async example
```js
const client = require('catboys');
const catboy = new client();

async function test() {
  console.log(await catboy.sfw.img());
}

test();
```
returns: 
```js
{ url: 'https://cdn.catboys.com/images/image_31.jpg' }
```

Promise example
```js
const client = require('catboys');
const catboy = new client();

catboy.sfw.catboy().then((catboy) => console.log(catboy));
```
returns
```js
{ catboy: 'uwu' }
```

## Advanced examples
Here I'll show you how to import `sfw`.

Importing `sfw`
```js
const client = require('catboys');
const {sfw} = new client();

sfw.img().then(catboy => console.log(catboy));
```
returns
```js
{ url: 'https://cdn.catboys.com/images/image_31.jpg' }
```

