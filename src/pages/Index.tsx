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
  const testError: number = "this is a string not a number"; // ERROR: Type 'string' is not assignable to type 'number'
  
  return (
    <HeadlessIndex>
      {(logic) => <IndexUI logic={logic} broken={undefined.nonExistentMethod()} />}
    </HeadlessIndex>
  );
};

export default Index;