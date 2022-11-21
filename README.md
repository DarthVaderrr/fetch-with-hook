# [fetch-with-hook](https://github.com/DarthVaderrr/fetch-with-hook)
[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/DarthVaderrr/fetch-with-hook/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/DarthVaderrr/fetch-with-hook.svg?branch=master)](https://travis-ci.org/DarthVaderrr/fetch-with-hook)
[![Coveralls](https://img.shields.io/coveralls/DarthVaderrr/fetch-with-hook.svg)](https://coveralls.io/github/DarthVaderrr/fetch-with-hook)
[![npm](https://img.shields.io/badge/npm-0.1.0-orange.svg)](https://www.npmjs.com/package/fetch-with-hook)


## :star: 特性

- 拦截页面上发出的所有fetch请求
- 可以修改请求
- 可以修改响应

> 注意: 必须先执行 fetchHook 再调用 fetch, 建议把 fetchHook 的代码放在应用的最顶部或入口处.


## :open_file_folder: 目录介绍

```
.
├── demo 使用demo
├── dist 编译产出代码
├── doc 项目文档
├── src 源代码目录
├── test 单元测试
└── CHANGELOG.md 变更日志
```

## :rocket: 使用者指南

通过npm下载安装代码

```bash
$ npm install --save fetch-with-hook
```

如果你是webpack等环境

```js
import base from 'fetch-with-hook';
```

如果你是requirejs环境

```js
requirejs(['node_modules/fetch-with-hook/dist/index.aio.js'], function (base) {
    // xxx
})
```

如果你是浏览器环境

```html
<script src="node_modules/fetch-with-hook/dist/index.aio.js"></script>
```