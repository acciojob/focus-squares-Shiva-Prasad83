//your JS code here. If required.
const div1=document.getElementById("square1");
const div2=document.getElementById("square2");
const div3=document.getElementById("square3");

div1.addEventListener("mouseover",function(){
	div2.style.backgroundColor="rgb(111, 78, 55)";
	div3.style.backgroundColor="rgb(111, 78, 55)";
});
div1.addEventListener("mouseout",function(){
	div2.style.backgroundColor="rgb(230, 230, 250)";
	div3.style.backgroundColor="rgb(230, 230, 250)";
});

div2.addEventListener("mouseover",function(){
	div1.style.backgroundColor="rgb(111, 78, 55)";
	div3.style.backgroundColor="rgb(111, 78, 55)";
});
div2.addEventListener("mouseout",function(){
	div1.style.backgroundColor="rgb(230, 230, 250)";
	div3.style.backgroundColor="rgb(230, 230, 250)";
});
div3.addEventListener("mouseover",function(){
	div2.style.backgroundColor="rgb(111, 78, 55)";
	div1.style.backgroundColor="rgb(111, 78, 55)";
});
div3.addEventListener("mouseout",function(){
	div2.style.backgroundColor="rgb(230, 230, 250)";
	div1.style.backgroundColor="rgb(230, 230, 250)";
});