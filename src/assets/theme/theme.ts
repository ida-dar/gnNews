import * as interfaces from '../../interfaces/theme.interface';

export const colors: interfaces.Colors = {
  white: 'hsl(0, 0%, 100%)',
  black: 'hsl(0, 0%, 0%)',
  grey100: 'hsl(0, 0%, 35%)',
  grey200: 'hsl(0, 0%, 74%)',
  grey300: 'hsl(0, 0%, 87%)',
  grey400: 'hsl(0, 0%, 91%)',
  grey500: 'hsl(0, 0%, 97%)',
  primary: '#d2b976',
  secondary: '#65dac7',
  bgColor: '#eeeeee',
  bgDarkColor: '#e6e6e6',
  bgDark: '#323232',
  warning: '#b10905',
  success: '#228B22',
};

export const font: interfaces.Font = {
  size: {
    header: '4rem',
    highlight: '3rem',
    subheader: '2rem',
    paragraph: '1.7rem',
    button: '1.5rem',
  },
  fontMain: "'Raleway', sans-serif",
  fontHeader: 'Jost',
  fontParagraph: 'Catamaran',
};

export const theme = {
  colors,
  font,
  zIndex: {
    level1: '1000',
    level2: '2000',
    level3: '3000',
    level4: '4000',
    level5: '5000',
    level6: '6000',
    level7: '7000',
    level8: '8000',
    level9: '9000',
    level10: '10000',
  },
};
