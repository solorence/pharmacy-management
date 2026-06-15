window.onload = gotohome;

let main_nav_active = true;

let main_c = document.getElementById('main-content');

let new_active_page;
let old_active_page;

function gotohome(event){
	old_active_page = new_active_page;
	new_active_page = event.currentTarget;

	new_active_page.style.backgroundColor = '#84FF6F';
	new_active_page.style.color = 'black';

	if (new_active_page !== old_active_page && old_active_page != undefined) {
		old_active_page.style.backgroundColor = '#38B000';
		old_active_page.style.color = 'white';
	}
	//window.location.href='index.html';
	fetch('sidebar/dashboard.html', {cache:'no-store'}).then(res=> res.text()).then(html=>main_c.innerHTML = html);
}


function gotosales(event){
	old_active_page = new_active_page;
	new_active_page = event.currentTarget;
	
	new_active_page.style.backgroundColor = '#84FF6F';
	new_active_page.style.color = 'black';

	if (new_active_page !== old_active_page && old_active_page != undefined) {
		old_active_page.style.backgroundColor = '#38B000';
		old_active_page.style.color = 'white';
	}
	fetch('sidebar/sales.html').then(res=>res.text()).then(html=>main_c.innerHTML = html);
}


function gotoinventory(){
	fetch('sidebar/inventory.html').then(res=>res.text()).then(html=>main_c.innerHTML = html);
}


function gotopurchase(){
	fetch('sidebar/purchase.html').then(res=>res.text()).then(html=>main_c.innerHTML = html);
}


function gotoreports(){
	fetch('sidebar/reports.html').then(res=>res.text()).then(html=>main_c.innerHTML = html);
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