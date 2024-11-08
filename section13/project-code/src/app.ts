import axios from 'axios';

// For Open Layers library.
declare var ol: any;

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

type GeoCodeResponse = {
  results: { location: { lat: Number; lng: number } }[];
  status: number;
};

function searchAddressHandler(event: Event) {
  event.preventDefault();

  // Need to enter the whole address. Eg: 88 Colin P Kelly Jr. Street, San Francisco, California, 94107.
  const enteredAddress = addressInput.value;

  // Use Geocod library to get the coordinates.
  axios
    .get<GeoCodeResponse>(
      `https://api.geocod.io/v1.7/geocode?api_key=${
        process.env.GEO_API_KEY
      }&q=${encodeURI(enteredAddress)}`
    )
    .then((response) => {
      if (!response.data.results) {
        throw new Error('Could not fetch location!');
      }

      const coordinates = response.data.results[0].location;
      console.log('Coordinates', coordinates);

      document.getElementById('map')!.innerHTML = '';

      // Use Open Layers library to render the map.
      new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM(),
          }),
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
          zoom: 16,
        }),
      });
    })
    .catch((err) => {
      console.error(err);
      console.error(err.response.data.error);
    });
}

form.addEventListener('submit', searchAddressHandler);
