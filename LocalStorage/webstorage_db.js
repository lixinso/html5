function saveStorage()
{ 
	var data = new Object();

	data.name = document.getElementById('name').value;
	data.email = document.getElementById('email').value;
	data.phone = document.getElementById('phone').value;
	data.memo = document.getElementById('memo').value;
	var str = JSON.stringify(data);
	localStorage.setItem(data.name,str);
	alert("data saved");
}

function findStorage(id)
{
	 
	var find = document.getElementById('find').value;
	var str = localStorage.getItem(find);
	var data = JSON.parse(str);
	var result = "Name:" + data.name + '<br>';
	 result+= "Email:" + data.email + '<br>';
	 result+= "Phone:" + data.phone + '<br>';
	 result+= "Memo:" + data.memo +'<br>';
	var target = document.getElementById(id);
	target.innerHTML = result;
}