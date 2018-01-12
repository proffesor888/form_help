const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const fs = require('fs');
const path = require('path');
const uuidv4 = require('uuid/v4');

const router = new Router({
    prefix: '/api'
});


router
    .get('/countries', async (ctx, next) => {
        const countries = fs.createReadStream(path.join(__dirname, 'countries.json'));
        ctx.res.setHeader('Content-Type', 'application/json');
        ctx.body = countries;
    })
    .post('/form', async (ctx, next) => {
        const id = uuidv4();
        const countries = fs.createWriteStream(path.join(__dirname, 'files', `${id}.json`));
        ctx.req.pipe(countries);
    });

app.use(router.routes());
app.use(serve(__dirname + '/client'));

app.listen(3000);
