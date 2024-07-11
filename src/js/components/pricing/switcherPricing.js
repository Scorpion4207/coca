export const useSwitherPricing = () => {
  const swither = document.querySelector('[data-price="switcher"]');
  const priceStarter = document.querySelector('[data-price="starter"]');
  const pricePopular = document.querySelector('[data-price="popular"]');
  const priceEnterprise = document.querySelector('[data-price="enterprise"]');

  const pricePlans = {
    starter: {
      default: 120,
      witchSale: 100,
    },
    popular: {
      default: 1680,
      witchSale: 1400,
    },
    enterprise: {
      default: 2520,
      witchSale: 2100,
    },
  };

  

  const setPriceWitchSale = () => {
    priceStarter.textContent = pricePlans.starter.witchSale
    pricePopular.textContent = pricePlans.popular.witchSale
    priceEnterprise.textContent = pricePlans.enterprise.witchSale
  }
  const setPriceDefault = () => {
    priceStarter.textContent = pricePlans.starter.default
    pricePopular.textContent = pricePlans.popular.default
    priceEnterprise.textContent = pricePlans.enterprise.default
  }

  swither.checked = true
 
  swither.addEventListener('click', () => {
    if (swither.checked) {
      setPriceWitchSale();
    } else {
      setPriceDefault();
    }
  });
};
