import Occurrence from '../../domains/Occurrence';

interface HomePageState {
  isLoading: boolean;
  occurrences: Array<Occurrence>;
  selectedOccurrenceId: string;
}

export default HomePageState;
