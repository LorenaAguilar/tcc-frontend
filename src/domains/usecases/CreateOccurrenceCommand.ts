interface CreateOccurrenceCommand {
  authorName: string;
  dateTime: Date;
  description: string;
  placeId: string;
  type: string;
}

export default CreateOccurrenceCommand;
