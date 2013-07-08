// ==UserScript==
// @name          CCU-ECOURSE-FIX
// @namespace     http://kojima.tw/
// @description   display enhancement and modification
// @match		  http://ecourse.elearning.ccu.edu.tw/*
// @match		  http://ecourse.webedu.ccu.edu.tw/*
// @include       http://ecourse.elearning.ccu.edu.tw/*
// @include       http://ecourse.webedu.ccu.edu.tw/*

// @version       09 Jul 2013
// ==/UserScript==

/*
	Author:  Kojima
	Version: 09 Jul 2013
*/
//Tab Links && Materials Links
if( (document.URL.match('bar.php') != null)
	|| (document.URL.match('course_menu.php') != null)
) {
	var link = document.getElementsByTagName('a');
	for(var i=0;i < link.length;i++) {
		if(link[i].target == 'target')
			link[i].setAttribute('onclick', (link[i].getAttribute('onclick') == null?'':link[i].getAttribute('onclick')) + 'parent.frames[3].location=this.href');
		if(link[i].target == 'html') {
			link[i].setAttribute('onclick', (link[i].getAttribute('onclick') == null?'':link[i].getAttribute('onclick')) + 'parent.frames[1].location=this.href');
		}
	}
}
//Encoding
if( (document.URL.match('login_s.php') != null)
	|| (document.URL.match('take_course.php') != null)
) {
	document.charset = 'Big5';
	document.title = 'Ecourse課程平台學生系統';
}

//Index
if( (document.URL == 'http://ecourse.elearning.ccu.edu.tw/') 
	|| (document.URL == 'http://ecourse.elearning.ccu.edu.tw/index.php')
	|| (document.URL == 'http://ecourse.webedu.ccu.edu.tw/')
	|| (document.URL == 'http://ecourse.webedu.ccu.edu.tw/index.php')
){
	var tb = document.getElementsByTagName('table').item(4);
	tb.deleteRow(1);
	var fs = document.getElementsByName('form1').item(0);
	fs.parentNode.removeChild(fs);

	document.getElementsByTagName('table')[0].getElementsByTagName('td')[0].getElementsByTagName('p')[2].setAttribute('style', 'font-size:80%');
}

//News Table
if( (document.URL.match('news.php') != null)
	|| (document.URL.match('php/') != null)
) {
	var imgs = document.getElementsByTagName('img');
	for(var i=0;i< imgs.length;i++) {
		if(imgs[i].getAttribute('src') == '/images/skin1/bor/bor_04.GIF') {
			imgs[i].setAttribute('height', imgs[i].parentElement.parentElement.parentElement.offsetHeight)
		}
		if(imgs[i].getAttribute('src') == '/images/skin1/bor/bor_06.GIF') {
			imgs[i].setAttribute('height', imgs[i].parentElement.parentElement.parentElement.offsetHeight)
		}
	}
}

//Teacher Info Seltion
if( document.URL.match('show_teacher_info.php') != null){
	document.getElementsByTagName('select').item(0).setAttribute('onchange', 'if(this.value) window.location.href=\'?teacher_num=\'+this.value');
}