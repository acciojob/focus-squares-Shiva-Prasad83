//your JS code here. If required.
let squares=document.getElementsByClassName("square");
for(let square of squares){
	square.addEventListener("mouseover",(e)=>{
		for(let i=0;i<squares.length;i++){
			if(e.target.id!=squares[i].id){
				squares[i].style.backgroundColor="#6F4E37";
			}
		}
	});
	square.addEventListener("mouseout",(e)=>{
		for(let i=0;i<squares.length;i++){
			if(e.target.id!=squares[i].id){
				squares[i].style.backgroundColor="#E6E6FA";
			}
		}
	})
}