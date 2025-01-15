export default function app() {
    const sliderPrev = document.querySelector(".prev");
    const sliderNext = document.querySelector(".next");
    const imageSlides = document.querySelectorAll(".slide-image[data-slide]");
    const textSlides = document.querySelectorAll(".hero-content-text[data-slide]");

    let contador = 0;
    const totalSlides = imageSlides.length;

    function handleSlide() {
      imageSlides.forEach((slide) => {
        slide.classList.add("hidden");
      });

      textSlides.forEach((slide) => {
        slide.classList.add("hidden");
      });

      if(totalSlides > 0){
        imageSlides[contador].classList.remove("hidden");
        textSlides[contador].classList.remove("hidden");
      }
    }

    handleSlide()

    function prevSlide() {
       if ( contador === 0 ) {
        contador = totalSlides - 1}
       else {
        contador = contador - 1
        }

       handleSlide()
    }

    function nextSlide() {
      if ( contador === totalSlides - 1 ) {
        contador = 0}
      else {
        contador = contador + 1
        }
      handleSlide()
    }
    sliderPrev.addEventListener("click", prevSlide);
    sliderNext.addEventListener("click", nextSlide);
    if(sliderPrev && sliderNext){
      sliderPrev.addEventListener("click", prevSlide);
      sliderNext.addEventListener("click", nextSlide);
    } else {
      console.log("Erro ao adicionar evento");
    }

    const headerNavToggle = document.querySelector(".header-nav-toggle");
    const headerNavMobile = document.querySelector(".header-nav-mobile");
    const headerNavClose = document.querySelector(".header-nav-close");

    function toggleNavMobile() {
      headerNavMobile.classList.remove("hidden");
    }

    function toggleNavMobileClose() {
      headerNavMobile.classList.add("hidden");
    }
    if (headerNavToggle) {
      headerNavToggle.addEventListener("click", toggleNavMobile);
    } else {
      console.error("Error: header-nav-toggle element not found.");
    }

    if (headerNavClose) {
      headerNavClose.addEventListener("click", toggleNavMobileClose);
    } else {
      console.error("Error: header-nav-close element not found.");
    }
}

