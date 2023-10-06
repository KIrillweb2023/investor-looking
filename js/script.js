

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
const five = document.querySelector('.five');
const sportmaster = document.querySelector('.sportmaster');
const sberbank = document.querySelector('.sberbank');
const tinkoff = document.querySelector('.tinkoff');
function theme(checkbox, restangle, body, logoCompany){
    checkbox.addEventListener('click', (e) =>{
        restangle.classList.toggle('active');
        if(restangle.classList.contains('active')){
            //body.setAttribute('class', ''); 
            body.classList.add('active');
            logoCompany.setAttribute('src', './icons/slider-tabs/tinkoff-white.svg');
        } else {
            body.classList.remove('active');
            logoCompany.setAttribute('src', './icons/slider-tabs/tinkoff-dark.svg');
        }
    });
}
theme(document.querySelector('.restangle'), document.querySelector('.restangle-child'), document.body, tinkoff);

const tabsHeader = document.querySelectorAll('.tabs-item');
const contentTabs = document.querySelectorAll('.application__items-child');
const contentParentTabs = document.querySelector('.application__button');

function contentTabOnVisible(){
    contentTabs.forEach(item =>{
        item.classList.add('hide');
        item.classList.remove('show');
    });
    tabsHeader.forEach(item =>{
        item.classList.remove('active')
    });
}
function contentTabOffVisible(i = 0){
    contentTabs[i].classList.add('show', 'fade');
    contentTabs[i].classList.remove('hide');
    tabsHeader[i].classList.add('active');
}
contentTabOnVisible();
contentTabOffVisible();

contentParentTabs.addEventListener('click', (event) =>{
    const target = event.target;
    if(target && target.classList.contains('tabs-item')){
        tabsHeader.forEach((item, i) =>{
            if(target == item){
                contentTabOnVisible();
                contentTabOffVisible(i);
            }
        });
    }
});


const section = document.querySelector('.main');
const header = document.querySelector('.header');
function headerAnimationFrame(header, section){
    window.addEventListener('scroll', () =>{
        const offsetY = window.scrollY;
        const scrollTopSection = section.clientHeight;
       
        if(offsetY >= scrollTopSection){
            header.style.position = 'fixed';
            header.classList.add('animation-header-scroll');
        } else if(offsetY < scrollTopSection){
            header.style.position = '';
            header.classList.remove('animation-header-scroll');
        }
    });
}

headerAnimationFrame(header, section);



