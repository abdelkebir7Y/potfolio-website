/*===== SHOW MENU =====*/

const showMenu = (toggeleId , navId) => {
    const toggle = document.getElementById(toggeleId);
    const nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show-menu');
        })
    }
}

showMenu('nav-toggle' , 'nav-menu'); 

/*===== HIDE MENU =====*/

const navLink = document.querySelectorAll('.nav__link');
function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach( item => item.addEventListener('click', linkAction));


/*===== SCROLL SECTIONS ACTIVE LINK =====*/

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('aclive-link');
        else
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('aclive-link');
    })
}

window.addEventListener('scroll', scrollActive);

/*===== CHANGE BACKGROUND HEADER =====*/

function scrollHeader() {
    const header = document.getElementById('header');
    if(this.scrollY >=200)
        header.classList.add('scroll-header');
    else 
        header.classList.remove('scroll-header');
}

window.addEventListener('scroll' , scrollHeader);

/*===== SHOW SCROLL TOP =====*/

function scrollTop() {
    const scrolTop = document.getElementById('scrolltop');
    if(this.scrollY >=560)
        scrolTop.classList.add('show-scroll');
    else 
        scrolTop.classList.remove('show-scroll');
}

window.addEventListener('scroll' , scrollTop);

