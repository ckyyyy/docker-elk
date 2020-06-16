const express = require('express');
const axios = require('axios');
// Constants
const PORT = 8888;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/logstash', (req, res) => {
    var params = {
        type: 'logs',
        log: '2019-07-19 10:20:15.150 INFO  TimeCounter:663 [MeAsAnExecutor-1] - ' + Date(Date.now().toString())

    }
    axios.post('http://logstash:31311/logs', params)
    .then(innerRes => {
        console.log('send success ', res.data);
        res.send({hello: 'nddniuwasnduisand'});
    }); 
});

app.get('/getLog', (req, res) => {
    var result = {
        type: 'logs',
        log: '2019-07-19 10:20:15.150 INFO  TimeCounter:663 [MeAsAnExecutor-1] - ' + Date(Date.now().toString())
    }
    res.send(result)
});

app.listen(PORT, HOST);
console.log('Running on http://', PORT, ':', PORT);