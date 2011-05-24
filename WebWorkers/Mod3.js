onmessage = function(event){
	var data = event.data;
	var returnStr ;
	var intArray = data.split(";");
	returnStr = "";
	for(var i =  0 ; i < intArray.length;i++)
	{
		if(parseInt(intArray[i]) % 3 == 0)
		{
			if(returnStr != "")
				returnStr += ";";
			returnStr += intArray[i];
		}
	}
	postMessage(returnStr);
}