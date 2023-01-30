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

const scrollEvent = () => {
  const main = document.querySelector('.scroll-container');
  const section1 = document.querySelector('#projects');
  const section2 = document.querySelector('#contact');
  console.log(section1, section2)

  if (main.scrollTop > 50) {
    section1.style.backgroundColor = "red";

  } else {
    section1.style.backgroundColor = "pink";
  }

  if (main.scrollTop > window.innerHeight / 2) {
    section2.style.backgroundColor = "blue";
  } else {
    section2.style.backgroundColor = "purple";
  }
}

window.addEventListener('scroll', scrollEvent);

