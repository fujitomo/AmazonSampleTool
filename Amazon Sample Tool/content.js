

//メッセージ送信
chrome.runtime.sendMessage({name: "send_load" ,send_val: ""}, function(response) {
	//alert("コンテントsendMessage:" + response.send_val);
	if(response.name==="send_background") {
		//alert(response.name);
		document.getElementById("twotabsearchtextbox").value = response.send_val
	}
});

document.getElementById("search").addEventListener( 'click', onClick, true ) ;
function onClick( e ) {
	 let send_val = document.getElementById("search_value").value
	 //alert(send_val);
	 if (!send_val){ return false;}
     chrome.runtime.sendMessage({name: "send_click",send_val: send_val});
}
