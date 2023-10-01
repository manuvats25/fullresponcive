burger=document.querySelector('.burger')
navbar= document.querySelector('.navbar')
rightnav=document.querySelector('.rightNav')
nav_list=document.querySelector('.nav-list')



burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav')
    rightnav.classList.toggle('v-nav')
    nav_list.classList.toggle('v-nav')
})