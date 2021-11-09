import restClient from '../../clients/RestClient';
import { GOOGLE_API_KEY } from '../../constants';
import OccurrenceLocation from '../../domains/OccurrenceLocation';
import PlaceInformations from './types/PlaceInformations';

interface GoogleResponse {
  results: Array<PlaceInformations>;
}
const endpoint = (placeId) =>
  `geocode/json?address=${placeId.replace(' ', '%20')}&key=${GOOGLE_API_KEY}`;

export default function getPlaceInformationsByPlaceId(
  placeId: string
): Promise<OccurrenceLocation | null> {
  return restClient('https://maps.googleapis.com/maps/api/')
    .post<GoogleResponse>(endpoint(placeId))
    .then((response) => placeInformationsToLocation(response.data.results))
    .catch((error) => error);
}

const placeInformationsToLocation = (
  placeInformations: Array<PlaceInformations>
): OccurrenceLocation | null => {
  const isFromBH =
    placeInformations[0].address_components.find(
      (addressComponent) => addressComponent.types[0] === 'administrative_area_level_2'
    )?.long_name === 'Belo Horizonte';

  if (placeInformations?.[0]) {
    if (isFromBH) {
      return {
        address: placeInformations?.[0].formatted_address,
        lat: placeInformations?.[0].geometry.location.lat,
        lng: placeInformations?.[0].geometry.location.lng,
      };
    }

    throw new Error('NOT_IN_BH');
  }
  return null;
};
