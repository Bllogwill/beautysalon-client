/*abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*quando clicar em um item do menu, esconder menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*mudar o header da pagina quando dar scroll*/
function changeHeaderWhenScroll() {
  const header = document.querySelector('header')
  const navHeight = header.offsetHeight
  if (window.scrollY >= navHeight) {
    /* scroll é maoir que altura do header*/
    header.classList.add('scroll')
  } else {
    /*menos que altura do header*/
    header.classList.remove('scroll')
  }
}

/*Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/*ScrollReveal: Mostrar elementos quando der scrow na pagina*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
 #about .image, #about .text,
 #services header, #services .card,
 #testimonials header, #testimonials .testimonials
 #contact .text, #contact .links
 footer .brand, footer .social
 `,
  { interval: 100 }
)

/* Botão voltar para o topo*/

function backToTop() {
  const backToToButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToToButton.classList.add('show')
  } else {
    backToToButton.classList.remove('show')
  }
}

/*When Scroll*/
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
