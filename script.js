//your JS code here. If required.
const div1=document.getElementById("square1");
div1.addEventListener("mouseenter",function(){
	let div2=document.getElementById("square2");
	div2.style.backgroundColor="#6F4E37";
	let div3=document.getElementById("square3");
	div3.style.backgroundColor="#6F4E37";
});
div1.addEventListener("mouseleave",function(){
	let div2=document.getElementById("square2");
	div2.style.backgroundColor="#E6E6FA";
	let div3=document.getElementById("square3");
	div3.style.backgroundColor="#E6E6FA";
});

const div2=document.getElementById("square2");
div2.addEventListener("mouseenter",function(){
	let div1=document.getElementById("square1");
	div1.style.backgroundColor="#6F4E37";
	let div3=document.getElementById("square3");
	div3.style.backgroundColor="#6F4E37";
});
div2.addEventListener("mouseleave",function(){
	let div1=document.getElementById("square1");
	div1.style.backgroundColor="#E6E6FA";
	let div3=document.getElementById("square3");
	div3.style.backgroundColor="#E6E6FA";
});
const div3=document.getElementById("square3");
div3.addEventListener("mouseenter",function(){
	let div1=document.getElementById("square1");
	div1.style.backgroundColor="#6F4E37";
	let div2=document.getElementById("square2");
	div2.style.backgroundColor="#6F4E37";
});

div3.addEventListener("mouseleave",function(){
	let div1=document.getElementById("sqaure1");
	div1.style.backgroundColor="#E6E6FA";
	let div2=document.getElementById("square2");
	div2.style.backgroundColor="#E6E6FA";
})
