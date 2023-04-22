/////////////Navbar hover effect
const nav = document.querySelector('.navbar');

const handlehover = function (e, opacity) {
  if (e.target.classList.contains('nav_item')) {
    const link = e.target;
    const siblings = link.closest('.navbar').querySelectorAll('.nav_item');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
  }
};

nav.addEventListener('mouseover', function (e) {
  handlehover(e, 0.6);
});

nav.addEventListener('mouseout', function (e) {
  handlehover(e, 1);
});


///////////////Hero Section on load animation
const section1 = document.querySelector('.hero');

const revealhero = function(entries,observer1){
    const [entry] = entries;
    if(!entry.isIntersecting) return;
    entry.target.classList.remove('hero--initial');
    observer1.unobserve(entry.target);
}

const heroobserver = new IntersectionObserver(revealhero,{root:null,threshold:0.2,});

heroobserver.observe(section1);
section1.classList.add('hero--initial');


//////Revealing sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null, threshold: 0.2,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

///////////////Responsiveness
//Navbar Hamburger
const bars = document.querySelector('.hamburger');
const menu = document.querySelector('.nav_list');
if(window.innerWidth < 480){
  console.log('width 480');
  bars.classList.remove('hidden');
}

bars.addEventListener('click',function(){
  console.log(menu);
  menu.classList.toggle('active');
  bars.style.transform  = "rotateX('90')";
});

menu.addEventListener('click',function(){
  menu.classList.toggle('active');
});