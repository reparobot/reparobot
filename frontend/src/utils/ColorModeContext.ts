import { createContext } from 'react';

const ColorModeContext = createContext({
  toggleColorMode: () => {
    // No operation
  },
});

export default ColorModeContext;
