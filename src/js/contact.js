import '../assets/scss/contact.scss';

import { useTheme } from './components/theme.js';
import { headerScroll } from './components/header.js';
import { useBurger } from './components/burger.js';
import { useMap } from './components/map.js';
import { usePartnersSlider, useInsightSlider, useTestimonialsSlider } from './components/slider.js';

useTheme();
headerScroll();
useBurger();
useMap();
usePartnersSlider();
useInsightSlider();
useTestimonialsSlider();
