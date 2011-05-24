onmessage = function(event){
	var intArray=new Array(100);
	for(var i = 0 ; i < 100 ; i++)
	{
		intArray[i] = parseInt(Math.random()*100);
	}
	var worker;
	worker = new Worker("embeded_worker2.js");
	worker.postMessage(JSON.stringify(intArray));
	worker.onmessage = function(event){
		postMessage(event.data);
	}
}