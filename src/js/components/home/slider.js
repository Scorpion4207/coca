import Swiper from 'swiper';
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  EffectFade,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

export const usePartnersSlider = () => {
  new Swiper('.partners__slider', {
    slidesPerView: 'auto',
    spaceBetween: 18,
    centeredSlides: true,
    loop: true,
    modules: [Pagination, Autoplay],
    autoplay: {
      delay: 2000,
    },

    pagination: {
      el: '.partners__pagibation',
    },
  });
};

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,

    scrollbar: {
      el: '.insight__scrollbar',
      draggable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2,
      },
    },
    modules: [ Scrollbar],
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [EffectFade, Navigation ],
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    
    navigation: {
      prevEl: '.testimonials__btn--prev',
      nextEl: '.testimonials__btn--next',
    },

    effect: 'fade',
    fadeEffect: {
      crossFade: true,
      crossFadeThreshold: 0.2,
    },

  });
};
