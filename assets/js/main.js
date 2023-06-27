// Carrosel 

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  }
});

var swiper = new Swiper(".slide-ceo", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false
  }
});


//Menu

/**
 * Mobile nav toggle
 */

const mobileNavShow = document.querySelector('.mobile-nav-show');
const mobileNavHide = document.querySelector('.mobile-nav-hide');

document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
  el.addEventListener('click', function (event) {
    event.preventDefault();
    mobileNavToogle();
  })
});

function mobileNavToogle() {
  document.querySelector('body').classList.toggle('mobile-nav-active');
  mobileNavShow.classList.toggle('d-none');
  mobileNavHide.classList.toggle('d-none');
}

/**
 * Hide mobile nav on same-page/hash links
 */
document.querySelectorAll('#navbar a').forEach(navbarlink => {

  if (!navbarlink.hash) return;

  let section = document.querySelector(navbarlink.hash);
  if (!section) return;

  navbarlink.addEventListener('click', () => {
    if (document.querySelector('.mobile-nav-active')) {
      mobileNavToogle();
    }
  });

});

/**
 * Toggle mobile nav dropdowns
 */
const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

navDropdowns.forEach(el => {
  el.addEventListener('click', function (event) {
    if (document.querySelector('.mobile-nav-active')) {
      event.preventDefault();
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('dropdown-active');

      let dropDownIndicator = this.querySelector('.dropdown-indicator');
      dropDownIndicator.classList.toggle('bi-chevron-up');
      dropDownIndicator.classList.toggle('bi-chevron-down');
    }
  })
});



// Obtém o elemento do cabeçalho
var header = document.getElementById("header");
var logoScrolled = document.getElementById("logo-scrolled");
var logoPrincipal = document.getElementById("logo-principal");
var navegador = document.getElementById("navbar");
var links = document.querySelectorAll("#navbar link");

// Função para verificar se a página foi rolada
function checkScroll() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 0) {
    // Adiciona a classe 'scrolled' ao cabeçalho quando a página é rolada
    header.classList.add("header-scrolled");
    logoPrincipal.classList.add("logo-scrolled");
    logoScrolled.classList.remove("logo-scrolled");
    header.style.padding = "0px";
    

  } else {
    // Remove a classe 'scrolled' quando a página está no topo
    header.classList.remove("header-scrolled");
    logoPrincipal.classList.remove("logo-scrolled");
    logoScrolled.classList.add("logo-scrolled");

  }
}

// Verifica o scroll quando a página é rolada
window.addEventListener("scroll", checkScroll);

var toggleButton = document.getElementById("toggleButton");
var contentBox = document.getElementById("contentBox");

// Função para ocultar/desocultar a div
function toggleContent() {
  if (contentBox.classList.contains("hidden")) {
    // Se a div estiver oculta, mostra ela
    contentBox.classList.remove("hidden");
  } else {
    // Se a div estiver visível, oculta ela
    contentBox.classList.add("hidden");
  }
}

// Adiciona o evento de clique ao botão
toggleButton.addEventListener("click", toggleContent);