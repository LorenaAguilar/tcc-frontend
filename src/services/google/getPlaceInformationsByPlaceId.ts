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
  if (placeInformations?.[0]) {
    return {
      address: placeInformations?.[0].formatted_address,
      lat: placeInformations?.[0].geometry.location.lat,
      lng: placeInformations?.[0].geometry.location.lng,
    };
  }
  return null;
};
