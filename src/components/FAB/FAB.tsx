import { FAB as FABComponent } from './FABComponent';
import FABGroup from './FABGroup';

const FAB = Object.assign(FABComponent, {
  // @component ./FABGroup.tsx
  Group: FABGroup,
});

export default FAB;
