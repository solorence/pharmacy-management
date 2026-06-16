window.onload = winload;

let main_nav_active = true;

let main_c = document.getElementById('main-content');

let new_active_page;
let old_active_page;

function winload(){
	fetch('sidebar/dashboard.html', {cache:'no-store'}).then(res=> res.text()).then(html=>main_c.innerHTML = html);
	loadnav1().then(()=>{
		let dashb = document.querySelector('#nav-list1 li:first-of-type');
		dashb.style.backgroundColor='#84FF6F';
		dashb.style.color = 'black';
		new_active_page = dashb;
			}
		);
}


function logoclicked(){
	console.log(event.target.id);
	if (event.target.id == 'logonav1'){
		fetch('sidebar/dashboard.html', {cache:'no-store'}).then(res=> res.text()).then(html=>main_c.innerHTML = html);
	loadnav1().then(()=>{
		let dashb1 = document.querySelector('#nav-list1 li:first-of-type');
		dashb1.style.backgroundColor='#84FF6F';
		dashb1.style.color = 'black';
		new_active_page = dashb1;
			}
		);

	}

	else if (event.target.id == 'logonav2'){
		console.log('')

		fetch('sidebar/dashboard.html', {cache:'no-store'}).then(res=> res.text()).then(html=>main_c.innerHTML = html);
	loadnav2().then(()=>{
		let dashb2 = document.querySelector('#nav-list2 li:first-of-type');
		dashb2.style.backgroundColor='#84FF6F';
		dashb2.style.color = 'black';
		new_active_page = dashb2;
			}
		);

	}

}


function gotohome(event){
	markActivePage(event);	
	fetch('sidebar/dashboard.html', {cache:'no-store'}).then(res=> res.text()).then(html=>main_c.innerHTML = html);
}


function gotosales(event){
	markActivePage(event);
	fetch('sidebar/sales.html').then(res=>res.text()).then(html=>main_c.innerHTML = html);
}


function gotoinventory(event){
	markActivePage(event);
	fetch('sidebar/inventory.html').then(res=>res.text()).then(html=>main_c.innerHTML = html);
}


function gotopurchase(event){
	markActivePage(event);
	fetch('sidebar/purchase.html').then(res=>res.text()).then(html=>main_c.innerHTML = html);
}


function gotoreports(event){
	markActivePage(event);
	fetch('sidebar/reports.html').then(res=>res.text()).then(html=>main_c.innerHTML = html);
}

function togglenav(){
	main_nav_active ? loadnav2().then(activestatenav2):loadnav1().then(activestatenav1);
}

function activestatenav1(){
	let now_active = document.getElementById(new_active_page.id);
	now_active.style.backgroundColor='#84FF6F';
	now_active.style.color = 'black';
}

function activestatenav2(){
	console.log('new active in nav2 is '+new_active_page.id);
	let now_active = document.getElementById(new_active_page.id);
	console.log('now active in nav2 is '+now_active.id);
	now_active.style.backgroundColor='red';
}


function loadnav1(){
	return fetch('sidebar/navlist1.html').then(res=>res.text())
	.then(html=>{document.getElementById('nav-container').innerHTML = html;
				resizenav1();
				main_nav_active=true;
				}
		);
}

function loadnav2(){
	return fetch('sidebar/navlist2.html').then(res=>res.text())
	.then(html=>{document.getElementById('nav-container').innerHTML = html;})
	.then(()=>{resizenav2(); main_nav_active=false;	})
	
}

function resizenav1(){
	let nav1 = document.getElementById('nav-container');
	nav1.style.minWidth='16vw';
	console.log('resizenav1 called');
}

function resizenav2(){
	let nav2 = document.getElementById('nav-container');
	nav2.style.minWidth='4vw';
	console.log('resizenav2 called');	
}


function markActivePage(event){
	old_active_page = new_active_page;
	new_active_page = event.currentTarget;
	active_page =event.currentTarget;

	new_active_page.style.backgroundColor = '#84FF6F';
	new_active_page.style.color = 'black';

	if (new_active_page !== old_active_page && old_active_page != undefined) {
		old_active_page.style.backgroundColor = '#38B000';
		old_active_page.style.color = 'white';
	}

}