/*
 * gzip response body as a koa moddleware
 * built by slashhuang
 * 2017.2.10
 */
const zlib = require('zlib');

const G_middleware = (ctx,next)=>{
    //when body length is bigger than 20 ,trigger the use of gzip
    if(ctx.body && ctx.body.length>20){
        let acceptEncoding = ctx.headers['accept-encoding'];
        let defalate = zlib.deflate;
        //gzip encoding head
        if (acceptEncoding.match(/\bdeflate\b/)) {
            ctx.set({ 'Content-Encoding': 'deflate' });
            // deflate
            ctx.body = zlib.deflateSync(ctx.body);
        } else if (acceptEncoding.match(/\bgzip\b/)) {
            ctx.set({'Content-Encoding': 'gzip'});
            // gzip
            ctx.body = zlib.gzipSync(ctx.body)
        }
    }
    next();
}

module.exports = G_middleware


