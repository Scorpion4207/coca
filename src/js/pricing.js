import '../assets/scss/pricing.scss';

import { useTheme } from './components/theme.js';
import { headerScroll } from './components/header.js';
import { useBurger } from './components/burger.js';
import { useSwitherPricing } from './components/switcherPricing.js';

useTheme();
headerScroll();
useBurger();
useSwitherPricing();