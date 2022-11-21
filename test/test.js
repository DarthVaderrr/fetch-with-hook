var expect = require('expect.js');
var { default: fetchHook, stop: stopHooking } = require('../src/index.ts');

// 注意!! 跑测试用例前先启动 serve.js 服务

describe('test fetch hook', function () {
    fetchHook({
        onRequest({ input, init }, next) {
            if ((input ).includes('_a')) {
                next({
                    input: new Request('http://localhost:8888/path_a')
                });
            } else {
                next({
                    input, init
                });
            }
        },
        async onResponse(res, next) {
            const text = await res.text();
            if (text === 'you got a B') {
                next(new Response('Not bad'));
            } else {
                next(new Response(text));
            }
        },
        onError(err, next) {
            next(err);
        },
    });
    describe('modify request', function () {
        it('modify request success', async function () {
            const res = await window.fetch('http://localhost:8888/_a');
            const text = await res.text();
            expect(text).to.equal('you got an A');
        });
    });

    describe('modify response', function () {
        it('modify response success', async function () {
            const res = await window.fetch('http://localhost:8888/path_b');
            const text = await res.text();
            expect(text).to.equal('Not bad');
        });
    });

    describe('stop modify request', function () {
        it('stop modify request success', async function () {
            stopHooking();
            const res = await window.fetch('http://localhost:8888/_a');
            const text = await res.text();
            expect(text).to.equal('you got nothing');
        });
    });

    describe('stop modify response', function () {
        it('stop modify response success', async function () {
            stopHooking();
            const res = await window.fetch('http://localhost:8888/path_b');
            const text = await res.text();
            expect(text).to.equal('you got a B');
        });
    });

});
