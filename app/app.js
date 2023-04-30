"use strict";

const express = require('express');
const app = express();

// 라우팅
const home = require('./src/routes/home');

// 앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`));

app.use('/', home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;

// const http = require('http');
// const app = http.createServer((req, res) => {
//     console.log(req.url);
//     res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//     if (req.url === '/') {
//         res.end("루트 경로");
//     } else if (req.url === '/login') {
//         res.end("로그인 경로");
//     };
// });
// const PORT = 3001;

// app.listen(PORT, () => {
//     console.log(`서버 실행 : ${PORT}`);
// });