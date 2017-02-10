/*
 * created by slashhuang
 * 2017.2.10
 */
const fs = require('fs');
const http = require('http');
const zlib = require('zlib');
const Koa = require('koa')
// Koa application is now a class and requires the new operator.
const app = new Koa();
const Gzip = require('../src/gzip');

app.use(async ctx => {
  ctx.body = 'hello world'; // ctx instead of this
});
app.use(Gzip);
app.listen(3000);

