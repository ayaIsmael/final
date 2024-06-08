
var top = document.getElementById('top');
window.onscroll = function(){
	if(window.scrollY >= 200){
		top.style.display="block";
	} 
}
top.onclick=function(){
	window.scrollTo({
		top:0,
		behavior:"smooth"
	});
}
