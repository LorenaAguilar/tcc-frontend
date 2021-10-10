import OccurrenceLocation from './OccurrenceLocation';

interface Occurrence {
  id: string;
  dateTime: Date;
  location: OccurrenceLocation;
  description: string;
  type: string;
  origin: string;
}

export default Occurrence;
