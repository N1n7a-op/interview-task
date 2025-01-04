const express = require('express');
const app = express();
const port = 7777;

let route = require('./module/route');
let bodyParser = require('body-parser');

app.use(bodyParser.text({
	limit: '100mb'
}));

app.use(bodyParser.json({
    limit: '100mb'
}));

app.use('/api',route);


try{

app.listen(port,function(){
    console.log(`Server is runnrng on : http://localhost:${port}`);
})

}catch(err){
    console.log('Failed to connrct ',err);
}
