import {
  createOccurrenceDone,
  createOccurrenceFailed,
  startCreateOccurrence,
} from './CreateOccurrenceEvents';
import CreateOccurrenceStore from './CreateOccurrenceStore';

describe('CreateOccurrenceStore', () => {
  describe('createOccurrenceDone', () => {
    it('should createOccurrenceDone', () => {
      const initialState = {};
      CreateOccurrenceStore.setState(initialState);

      createOccurrenceDone();

      expect(CreateOccurrenceStore.getState()).toEqual({ isLoading: false });
    });
  });

  describe('createOccurrenceFailed', () => {
    it('should createOccurrenceFailed', () => {
      const initialState = {};
      CreateOccurrenceStore.setState(initialState);

      createOccurrenceFailed();

      expect(CreateOccurrenceStore.getState()).toEqual({ isLoading: false });
    });
  });

  describe('startCreateOccurrence', () => {
    it('should startCreateOccurrence', () => {
      const initialState = {};
      CreateOccurrenceStore.setState(initialState);

      startCreateOccurrence();

      expect(CreateOccurrenceStore.getState()).toEqual({ isLoading: true });
    });
  });
});
