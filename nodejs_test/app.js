/* 소스코드 참고 - https://gongbu-ing.tistory.com/32?category=780188 */
var http = require('http');
var express = require('express');
var app = express();
var db_config = require(__dirname + '/config/database.js');
var conn = db_config.init();
var bodyParser = require('body-parser');

db_config.connect(conn);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.get('/', function (req, res) {
    res.send('ROOT');
});

app.get('/list', function (req, res) {
    var sql = 'SELECT * FROM BOARD';    
    conn.query(sql, function (err, rows, fields) {
        if(err) console.log('query is not excuted. select fail...\n' + err);
        else console.log(rows); // 데이터 출력
        res.render('list.ejs', {list : rows}); // 데이터 list.ejs 페이지로 넘겨줌
    });
});

app.get('/write', function (req, res) {
    var data = req.body.data;
    console.log('POST Parameter = ' + data);

    var result = ' responsive Succese';
 
    console.log(result);

    res.send({result:result});
});

app.post('/writeAf', function (req, res) {
    var body = req.body;
    console.log(body);

    var sql = 'INSERT INTO BOARD VALUES(?, ?, ?, NOW())';
    var params = [body.id, body.title, body.content];
    console.log(sql);
    conn.query(sql, params, function(err) {
        if(err) console.log('query is not excuted. insert fail...\n' + err);
        else res.redirect('/list'); // insert후 '/list' 실행
    });
});

app.listen(3000, () => console.log('Server is running on port 3000...'));


