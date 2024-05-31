import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination, Scrollbar} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    
    scrollbar: {
      el: '.insight__scrollbar',
      draggable: true ,
    },
    breakpoints: {
      576: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2,
      },
    },
    modules: [Navigation, Scrollbar],
  });
};

export const usePartnersSlider = () => {
  new Swiper('.partners__slider', {
    slidesPerView: 'auto',
    spaceBetween: 18,
    centeredSlides: true,
    loop: true,
    modules: [Navigation, Pagination, Autoplay],
    autoplay: {
      delay: 2000,
    },

    pagination: {
      el: '.partners__pagibation',
    },
  });
}
