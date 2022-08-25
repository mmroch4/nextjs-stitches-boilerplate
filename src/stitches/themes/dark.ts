import { blueDark, slateDark } from '@radix-ui/colors';
import { createTheme } from '..';

export const darkTheme = createTheme({
  colors: {
    ...blueDark,
    ...slateDark,
  },
});
