// Libs
import { globalStyle } from '@vanilla-extract/css';
import { colors } from '../constants';
import { sprinkles } from '../sprinkles.css';

// Styles
import './reset.css';

globalStyle('html.light body', {
  backgroundColor: colors.light.background.primary,
});

globalStyle('html.dark body', {
  backgroundColor: colors.dark.background.primary,
});
