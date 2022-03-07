// import st from "node-static"
// let file = new st.Server();
// require('http').createServer(function(request, response) {
//     request.addListener('end', function() {
//         file.serve(request, response);
//     }).resume();
// }).listen(80);

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/dist/basic-serverless-dynamodb'));

app.get('/*', function(req,res) {

    res.sendFile(path.join(__dirname+'/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

