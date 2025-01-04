let express = require('express');
let app = express();
let port = 6666;

var route = require('./module/route');

let bodyParser = require('body-parser');

app.use(bodyParser.text({
	limit: '100mb'
}));

app.use(bodyParser.json({
    limit: '100mb'
}));

app.use('/api',route);

app.listen(port,function(){
    console.log('connected to port',port);
});