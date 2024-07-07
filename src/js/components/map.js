export const useMap = () => {
  ymaps.ready(init);
  function init() {
    let myMap = new ymaps.Map("myMap", {
      center:[16.31008820934906,89.36857166761631], 
      zoom: 3
    });
  }
}