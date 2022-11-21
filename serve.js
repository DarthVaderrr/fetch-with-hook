const Koa = require('koa');

const app = new Koa();

app.use(({req, res, response}) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes('path_a')){
        response.body = 'you got an A';
    }else if(req.url.includes('path_b')){
        response.body = 'you got a B';
    }else{
        response.body = 'you got nothing';
    }
});

app.listen(8888, () => {
    console.log('app is running');
});