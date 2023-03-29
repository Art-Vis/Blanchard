ymaps.ready(init);

function init() {
  const myMap = new ymaps.Map('map', {
    center: [55.75846806898367, 37.60108849999989],

    zoom: 15,

    controls: [],
  });
  const myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/location.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-2, -20]
  });

  myMap.geoObjects.add(myPlacemark);
}
