var p1=document.querySelector("#p1");
var p2=document.getElementById("p2");
var reset=document.getElementById("reset");
var p1score=0;
var p1disp=document.querySelector("#p1disp");
var p2score=0;
var p2disp=document.querySelector("#p2disp");
var over=false;
var winscore=5;
var inp=document.querySelector("input");
var ws=document.querySelector("p span");

p1.addEventListener("click",function(){
	if(!over)
		{
			p1score++;
			if(winscore===p1score)
			{
				p1disp.classList.add("winner");
				p2disp.classList.add("loser");
				over=true;
				
			}
			p1disp.textContent=p1score;
		}
});

p2.addEventListener("click",function(){
	if(!over)
		{
			p2score++;
			if(winscore===p2score)
			{
				p2disp.classList.add("winner");
				p1disp.classList.add("loser");
				over=true;
				
			}
			p2disp.textContent=p2score;
		}
});

reset.addEventListener("click",function(){
	p1score=0;
	p2score=0;
	p1disp.textContent=0;
	p2disp.textContent=0;
	over=false;
	p1disp.classList.remove("winner");
	p1disp.classList.remove("loser");
	p2disp.classList.remove("winner");
	p2disp.classList.remove("loser");

})

inp.addEventListener("change",function(){
	ws.textContent=inp.value;
	winscore=Number(inp.value);
	reset1();


});

function reset1(){
	p1score=0;
	p2score=0;
	p1disp.textContent=0;
	p2disp.textContent=0;
	over=false;
	p1disp.classList.remove("winner");
	p1disp.classList.remove("loser");
	p2disp.classList.remove("winner");
	p2disp.classList.remove("loser");
}




