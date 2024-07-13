import '/scss/main.scss';

import { useTheme } from './components/theme.js';
import { headerScroll } from './components/header.js';
import { useBurger } from './components/burger.js';
import { usePartnersSlider, useInsightSlider, useTestimonialsSlider } from './components/home/slider.js';

useTheme();
headerScroll();
useBurger();
usePartnersSlider();
useInsightSlider();
useTestimonialsSlider();
