const mobileMenu = document.querySelector('.mobile');
const mobileBg = document.querySelector('.mobile-back');
const hideHead = document.querySelector('.hide');
const showMenu = document.querySelectorAll('.show-this');
const closeMark = document.querySelector('.close');
const revealHead = document.querySelector('.animation-reveal-head');
const revealText = document.querySelector('.animation-reveal-text');
const revealText2 = document.querySelector('.animation-reveal-text2');
const animateImg = document.querySelector('.img-animate');
const animateGrid = document.querySelectorAll('.animate-grid');

mobileMenu.addEventListener('click',(e)=>{
  for(let i = 0; i < showMenu.length; i++){
    showMenu[i].style.display = "block";
    mobileBg.style.backgroundImage  = "url('')";
    mobileBg.style.backgroundColor  = "black";
    hideHead.style.display = "none";
    closeMark.style.visibility  = "visible";
    mobileMenu.style.display = "none";
  }

});
closeMark.addEventListener('click',(e) =>{
  for(let i = 0; i < showMenu.length; i++){
    showMenu[i].style.display = "none";
    mobileBg.style.backgroundImage = "url('images/mobile/image-hero.jpg')";
    closeMark.style.visibility  = "hidden";
    mobileMenu.style.display = "block";
    mobileBg.style.backgroundColor  = "transparent";
  }});

  ScrollTrigger.matchMedia({
    "(min-width: 960px)": function() {
      const reveal = gsap.to(".animation-reveal-head", {
        scrollTrigger: {
          trigger: '.animation-reveal-head',  
     
        },
        y:20,
      
      });
      
    },
      "(min-width: 600px) and (max-width: 959px)": function() {
        return function() {
          gsap.kill();
        }
    
      },
    
      "(max-width: 599px)": function() {
        return function() {
          gsap.kill();
        }
      
      },
      "all": function() {}
  })

  const imganimate = gsap.to(".img-animate", {
    scrollTrigger: {
      trigger: '.img-animate',

    },
    x: -300,
  
  });
  imganimate.duration(1);
 
 
 const text = gsap.timeline({
    scrollTrigger: {
      trigger: '.text-trigger',
      start: 'top top',
    }
  })
  .to('.animation-reveal-text', {
    opacity: 0
  })
  .to('.animation-reveal-text', {
    opacity: 1
  });
  text.duration(0.5);
 

window.onload = async () =>{
  let tl = gsap.timeline({defaults: {ease: "power4.inOut", duration: 2}})
  tl.to('.animate-hero', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2.2})
  gsap.to('.animate-square',{opacity:1,y:-25,duration:1});
}

  const boxes = gsap.utils.toArray('.animate-grid');
  boxes.forEach((item, i) => {
    const gridAnimation = gsap.fromTo(item, { y: 50}, {duration: 1, y: 0});
    ScrollTrigger.create({
      trigger: item,
      animation: gridAnimation,
    });
 
  });
  

