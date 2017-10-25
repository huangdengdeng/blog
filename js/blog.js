function JsonCreateheader() {
	var test;
	if(window.XMLHttpRequest) {
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		test = new XMLHttpRequest();
	} else if(window.ActiveXObject) {
		// IE6, IE5 浏览器执行代码
		test = new window.ActiveXObject();
	} else {
		alert("请升级至最新版本的浏览器");
	}
	if(test != null) {
		test.open("GET", "json/blog-json.json", true);
		test.send(null);
		test.onreadystatechange = function() {
			if(test.readyState == 4 && test.status == 200) {
				var obj = JSON.parse(test.responseText);
				createHeader(obj);
			}
		};
	}
	function createLi(obj) {
		var myheader = document.getElementById("myheader");
		var oUl = document.createElement("ul");
		var oFrag = document.createDocumentFragment();
		for(var i = 0, count = obj[0].headerTest.length; i < count; i++) {
			var oLi = document.createElement("li");
			var oA = document.createElement("a");
			var text = obj[0].headerTest[i];
			var oAt = document.createTextNode(text);
			oA.appendChild(oAt);
			console.log(obj[0].headerTest[i]);
			oLi.appendChild(oA);
			oFrag.appendChild(oLi);
		}
		oUl.appendChild(oFrag);
		myheader.appendChild(oUl);
	}

	function createHeader(obj) {
		//创建导航栏
		var obj;
		createLi(obj);
		//创建个人介绍
		var oH = document.getElementsByClassName("blog_text_autograph");
		var username = document.createTextNode(obj[0].name);
		oH[0].appendChild(username);
		console.log(obj[0].name);
		var oDiv = document.getElementsByClassName("blog_header_intrduce");
		var oPTit = document.createElement("p");
		var oTit= document.createTextNode(obj[0].user_int[0]);
		oPTit.appendChild(oTit);
		oPTit.className="blog_tit_intrduce";
		oDiv[0].appendChild(oPTit);
		for(var i = 0, count = obj[0].user_int.length-1; i < count; i++) {
			var text = obj[0].user_int[i+1];
			var oP = document.createElement("p");
			var oTest = document.createTextNode(text);
			oP.className = "blog_text_intrduce";
			oP.appendChild(oTest);
			oDiv[0].appendChild(oP);
			console.log(count);
		}

	}
}
window.onload = function() {
	JsonCreateheader();
};