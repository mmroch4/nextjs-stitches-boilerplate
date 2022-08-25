import { blue, slate } from '@radix-ui/colors';
import { createTheme } from '..';

export const lightTheme = createTheme({
  colors: {
    ...blue,
    ...slate,
  },
});
