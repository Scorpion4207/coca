import '/scss/contact.scss';

import { useTheme } from './components/theme.js';
import { headerScroll } from './components/header.js';
import { useBurger } from './components/burger.js';
import { useMap } from './components/contact/map.js';
import { usePartnersSlider, useInsightSlider, useTestimonialsSlider } from './components/contact/slider.js';
import { usePhone } from './components/contact/phone.js'

useTheme();
headerScroll();
useBurger();
useMap();
usePartnersSlider();
useInsightSlider();
useTestimonialsSlider();
usePhone();
