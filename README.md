# koa-gzip-middleware

> simple gzip middleware for koa2.

> if request  headers support gzip or deflate and response content length is bigger than 20.

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