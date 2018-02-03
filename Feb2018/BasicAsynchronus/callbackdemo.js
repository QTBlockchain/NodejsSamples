//This function will 
//1. double the value if the number is even 
//2. if the input is odd it will fill error
// it does afer waiting for random time

var evenDoubler = function (value,callback) {
    var waitTime = Math.floor(Math.random()*1000);
    //if odd throw error
    if(value%2==1){
        setTimeout(function () {
            callback(new Error("Odd Input Provided"));
        },waitTime);
    } else {
        setTimeout(function () {
            callback(null,value*2,waitTime);    
        });
        
    }
}

var processResults = function (err,results,time) {
    if(err){
        console.log("ERROR: "+err);
    } else {
        console.log("The results are :"+results+" ("+time+" ms)");
    }
}

evenDoubler(2,processResults);
evenDoubler(3,processResults);

// other way to use

var count = 0;

for (var i = 0; i<10; i++) {
    console.log("Calling evenDoubler for value: " + i);
    evenDoubler(i, function(err, results, time) {
        if (err) {
            console.log("ERROR: " + err.message);
        } else {
            console.log("The results are: " + results + " (" + time + " ms)");
        }
        if (++count === 10) {
            console.log("Done!");
        }
    });
};

console.log("-----");
