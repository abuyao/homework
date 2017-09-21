const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();  
var views = require('koa-views');
const GetCount = require('./controller/index.js');

app.use(views(__dirname + '/view'));
app.use(require('koa-static')(__dirname + '/public'));

router.post('/api/thumb',async (ctx, next)=>{
  let result = await GetCount.updateCount();
  let count = await GetCount.getCount();
  ctx.body = {result, count};
});


router.get('/index/index', async(ctx, next)=>{
  await ctx.render("index.html");
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
