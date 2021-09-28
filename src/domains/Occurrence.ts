import OccurrenceLocation from './OccurrenceLocation';

interface Occurrence {
  id: string;
  dateTime: Date;
  location: OccurrenceLocation;
  description: string;
}

export default Occurrence;
