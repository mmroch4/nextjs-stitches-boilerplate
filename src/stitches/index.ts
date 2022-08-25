import { createStitches } from '@stitches/react';

export const {
  styled,
  getCssText,
  createTheme,
  globalCss,
  config,
  css,
  keyframes,
  prefix,
  reset,
  theme,
} = createStitches({
  media: {
    bp: '(max-width: 600px)',
  },
});
