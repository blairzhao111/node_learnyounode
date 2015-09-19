
//this is a TCP time server, it's port number is provided by first argument

//because this is not a http server but a TCP server, we need to use 'net' module from Node core.
var net = require('net'),
    port = Number(process.argv[2]);

//createServer() call takes a callback function, unlike most callbacks in Node,
//this callback is called more than once, every connection received by server triggers another call to the callback,
//the callback looks like: function callback(socket){.....}
//also createServe() call returns an instance of your server.
//remember to attach your server to a specific port by using server.listen(portNumber)
//the socket object passed to the callback by createServer function is Node duplex Stream,
//it can be both read from and write to.
var server = net.createServer(function(socket){
	var needToSend = "",
	    date = new Date(),
	    month = 0;

	    //date.getMonth() returns you current month starting from 0, for example, January is 0, December is 11.
	    month = Number(date.getMonth())+1;

	    if(month<10){
	    	month = "0" + month;
	    }
	    else {
	    	month += "";
	    }
 
	    //use date object to get data and time
	    //date.getFullYear();
	    //date.getMonth();
	    //date.getDate();
	    //date.getHour();
	    //date.getMinutes();
	    //and so on...
	    needToSend += date.getFullYear()+"-"+month+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes();

	    //use socket.write(data) to write data to the socket
	    //use socket.end() to close the socket
	    //also socket.end(data) can be used to send data and then close connection
	    socket.end(needToSend+"\n");

});

server.listen(port);
