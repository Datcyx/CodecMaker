function card(a){
	if(a ==1){
		let cardc = document.getElementById("card");
		cardc.style.display="block";
		
	}else{
			let cardc = document.getElementById("card");
		cardc.style.display="none";
		
		
	}
}
function starta(){
	let lines = document.getElementById("line");
	lines.style.animationName ="extend";
	lines.style.animationDuration="1s";
	lines.style.animationIterationCount ="1";
	lines.style.transition="all";
	lines.style.transitionDuration="1s";
	lines.style.width="100%";
	card(1);
	
}
function menu_m_show(a){
	if(a == 1){
	let menu = document.getElementById("menu_m");
	let menuchange = document.getElementById("men");
	let closebtn = document.getElementById("close");
	menuchange.style.display="none";
	menu.style.display ="block";
	closebtn.style.display ="block";
	menu.style.animationName ="menu_anim_open";
	menu.style.animationDuration="0.2s";
	menu.style.transtion="all";
	menu.style.transitionDuration="0.3s";
	menu.style.zIndex ="1";
	 
		
	}else{

		let menu = document.getElementById("menu_m");
			let menuchange = document.getElementById("men");
	let closebtn = document.getElementById("close");
			menu.style.animationName ="menu_anim_close";
	menu.style.animationDuration="1s";
	menu.style.transtion="all";
	menu.style.transitionDuration="1s";
		menu.style.display ="none";
		menuchange.style.display="block";
		closebtn.style.display ="none";

	}
	
}

