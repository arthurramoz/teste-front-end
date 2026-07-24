export const theme = {
  colors: {
    primary: '#F7CA11',
    secondary: '#3442B5',
    terciary: '#271C47',

    success: '#2DAC3E',
    warning: '#F59E0B',
    error: '#DE3737',
    info: '#3B82F6',

    background: '#FFFFFF',
    surface: '#FFFFFF',
    border: '#F0F0F0',
    inputBg: '#F6F5F2',
    input: '#6D6D6D',
    placeholder: '#9F9F9F',

    textPrimary: '#271C47',
    textSecondary: '#3442B5',
    textMuted: '#9F9F9F',
    label: '#3C3C3D',
    title: '#271C47',

    white: '#FFFFFF',
    black: '#000000',
    grayBg: '#F6F5F2',
    grayText: '#9F9F9F',
    grayBorder: '#F0F0F0',
  },
} as const;

export type Theme = typeof theme;
