/*
 * gzip response body as a koa moddleware
 * built by slashhuang
 * 2017.2.10
 */
const zlib = require('zlib');

const G_middleware = (ctx,next)=>{
    if(ctx.body && ctx.status==200){
            let acceptEncoding = ctx.headers['accept-encoding'];
            let defalate = zlib.deflate;
            //gzip encoding head
            if(acceptEncoding && acceptEncoding.indexOf('gzip') != -1) {
                 //set response content-encoding to gzip
                 defalate()
                 ctx.set({"content-encoding": "gzip"});
            }

            if (acceptEncoding.match(/\bdeflate\b/)) {
                response.writeHead(200, { 'Content-Encoding': 'deflate' });
                raw.pipe(zlib.createDeflate()).pipe(response);
           } else if (acceptEncoding.match(/\bgzip\b/)) {
                response.writeHead(200, { 'Content-Encoding': 'gzip' });
                raw.pipe(zlib.createGzip()).pipe(response);
          } else {
                response.writeHead(200, {});
                raw.pipe(response);
          }
    }
    next();
}


