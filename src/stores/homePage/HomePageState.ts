import Occurrence from '../../domains/Occurrence';

interface HomePageState {
  isLoading: boolean;
  userOccurrences: Array<Occurrence>;
  mode: 'OCCURRENCES' | 'RISK_ZONE';
  occurrences: Array<Occurrence>;
  selectedOccurrenceId: string;
}

export default HomePageState;
