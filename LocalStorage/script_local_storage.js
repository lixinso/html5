function saveStorage(id)
{
	var target = document.getElementById(id);
	var str = target.value;
	localStorage.setItem("message",str);
}

function loadStorage(id)
{
	var target = document.getElementById(id);
	var msg = localStorage.getItem("message");
	target.innerHTML = msg;
}