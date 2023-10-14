var toggleBtn = document.querySelector('#menu_toggler>span');
var closeBtn = document.querySelector('#close');
var navLink = document.querySelectorAll('.nav-link');
toggleBtn.addEventListener('click' ,  show);

closeBtn.addEventListener('click' ,  remove);
navLink.forEach(item=>item.addEventListener('click' ,  remove));

function show(){
	var sideBar = document.querySelector('.nav-list');
	sideBar.classList.toggle('active');
}

function remove(){
	var sideBar = document.querySelector('.nav-list');
	sideBar.classList.remove('active');
}