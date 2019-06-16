'use strict';
const express = require('express'),
      path    = require('path'),
      app     = express();

const rootPath = '/root';

// テンプレートエンジン
app.set('views', path.join(__dirname + rootPath) );
app.set('view engine', 'pug');

// 静的ファイル
app.use(express.static(__dirname + rootPath, { index: false }));
// static
app.use(express.static(process.cwd()+'/../static/public'));

// Routing
app.get('/', (req, res)=> {
  res.render('index');
});

app.listen(3000, ()=> {
  console.log("Express Server\nopen: http://localhost:3000");
});