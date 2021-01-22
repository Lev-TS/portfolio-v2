export const defaultTheme = {
  colors: {
    background: '#F1FAEE',
    red: '#E63946',
    black: '#1C1B20',
    foreground: '#919186',
    darkBlue: '#1D3557',
    mediumBlue: '#457B9D',
    darkGrey: '#333',
    grey: '#4C4A57',
    lightGrey: '#808080',
  },
  fonts: {
    heroIntro: 'Courier Prime',
    rabbitScroll: 'Courier Prime',
    landingPageSectionHeading: 'Courier Prime',
    landingPageCardButtons: 'Courier Prime',
    contactTerminal: 'Courier Prime',
    heroGreeting: 'Recursive',
    landingPageComment: 'Recursive',
    body: 'Lato',
    skillsObject: 'Lato',
  },
};

export const Fonts = {
  monospace: {
    heroIntro: 'Courier Prime',
    rabbitScroll: 'Courier Prime',
    landingPageSectionHeading: 'Courier Prime',
    landingPageCardButtons: 'Courier Prime',
    contactTerminal: 'Courier Prime',
    heroGreeting: 'Recursive',
    landingPageComment: 'Recursive',
    body: 'Courier Prime',
    headings: 'Courier Prime',
    skillsObject: 'Courier Prime',
  },
  serif: {
    heroIntro: 'Fugaz One',
    rabbitScroll: 'Fugaz One',
    landingPageSectionHeading: 'Courier Prime',
    landingPageCardButtons: 'Fugaz One',
    contactTerminal: 'Courier Prime',
    heroGreeting: 'Fugaz One',
    landingPageComment: 'Fugaz One',
    body: 'Fugaz One',
    headings: 'Fugaz One',
    skillsObject: 'Fugaz One',
  },
  sans: {
    heroIntro: 'Lato',
    rabbitScroll: 'Lato',
    landingPageSectionHeading: 'Courier Prime',
    landingPageCardButtons: 'Lato',
    contactTerminal: 'Courier Prime',
    heroGreeting: 'Lato',
    landingPageComment: 'Lato',
    body: 'Lato',
    headings: 'Lato',
    skillsObject: 'Lato',
  },

  getTypeface(name) {
    return this[name.toLowerCase()];
  },
};

export const Colors = {
  normalMode: {
    background: '#F1FAEE',
    red: '#E63946',
    black: '#1C1B20',
    foreground: '#919186',
    darkBlue: '#1D3557',
    mediumBlue: '#457B9D',
    darkGrey: '#333',
    grey: '#4C4A57',
    lightGrey: '#808080',
  },
  darkMode: {
    background: '#ccc9dc',
    red: '#324a5f',
    black: '#0c1821',
    foreground: '#5E5B70',
    darkBlue: '#153959',
    mediumBlue: '#556885',
    darkGrey: '#333',
    grey: '#4C4A57',
    lightGrey: '#808080',
  },
};
