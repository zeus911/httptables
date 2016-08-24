var frisby = require('frisby');
var async = require('async');

async.series([

  function(callback){
    frisby.create('apis.z.com-case-4-1-1')
      .patch('http://127.0.0.1:8080/apis/role_types/4/', {
        enable: 1
      }, {json: true})
      .addHeader('Authorization', 'Token 5fcd69a386ae6e073e51edb941b367d703496f21')
      .expectStatus(200)
      //.inspectBody()
    .toss();
    callback(null, '1');
  },

  function(callback){
    frisby.create('apis.z.com-case-4-1-2')
      .patch('http://127.0.0.1:8080/apis/role_types/5/', {
        optional: 1
      }, {json: true})
      .addHeader('Authorization', 'Token 5fcd69a386ae6e073e51edb941b367d703496f21')
      .expectStatus(200)
      //.inspectBody()
    .toss();
    callback(null, '2');
  },

  function(callback){
    frisby.create('apis.z.com-case-4-2')
      .get('http://127.0.0.1:8000/test/device')
      .addHeader('host', 'apis.z.com')
      .addHeader('X-Device-ID', 'device_1')
      .expectStatus(200)
      .expectJSON({
        status: 4103,
      })
      //.inspectBody()
    .toss();
    callback(null, '3');
  },

  function(callback){
    frisby.create('apis.z.com-case-4-3')
      .patch('http://127.0.0.1:8080/apis/role_types/4/', {
        enable: 0
      }, {json: true})
      .addHeader('Authorization', 'Token 5fcd69a386ae6e073e51edb941b367d703496f21')
      .expectStatus(200)
      //.inspectBody()
    .toss();
    callback(null, '4');
  },

  function(callback){
    frisby.create('apis.z.com-case-4-4')
      .get('http://127.0.0.1:10983/admin/notify')
      .expectStatus(200)
      .expectJSON({
        status: 200,
      })
      //.inspectBody()
    .toss();
    callback(null, '6');
  },

  function(callback){
    frisby.create('apis.z.com-case-4-5')
      .get('http://127.0.0.1:8000/test/device')
      .addHeader('host', 'apis.z.com')
      .addHeader('X-Device-ID', 'device_1')
      .expectStatus(200)
      .expectJSON({
        status: 200,
      })
      //.inspectBody()
    .toss();
    callback(null, '7');
  },

  function(callback){
    frisby.create('apis.z.com-case-4-6-1')
      .patch('http://127.0.0.1:8080/apis/role_types/4/', {
        enable: 1
      }, {json: true})
      .addHeader('Authorization', 'Token 5fcd69a386ae6e073e51edb941b367d703496f21')
      .expectStatus(200)
      //.inspectBody()
    .toss();
    callback(null, '8');
  },

  function(callback){
    frisby.create('apis.z.com-case-4-7')
      .get('http://127.0.0.1:10983/admin/notify')
      .expectStatus(200)
      .expectJSON({
        status: 200,
      })
      //.inspectBody()
    .toss();
    callback(null, '9');
  },

  function(callback){
    frisby.create('apis.z.com-case-4-8')
      .get('http://127.0.0.1:8000/test/device')
      .addHeader('host', 'apis.z.com')
      .addHeader('X-Device-ID', 'device_1')
      .expectStatus(200)
      .expectJSON({
        status: 4103,
      })
      //.inspectBody()
    .toss();
    callback(null, '10');
  },

  function(callback){
    frisby.create('apis.z.com-case-4-6-2')
      .patch('http://127.0.0.1:8080/apis/role_types/5/', {
        optional: 0
      }, {json: true})
      .addHeader('Authorization', 'Token 5fcd69a386ae6e073e51edb941b367d703496f21')
      .expectStatus(200)
      //.inspectBody()
    .toss();
    callback(null, '11');
  },

], function(error, result){
  //console.log(result);
})