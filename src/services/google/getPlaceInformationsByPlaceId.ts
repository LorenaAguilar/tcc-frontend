import restClient from '../../clients/RestClient';
import { GOOGLE_API_KEY } from '../../constants';
import OccurrenceLocation from '../../domains/OccurrenceLocation';
import PlaceInformations from './types/PlaceInformations';

interface GoogleResponse {
  results: Array<PlaceInformations>;
}

interface OccurrenceLocationWithIsFromBR extends OccurrenceLocation {
  isFromBH: boolean;
}

const endpoint = (placeId) =>
  `geocode/json?address=${placeId.replace(' ', '%20')}&key=${GOOGLE_API_KEY}`;

export default function getPlaceInformationsByPlaceId(
  placeId: string
): Promise<OccurrenceLocationWithIsFromBR | null> {
  return restClient('https://maps.googleapis.com/maps/api/')
    .post<GoogleResponse>(endpoint(placeId))
    .then((response) => placeInformationsToLocation(response.data.results));
}

const placeInformationsToLocation = (
  placeInformations: Array<PlaceInformations>
): OccurrenceLocationWithIsFromBR | null => {
  if (placeInformations?.[0]) {
    const isFromBH =
      placeInformations[0].address_components.find(
        (addressComponent) => addressComponent.types[0] === 'administrative_area_level_2'
      )?.long_name === 'Belo Horizonte';

    return {
      address: placeInformations?.[0].formatted_address,
      lat: placeInformations?.[0].geometry.location.lat,
      lng: placeInformations?.[0].geometry.location.lng,
      isFromBH,
    };
  }
  return null;
};
