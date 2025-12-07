import Particles from 'particlesjs';

    window.onload = function(){
    Particles.init({
        selector:'.background',
        sizeVariations:'5',
        maxParticles:'150',
        connectParticles:'True',
        color:'#F9F6EE'

    });


const main = document.querySelector(".main");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");


navLinks.forEach(link =>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);

        sections.forEach(section => section.style.display='none');

        
       

        const sectionToShow = document.getElementById(targetId);
           if (sectionToShow) {
            sectionToShow.style.display='block';
        }
    })
})

}