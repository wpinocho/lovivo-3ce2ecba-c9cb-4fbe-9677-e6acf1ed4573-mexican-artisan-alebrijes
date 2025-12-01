import { HeadlessIndex } from '@/components/headless/HeadlessIndex';
import { IndexUI } from '@/pages/ui/IndexUI';

/**
 * ROUTE COMPONENT - Index
 * 
 * Este componente solo conecta HeadlessIndex con IndexUI.
 * Toda la lógica está en HeadlessIndex y la presentación en IndexUI.
 * 
 * Updated: Enhanced component documentation for better maintainability
 */

const Index = () => {
  return (
    <HeadlessIndex>
      {(logic) => <IndexUI logic={logic} />}
    </HeadlessIndex>
  );
};

export default Index;
