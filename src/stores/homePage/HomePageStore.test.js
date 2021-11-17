import OriginEnum from '../../domains/OriginEnum';
import {
  loadOccurrenceFailed,
  loadOccurrencesDone,
  loadUserOccurrencesDone,
  onDeleteSuccess,
  onEditSuccess,
  setMode,
  setSelectedOccurrence,
  startLoadOccurrences,
} from './HomePageEvents';
import HomePageStore from './HomePageStore';

describe('HomePageStore', () => {
  describe('startLoadOccurrences', () => {
    it('should startLoadOccurrences', () => {
      const initialState = { isLoading: false };
      HomePageStore.setState(initialState);

      startLoadOccurrences();

      expect(HomePageStore.getState()).toEqual({ isLoading: true });
    });
  });

  describe('loadOccurrencesDone', () => {
    it('should loadOccurrencesDone', () => {
      const initialState = { occurrences: [] };
      HomePageStore.setState(initialState);
      const newOccurrence = { id: '1' };

      loadOccurrencesDone({ occurrences: [newOccurrence] });

      expect(HomePageStore.getState()).toEqual({ occurrences: [newOccurrence], isLoading: false });
    });
  });

  describe('loadOccurrenceFailed', () => {
    it('should loadOccurrenceFailed', () => {
      const initialState = { isLoading: true };
      HomePageStore.setState(initialState);

      loadOccurrenceFailed();

      expect(HomePageStore.getState()).toEqual({ isLoading: false });
    });
  });

  describe('setSelectedOccurrence', () => {
    it('should setSelectedOccurrence', () => {
      const initialState = {};
      HomePageStore.setState(initialState);

      setSelectedOccurrence({ occurrenceId: '1' });

      expect(HomePageStore.getState()).toEqual({ selectedOccurrenceId: '1' });
    });
  });

  describe('onDeleteSuccess', () => {
    it('should onDeleteSuccess', () => {
      const occurrence = { id: '1' };
      const initialState = { occurrences: [occurrence] };
      HomePageStore.setState(initialState);

      onDeleteSuccess({ occurrenceId: occurrence.id });

      expect(HomePageStore.getState()).toEqual({ occurrences: [] });
    });
  });

  describe('onEditSuccess', () => {
    it('should onEditSuccess', () => {
      const oldOccurrence = { id: '1' };
      const newOccurrence = {
        id: '1',
        dateTime: new Date(),
        lat: 1,
        lng: 2,
        address: 'address',
        description: 'description',
        type: 'type',
        origin: OriginEnum.COLETEI_UMA_SITUACAO_DO_NOTICIARIO,
      };
      const initialState = { occurrences: [oldOccurrence, { id: 'other' }] };
      HomePageStore.setState(initialState);

      onEditSuccess({ occurrenceId: oldOccurrence.id, occurrenceData: newOccurrence });

      expect(HomePageStore.getState()).toEqual({
        occurrences: [
          {
            id: '1',
            dateTime: newOccurrence.dateTime,
            location: {
              lat: 1,
              lng: 2,
              address: 'address',
            },
            description: 'description',
            type: 'type',
            origin: OriginEnum.COLETEI_UMA_SITUACAO_DO_NOTICIARIO,
          },
          { id: 'other' },
        ],
      });
    });
  });

  describe('loadUserOccurrencesDone', () => {
    it('should loadUserOccurrencesDone', () => {
      const initialState = { userOccurrences: '1' };
      HomePageStore.setState(initialState);
      const newOccurrence = { id: '1' };

      loadUserOccurrencesDone({ occurrences: [newOccurrence] });

      expect(HomePageStore.getState()).toEqual({ userOccurrences: [newOccurrence] });
    });
  });

  describe('setMode', () => {
    it('should setMode', () => {
      const initialState = {};
      HomePageStore.setState(initialState);

      setMode('OCCURRENCES');

      expect(HomePageStore.getState()).toEqual({ mode: 'OCCURRENCES' });
    });
  });
});
