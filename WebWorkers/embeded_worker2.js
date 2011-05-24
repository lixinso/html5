onmessage = function(event){
	var intArray = JSON.parse(event.data);
	var returnStr;
	returnStr = "";
	for(var i = 0 ;i < intArray.length; i++)
	{
		if(parseInt(intArray[i]) % 3 == 0)
		{
			if(returnStr != "")
				returnStr += ";";
			returnStr += intArray[i];
		}
	}
	postMessage(returnStr);
	close();
}