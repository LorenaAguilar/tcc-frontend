import OriginEnum from '../OriginEnum';

interface CreateOccurrenceCommand {
  authorName: string;
  dateTime: Date;
  description: string;
  placeId: string;
  type: string;
  origin: OriginEnum;
}

export default CreateOccurrenceCommand;
