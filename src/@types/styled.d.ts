import { defaultTheme } from '../styles/themes/deafault';
import 'styled-components';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}