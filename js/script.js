$(document).ready(function(){
	$(".bar").click(function(){
		$(".home-area").slideToggle();
	});
	$(".bar").click(function(){
		$(".bar").toggleClass("off");
	});
})


var btn = document.getElementById('pop');
var popp = document.querySelector(".popp");
var cross = document.querySelector(".cross");
btn.addEventListener("click",function(){
	popp.classList.add("add");
})

cross.addEventListener("click",function(){
	popp.classList.remove("add");
})









