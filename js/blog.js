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
				createSection(obj);
				createFooter(obj);
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
		var oTit = document.createTextNode(obj[0].user_int[0]);
		oPTit.appendChild(oTit);
		oPTit.className = "blog_tit_intrduce";
		oDiv[0].appendChild(oPTit);
		for(var i = 0, count = obj[0].user_int.length - 1; i < count; i++) {
			var text = obj[0].user_int[i + 1];
			var oP = document.createElement("p");
			var oTest = document.createTextNode(text);
			oP.className = "blog_text_intrduce";
			oP.appendChild(oTest);
			oDiv[0].appendChild(oP);
			console.log(count);
		}

	}

	function createSection(obj) {
//		动态创建section
		var oBigDiv = document.getElementsByClassName("blog_introduce");
		var oDiv = document.createElement("div");
		//		动态创建两个同样样式div
		for(var i = 0, count = obj[0].userlive.length; i < count; i++) {
			console.log("rt8ug");
			var oDivBox = oBigDiv[0].appendChild(oDiv);
			var oP = document.createElement("p");
			var oPS = document.createElement("p");
			var oImg = document.createElement("img");
			var ImgSrc = obj[0].userlive[i].imgurl;
			var oDivBoxText = document.createTextNode(obj[0].userlive[i].text);
			//			console.log(ImgSrc);
			oPS.appendChild(oDivBoxText);
			oImg.setAttribute("src", " ");
			oImg.attributes[0].value = ImgSrc;
			var oDivSmall = document.createElement("div");
			oDivSmall.className = "blog_mylive_details";
			oDivSmall.appendChild(oImg);
			oDivSmall.appendChild(oPS);
			oDivBox.className = "blog_introduce_mylive";
			oP.className = "blog_tit_font";
			oP.innerHTML = obj[0].userlive[i].tit;
			oDivBox.appendChild(oP);
			oDivBox.appendChild(oDivSmall);
			oBigDiv[0].appendChild(oDivBox);
		}

		//动态创建联系方式盒子
		//		盒子左边部分
		var oBoxOther = document.getElementsByClassName("blog_other_details");
		var oListDiv = document.createElement("div");
		var oListP = document.createElement("p");
		var oFrag = document.createDocumentFragment();
		var oListUl = document.createElement("ul");
		for(var i = 0, count = obj[0].other.list_left.list.length; i < count; i++) {
			var oListLi = document.createElement("li");
			var oListA = document.createElement("a");
			var txt = obj[0].other.list_left.list[i];
			console.log(txt);
			var listtext = document.createTextNode(obj[0].other.list_left.list[i]);
			//			console.log(listtext);
			oListA.appendChild(listtext);
			oListLi.appendChild(oListA);
			oFrag.appendChild(oListLi);
		}
		oListUl.appendChild(oFrag);
		oListDiv.className = "blog_other_links";
		oListP.className = "blog_tit_font";
		oListP.innerHTML = obj[0].other.list_left.tit;
		oListDiv.appendChild(oListP);
		var oListPT = document.createElement("p");
		oListPT.innerHTML = obj[0].other.list_left.intr;
		oListDiv.appendChild(oListPT);
		oListDiv.appendChild(oListUl);
		oBigDiv[0].appendChild(oBoxOther[0]).appendChild(oListDiv);

		//动态创建盒子右边部分
		var oConDiv = document.createElement("div");
		var oConP = document.createElement("p");
		var oConTit = document.createTextNode(obj[0].other.list_right.tit);
		console.log(oConTit);
		
		oConDiv.className = "blog_other_email";
		oConP.className = "blog_tit_font";
		oConP.appendChild(oConTit);
		oConDiv.appendChild(oConP);
		for(var i = 0, count = obj[0].other.list_right.list.length; i < count; i++) {
			var oConPList = document.createElement("p");
			var oConList= document.createTextNode(obj[0].other.list_right.list[i]);
			oConPList.appendChild(oConList);
			oConDiv.appendChild(oConPList);
		}
		oBoxOther[0].appendChild(oConDiv);
//		创建大盒子右边的分享
		var oPicBox=document.getElementsByClassName("blog_share");
		var oBoxList=document.getElementsByClassName("blog_share_pic");
		var oPicTit = document.createElement("p");
		var oPicTitTxt=document.createTextNode(obj[0].other_pic.tit);
		var oBoxPicList=document.createElement("div");
		oPicTit.className="blog_tit_font";
		oBoxPicList.className="blog_share_piclist";
		oPicTit.appendChild(oPicTitTxt);
		oBoxList[0].appendChild(oPicTit);
		for(var i=0,count=obj[0].other_pic.ImgURL.length;i<count;i++){
			var oBoxPicBox=document.createElement("div");
			var oPicA=document.createElement("a");
			var oBoxImg=document.createElement("img");
			var BoxImgSrc=obj[0].other_pic.ImgURL[i];
			console.log(BoxImgSrc);
			oBoxPicBox.className="blog__piclist_layout";
			oBoxImg.setAttribute("src"," ");
			oBoxImg.attributes[0].value = BoxImgSrc;
			oPicA.appendChild(oBoxImg);
			oBoxPicBox.appendChild(oPicA);
			oBoxPicList.appendChild(oBoxPicBox);
		}
		oBoxList[0].appendChild(oBoxPicList);
	}
	function createFooter(obj){
		var oDiv=document.getElementsByClassName("blog_skill_details");
		var oTit=document.getElementsByClassName("blog_footer_tit_font");
		var oTwoTitp=document.createTextNode(obj[0].footer.footerTwo.tit);
		var oThreeTit=document.createTextNode(obj[0].footer.footerThree.tit);
		oTit[0].appendChild(document.createTextNode(obj[0].footer.footerOne.tit));
		oTit[1].appendChild(oTwoTitp);
		oTit[2].appendChild(oThreeTit);
		console.log(obj[0].footer.footerOne.tit);
		for(var i=0,count=obj[0].footer.footerOne.txt.length;i<count;i++){
			var oPt=document.createElement("p");
			var oPTxt=document.createTextNode(obj[0].footer.footerOne.txt[i]);
			oPt.className="blog_footer_text_font";
			oPt.appendChild(oPTxt);
			oDiv[0].appendChild(oPt);
		}
//		创建中间div的MOM
		var oTwoDiv=document.getElementsByClassName("blog_other_details_")[0];
		var oPtwo=document.createElement("p");
		var oImg=document.createElement("img");
		var oImgURL=obj[0].footer.footerTwo.imgURL;
		var oPtwoTxt=document.createTextNode(obj[0].footer.footerTwo.txt[0]);
		oPtwo.className="blog_footer_text_font";
		oPtwo.appendChild(oPtwoTxt);
		oImg.setAttribute("src","");
		oImg.attributes[0].value=oImgURL;
		oTwoDiv.appendChild(oImg);
		oTwoDiv.appendChild(oPtwo);
		
		for(var i=0,count=obj[0].footer.footerThree.txt.length;i<count;i++){
			var oDivTr=document.getElementsByClassName("blog_more_details")[0];
			var oP=document.createElement("p");
			var oPTxt=document.createTextNode(obj[0].footer.footerThree.txt[i]);
			oP.className="blog_footer_text_font";
			oP.appendChild(oPTxt);
			oDivTr.className="blog_more_details";
			oDivTr.appendChild(oP);
		}
		
		
	}
}
window.onload = function() {
	JsonCreateheader();
};