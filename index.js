let header = document.querySelector(".header");
let menu = document.querySelector("#toggleBar");
let navbar = document.querySelector(".navbar");
const btns = document.querySelectorAll(".navi-btn");
const Slides = document.querySelectorAll(".video-slide")
const spinner = document.getElementById('spinner');
const content = document.getElementById('content');
// const navitem = document.getElementById("navitem")

menu.onclick = () => {
  menu.classList.toggle("bi-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  menu.classList.remove("bi-x");
  // sticki()
};

// load animation
window.onload = function() {
  setTimeout(function() {
    spinner.classList.add('stopped');
    spinner.style.display = 'none';
    content.classList.remove('hidden');
    spinner.classList.remove('stopped');
  }, 2000);
}

// load  animi



// video slides

let navSlide = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  
  Slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  btns[manual].classList.add("active");
  Slides[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    navSlide(i);
  });
});



// let stickey = navitem.offsetTop
// function sticki(){
//   if (window.pageYOffset >= stickey){
//     navSlide.classList.add('stickey')
//   } else navitem.classList.remove('stickey')
// } 
let swiper = new Swiper(".reveiw-slider", {
  spaceBetween:20,
  loop:true,
  autoplay:{
    delay:2500,
    disableOnInteraction:false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      // spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      // spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      // spaceBetween: 50,
    },
  },


  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    
  },

});


// scroll reveiw

window.addEventListener('scroll' , reveal);
function reveal() {
    let reveals = document.querySelectorAll('.reveal')
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let topVeiw = reveals[i].getBoundingClientRect().top
        let pointReveiw = 100;

        if (topVeiw < windowHeight - pointReveiw) {
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active')
        }
    }

}









