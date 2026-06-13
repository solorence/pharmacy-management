window.onload = gotohome;

let main_nav_active = true;

function gotohome(){
	//window.location.href='index.html';
	fetch('sidebar/dashboard.html', {cache:'no-store'}).then(res=> res.text()).then(html=>document.getElementById('main-content').innerHTML = html);
}


function gotosales(){
	fetch('sidebar/sales.html').then(res=>res.text()).then(html=>document.getElementById('main-content').innerHTML = html);
}


function gotoinventory(){
	fetch('sidebar/inventory.html').then(res=>res.text()).then(html=>document.getElementById('main-content').innerHTML = html);
}


function gotopurchase(){
	fetch('sidebar/purchase.html').then(res=>res.text()).then(html=>document.getElementById('main-content').innerHTML = html);
}


function gotoreports(){
	fetch('sidebar/reports.html').then(res=>res.text()).then(html=>document.getElementById('main-content').innerHTML = html);
}

function togglenav(){
	main_nav_active ? loadnav2() : loadnav1();
}


function loadnav1(){
	fetch('sidebar/navlist1.html').then(res=>res.text()).then(html=>document.getElementById('nav-container').innerHTML = html);
	resizenav1();
	main_nav_active=true;
}

function loadnav2(){
	fetch('sidebar/navlist2.html').then(res=>res.text()).then(html=>document.getElementById('nav-container').innerHTML = html);
	resizenav2();
	main_nav_active=false;
}

function resizenav1(){
	let nav1 = document.getElementById('nav-container');
	nav1.style.minWidth='16vw';
}

function resizenav2(){
	let nav2 = document.getElementById('nav-container');
	nav2.style.minWidth='4vw';	
}