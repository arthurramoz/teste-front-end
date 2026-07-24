export const theme = {
  colors: {
    // Brand / Cores Principais (Genéricas e Customizáveis)
    primary: '#FA6A10',
    primaryLight: '#FB8840',
    primaryDark: '#D85400',
    secondary: '#4D5DBD',

    // Feedback & Status
    success: '#2DAC3E',
    warning: '#F59E0B',
    error: '#DE3737',
    info: '#3B82F6',

    // Layout & Superfícies
    background: '#FFFFFF',
    surface: '#FFFFFF',
    border: '#CECECE',
    input: '#6D6D6D',
    placeholder: '#9D9D9E',

    // Tipografia Semântica
    textPrimary: '#0B0B0C',
    textSecondary: '#6D6D6D',
    textMuted: '#A2A2A2',
    label: '#3C3C3D',
    title: '#3C3C3D',

    // Cores Puramente Neutras
    white: '#FFFFFF',
    black: '#000000',

    // Aliases para compatibilidade retroativa com código existente
    orange: '#FA6A10',
    orange2: '#FB8840',
    orange3: '#FCA670',
    orange4: '#FEE1CF',
    blue: '#4D5DBD',
    text1: '#6D6D6D',
    text2: '#A2A2A2',
    paginationtext: '#9D9D9E',
    modal1: '#747373',
    modal2: '#A2A2A2',
    textblack: '#0B0B0C',
    inputSearch: '#747373',
    placeholderSearch: '#A2A2A2',
  },
} as const;

export type Theme = typeof theme;
