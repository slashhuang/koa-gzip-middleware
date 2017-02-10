/*
 * created by slashhuang
 * 2017.2.10
 */
const fs = require('fs');
const http = require('http');
const zlib = require('zlib');
const Koa = require('koa')
const Compose = require('koa-compose');
// Koa application is now a class and requires the new operator.
const app = new Koa();
const Gzip = require('../src/gzip');
let PORT = 3000;
//简略中间件
const M_1 = (ctx,next) =>{
      let test  = '1234567890';
      // ctx.body final length is 21
      // ctx.body initial length is 30
      ctx.body = test + test + test;
      console.log(`ctx.body initial length is ${ctx.body.length}`);
      next();
};
const M_3 = (ctx,next) =>{
      console.log(`ctx.body final length is ${ctx.body.length}`);
      next();
};
const MiddlewareArr = [M_1,Gzip,M_3];
// test for not gzip
if(process.env['npm_config_argv'] && process.env['npm_config_argv'].match('common')){
    MiddlewareArr.splice(1,1);
    PORT=3001
}
app.use(Compose(MiddlewareArr));
app.listen(PORT);
console.log(`server listening on port ${PORT}`)

