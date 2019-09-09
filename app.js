// const serve = require('koa-static');
const fs = require('fs');
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// Добавим все роуты. Второй middleware отвечает на OPTIONS запросы.
app.use(router.routes()).use(router.allowedMethods());
// app.use(serve('.'));
// app.use(serve('test/fixtures'));
// app.use(serve(__dirname + '/test/fixtures'));

router.get('/', async (ctx) => {

 	ctx.body = `<!DOCTYPE html><html lang="en"><head><title>Healtix</title><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/></head><body class="pos-r"><header class="header container"><div class="row justify-content-between align-items-center"><a class="logo" href="#">LOGOTIP</a><input class="header_search" placeholder="Поиск..."/><a class="tel" href="tel:0923456789">092 345 67 89</a></div></header><div class="container"><div class="row"><div class="car col-12 col-md-3 col-xl-2"><div class="car_item">Mersedes</div><div class="car_item">Mersedes</div><div class="car_item">Mersedes</div><div class="car_item">MersedesMersedes<br>Mersedes</div><div class="car_item">Mersedes23</div></div><div class="body col-12 col-md-9 col-xl-10"><div class="row"><div class="col-6 col-sm-4 col-lg-3 col-xl-2"><div class="card"><div class="img"></div><div class="car_name text-center">Mersedes</div><div class="car_detal text-center">MotorMotor MotorMotor</div></div></div><div class="col-6 col-sm-4 col-lg-3 col-xl-2"><div class="card"><div class="img"></div><div class="car_name text-center">Mersedes</div><div class="car_detal text-center">MotorMotor MotorMotor</div></div></div><div class="col-6 col-sm-4 col-lg-3 col-xl-2"><div class="card"><div class="img"></div><div class="car_name text-center">Mersedes</div><div class="car_detal text-center">MotorMotor MotorMotor</div></div></div><div class="col-6 col-sm-4 col-lg-3 col-xl-2"><div class="card"><div class="img"></div><div class="car_name text-center">Mersedes</div><div class="car_detal text-center">MotorMotor MotorMotor</div></div></div><div class="col-6 col-sm-4 col-lg-3 col-xl-2"><div class="card"><div class="img"></div><div class="car_name text-center">Mersedes</div><div class="car_detal text-center">MotorMotor MotorMotor</div></div></div><div class="col-6 col-sm-4 col-lg-3 col-xl-2"><div class="card"><div class="img"></div><div class="car_name text-center">Mersedes</div><div class="car_detal text-center">MotorMotor MotorMotor</div></div></div><div class="col-6 col-sm-4 col-lg-3 col-xl-2"><div class="card"><div class="img"></div><div class="car_name text-center">Mersedes</div><div class="car_detal text-center">MotorMotor MotorMotor</div></div></div><div class="col-6 col-sm-4 col-lg-3 col-xl-2"><div class="card"><div class="img"></div><div class="car_name text-center">Mersedes</div><div class="car_detal text-center">MotorMotor MotorMotor</div></div></div><div class="col-6 col-sm-4 col-lg-3 col-xl-2"><div class="card"><div class="img"></div><div class="car_name text-center">Mersedes</div><div class="car_detal text-center">MotorMotor MotorMotor</div></div></div><div class="col-6 col-sm-4 col-lg-3 col-xl-2"><div class="card"><div class="img"></div><div class="car_name text-center">Mersedes</div><div class="car_detal text-center">MotorMotor MotorMotor</div></div></div><div class="col-6 col-sm-4 col-lg-3 col-xl-2"><div class="card"><div class="img"></div><div class="car_name text-center">Mersedes</div><div class="car_detal text-center">MotorMotor MotorMotor</div></div></div><div class="col-6 col-sm-4 col-lg-3 col-xl-2"><div class="card"><div class="img"></div><div class="car_name text-center">Mersedes</div><div class="car_detal text-center">MotorMotor MotorMotor</div></div></div></div></div></div></div>
<style type="text/css">*,*::before,*::after{box-sizing:border-box}body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}.container-fluid{max-width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.col,.col-6,.col-12,.col-xl-5,.col-xl-2,.col-xl-10,.col-sm-3,.col-sm-4,.col-sm-6,.col-sm-9,.col-md-2,.col-md-3,.col-md-4,.col-md-6,.col-md-9,.col-md-10,.col-lg-2,.col-lg-4,.col-lg-10{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.col{display:flex;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-6{flex:0 0 50%;max-width:50%}.col-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.d-block{display:block}.d-inline{display:inline !important}.d-inline-block{display:inline-block !important}.d-flex{display:flex}.justify-content-between{justify-content:space-between}.align-self-center{align-self:center !important}.pos-r{position:relative !important}.pos-a{position:absolute !important}.align-items-center{-ms-flex-align:center;align-items:center !important}.justify-content-center{justify-content:center !important}.justify-content-end{justify-content:flex-end}.text-center{text-align:center !important}.m-auto{margin:auto !important}.m-0{margin:0}.m20-0{margin-top:20px;margin-bottom:20px}.p20-0{padding:20px 0}.w-50{width:50%;box-sizing:border-box}.w-100{width:100% !important}@media (min-width:576px){.container{width:100%}.col-sm-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-sm-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}}.col-sm-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}@media (min-width:768px){.col-md-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.333333%;max-width:58.333333%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.container{width:100%}}@media (min-width:992px){.container{width:100%;max-width:1100px}.col-lg-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-lg-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-lg-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}}@media (min-width:1200px){.container{max-width:1340px}.justify-content-xl-end{justify-content:flex-end}.col-xl-2{flex:0 0 16.666667%;max-width:16.666667%}.col-xl-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-xl-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}}.float-right{float:right}body{background:#333;margin:0;padding:0}@font-face{font-family:'fregat';src:url("font/Fregat_regular.otf")}.card-img-top{width:100%;height:auto}.header{background:rgba(250,240,250,0.5);background:#ccc;height:50px;font-family:'PT Sans';}.header_search{padding:5px;font-size:18px;border:0;border-bottom:3px solid rgba(20,20,20,0.4);background:rgba(250,245,220,0.3);outline:none}.header .row{height:100%;padding:0 15px}.logo{display:block}.tel{font-size:22px;font-family:fregat;text-decoration:none;color:#000}.car,.body{margin-top:0;padding-top:18px;padding-bottom:18px;font-family:'Open Sans';}@media (min-width:768px){.car,.body{margin-top:20px}}.car_item,.body_item{background:#999;cursor:pointer;margin-top:8px;margin-bottom:8px}.body{background:#999}.car{box-sizing:border-box;}@media (min-width:768px){.car{font-size:18px;border-right:20px solid transparent}}@media (min-width:888px){.car{font-size:19px}}@media (min-width:992px){.car{font-size:20px}}@media (min-width:1200px){.car{font-size:19px}}@media (min-width:1300px){.car{font-size:21px}}.car_name{font-size:18px}.card{margin-bottom:20px}.img{width:100%;height:150px;background:rgba(20,20,20,0.5)}</style>
	<script src="http://127.0.0.1:35729/livereload.js?ext=Firefox&amp;extver=0.0.46"></script></html>`;

});

// Отвечаем на имя на GET запросы. :name здесь - это часть URL, и является аргументом
router.get('/:name', async (ctx) => {
  ctx.body = `Hello, ${ctx.params.name}!\n`;
});


app.listen(3000, () => console.log('http://127.0.0.1:3000/'));




// var MongoClient = require('mongodb').MongoClient


// MongoClient.connect('mongodb://localhost:27017', (err, client) => {

//   var db = client.db('detalca');
//   db.collection('cars').insert( {testCar3: ['mazda', 'motor']} , function(err, data) {
//   	console.log(data)
//   })
//   db.collection('cars').find().toArray(function(err, data) {
//   	console.log(data)
//   })
// });