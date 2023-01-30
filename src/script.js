document.querySelectorAll('.home-nav').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('home').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    })
})

document.querySelectorAll('.about-nav').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('about').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    })
})
document.querySelectorAll('.projects-nav').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('projects').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    })
})
document.querySelectorAll('.services-nav').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('projects').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    })
})
document.querySelectorAll('.contact-nav').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    })
})


const elementInView = (element, percentageScroll = 100) => {
    const elementTop = element.getBoundingClientRect().top;
    return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
    );
};
const elementFade = (element, percentageScroll = 100) => {
    const elementBottom = element.getBoundingClientRect().bottom;
    return (
        elementBottom <= 
        ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
    );
}

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};
const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
    
};

const handleScrollAnimation = () => {
    const scrollAreas = document.querySelectorAll('.scroll-area')
    scrollAreas.forEach((element) => {
      if (elementInView(element, 50)) {
        displayScrollElement(element);
        if (elementFade(element, 50)){
            hideScrollElement(element)
        }
      }
      else{
          hideScrollElement(element);
      }
    })
}

document.querySelector('.scroll-container').addEventListener('scroll', ()=>{
    handleScrollAnimation();
})

// window.addEventListener('scroll', () => {
   
// })


