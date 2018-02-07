var request = require('request');


request('http://google.com',function (error,response,body) {
    if(error){
        console.log("ERROR: "+error);
    }
   console.log("Response: "+response);
   console.log("Body: "+body);
});