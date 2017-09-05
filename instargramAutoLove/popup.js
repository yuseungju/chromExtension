
function someOtherFunction() { 
	for(var i = $("._eszkz._l9yih").length - 1;  $("._eszkz._l9yih").length - 25 <= i; i--){
		if(typeof  $("._eszkz._l9yih")[i] === "undefined" )
			continue;
		if($("._eszkz._l9yih")[i].childNodes[0].className == "_8scx2 coreSpriteHeartOpen")
			$("._eszkz._l9yih")[i].click();
	}
	document.documentElement.scrollTop = document.body.scrollHeight;
	$('html, body').scrollTop(document.body.scrollHeight);

}
setInterval(someOtherFunction, 3000);
	
	
	