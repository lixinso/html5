function init()
{
	setInterval(function(){
		applicationCache.update();
	},1000);
	applicationCache.addEventListener("updateready",function(){
		if(confirm("cache udpated, need refresh page to get new version.")){
			applicationCache.swapCache();
			location.reload();
		}
	},true);
}