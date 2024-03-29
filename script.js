function loading(){
        document.getElementsByClassName('scene')[0].style.display="none";
        document.getElementsByClassName('container')[0].style.display="flex";
}

function stars(){
    let count = 20;
    let scene = document.querySelector('.scene');
    let i =0;
    while(i < count){
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);
        let duration = Math.random() * 1;
        let h = Math.random() * 100;

        star.style.left = x + 'px';
        star.style.width = 1 + 'px';
        star.style.height = 60 + 'px';
        star.style.animationDuration = duration + 's';
        
        scene.appendChild(star);
        i++;
    }
}

ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline', { delay: 500 });
ScrollReveal().reveal('.punchline', { delay: 2000 });

stars();