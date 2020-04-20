const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const home = document.querySelector('.home-button');
    const about = document.querySelector('.about-button');
    const skills = document.querySelector('.skills-button');
    const interests = document.querySelector('.interests-button');
    
    const toggleFunction = () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');
    
        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });
       
    }

    burger.addEventListener('click',()=>{
        toggleFunction();
    });
    
    home.addEventListener('click',()=>{
        toggleFunction();
    });
    
    about.addEventListener('click',()=>{
        toggleFunction();
        window.location.href = "#about-me-section";
    });
    
    skills.addEventListener('click',()=>{
        toggleFunction();
        window.location.href = "#skills-section";
    });
    
    interests.addEventListener('click',()=>{
        toggleFunction();
        window.location.href = "#interests-section";
    });
}

const hoverEffect = () => {
    const interest = document.querySelectorAll('.interest-item-wrapper');
    
    interest.forEach(inter => {
        inter.addEventListener('mouseover', () => {
            inter.childNodes[1].classList.add('img-darken');
        })
        
        inter.addEventListener('mouseout', () => {
            inter.childNodes[1].classList.remove('img-darken');
        })
    })
}

navSlide();
hoverEffect();

