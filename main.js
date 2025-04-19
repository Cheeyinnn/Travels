 
 //for menu icon
 window.onload = function () {
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  });

  window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  };
};
                                            

//ask user name and ensure that the prompt comes after everything has loaded
  // Check if the username is already stored in sessionStorage
  let storedName = sessionStorage.getItem("username");

  let welcomeEl = document.getElementById("welcome-message");

  if (storedName && welcomeEl) {
      welcomeEl.style.display = "block";
      welcomeEl.innerHTML = "Welcome back, " + storedName + "!";
  } else if (welcomeEl) {
      setTimeout(function () {
          getUserName();
      }, 100);
  }

  function getUserName() {
    let userName = prompt("Please enter your name:");
    let welcomeEl = document.getElementById("welcome-message");

    if (welcomeEl) {
        if (userName) {
            sessionStorage.setItem("username", userName);
            welcomeEl.style.display = "block";
            welcomeEl.innerHTML = "Welcome, " + userName + "!";
        } else {
            welcomeEl.style.display = "block";
            welcomeEl.innerHTML = "Welcome, Guest!";
        }
    }
}


//Swiper 
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

 

//Swiper for country page

document.querySelectorAll('.mySwiper').forEach((el) => {
  new Swiper(el, {
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: el.querySelector('.swiper-pagination'),
      clickable: true,
    },
   
    navigation: {
      nextEl: el.querySelector('.swiper-button-next'),
      prevEl: el.querySelector('.swiper-button-prev'),
    },
  });
});
