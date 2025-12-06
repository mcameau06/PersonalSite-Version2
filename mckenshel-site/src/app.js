import Particles from 'particlesjs';

    window.onload = function(){
    Particles.init({
        selector:'.background',
        sizeVariations:'5',
        maxParticles:'150',
        connectParticles:'True',
        color:'#F9F6EE'

    });
}