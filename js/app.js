window.onload = gotohome;

function gotohome(){
	//window.location.href='index.html';
	fetch('sidebar/dashboard.html', {cache:'no-store'}).then(res=> res.text()).then(html=>document.getElementById('main-content').innerHTML = html);
}


function gotosales(){
	fetch('sidebar/sales.html').then(res=>res.text()).then(html=>document.getElementById('main-content').innerHTML = html)
}


function gotoinventory(){
	fetch('sidebar/inventory.html').then(res=>res.text()).then(html=>document.getElementById('main-content').innerHTML = html)
}


function gotopurchase(){
	fetch('sidebar/purchase.html').then(res=>res.text()).then(html=>document.getElementById('main-content').innerHTML = html)
}


function gotoreports(){
	fetch('sidebar/reports.html').then(res=>res.text()).then(html=>document.getElementById('main-content').innerHTML = html)
}


function gotoself(){
	window.location.href='index.html'	
}
console.log('test cache! hope it works well now')