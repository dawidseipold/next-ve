import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../sprinkles.css';

export const test = style([sprinkles({ background: 'blue-100' })]);
