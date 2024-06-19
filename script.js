
const tablinks=document.querySelectorAll('.tab-links')
const tabContents=document.querySelectorAll('.tab-content')
const close =document.querySelector('.fa-window-close')
const open =document.querySelector('.fa-bars')
const side_menu=document.querySelector('.sideMenu')



function opentab(tabname){
   for(tablink of tablinks){
      tablink.classList.remove("active-link")
   }
   for(tabContent of tabContents){
      tabContent.classList.remove("active-tab")
   }
   event.currentTarget.classList.add('active-link')
   document.getElementById(tabname).classList.add('active-tab')
}
function openMenu(){
   side_menu.style.right='0px'
}
function closeMenu(){
   side_menu.style.right='-200px'
}