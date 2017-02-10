# koa-gzip-middleware

> simple gzip reponse string for koa2.

> when request  headers support gzip or deflate.

> if response content length is bigger than 20.

> koa-gzip-middleware would gzip the response body data syncronously

## Installation

```bash
    npm install koa-gzip-middleware
```

## Usage
```bash
    const GZIP = require('koa-gzip-middleware');
    const Koa = require('koa');
    Koa.use(GZIP)
```

## Author
slashhuang

##License
MIT