const open = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const menu = document.querySelector('.header');
const links = document.querySelectorAll('.header__menu-link');

function menuScroll(open, close, menu, links){
    open.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', (e) =>{
        menu.classList.remove('active');
        document.body.style.overflow = '';
    });
    links.forEach(link =>{
        link.addEventListener('click', (e) => {
            menu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

menuScroll(open, close, menu, links);
const logo = document.querySelectorAll('.logo');
const hamburger = document.querySelector('.ham');
const closeImg = document.querySelector('.close-add');
function theme(checkbox, restangle, body){
    checkbox.addEventListener('click', (e) =>{
        restangle.classList.toggle('active');
        if(restangle.classList.contains('active')){
            //body.setAttribute('class', ''); 
            body.classList.add('active');
          
        } else {
            body.classList.remove('active');
        }
    });
}
theme(document.querySelector('.restangle'), document.querySelector('.restangle-child'), document.body);

