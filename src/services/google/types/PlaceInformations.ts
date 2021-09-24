/* eslint-disable camelcase */
interface AddressComponents {
  long_name: string;
  short_name: string;
  types: Array<string>;
}

interface PlaceInformations {
  address_components: AddressComponents;
  formatted_address: string;
  geometry: {
    bounds: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
    location: {
      lat: number;
      lng: number;
    };
    location_type: 'APPROXIMATE';
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  place_id: string;
  types: Array<string>;
}

export default PlaceInformations;
