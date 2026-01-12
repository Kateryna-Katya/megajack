import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

let swiper = null;

function initSwiper() {
  if (window.innerWidth >= 1440 && !swiper) {
    swiper = new Swiper('.mySwiper', {
      modules: [Navigation],
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: '.slider-btn.next',
        prevEl: '.slider-btn.prev',
      },
    });
  }

  if (window.innerWidth < 1440 && swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

initSwiper();
window.addEventListener('resize', initSwiper);
