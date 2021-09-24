import restClient from '../../clients/RestClient';
import { GOOGLE_API_KEY } from '../../constants';
import OccurrenceLocation from '../../domains/OccurrenceLocation';
import PlaceInformations from './types/PlaceInformations';

interface GoogleResponse {
  results: Array<PlaceInformations>;
}
const endpoint = (placeId) => `geocode/json?place_id=${placeId}&key=${GOOGLE_API_KEY}`;

export default function getPlaceInformationsByPlaceId(
  placeId: string
): Promise<OccurrenceLocation | null> {
  return restClient('https://maps.googleapis.com/maps/api/')
    .post<GoogleResponse>(endpoint(placeId))
    .then((response) => {
      console.log(response);
      return placeInformationsToLocation(response.data.results);
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
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
