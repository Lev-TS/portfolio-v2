export const Fonts = {
  monospace: {
    landingPageCardButtons: 'Courier Prime',
    landingPageComment: 'Courier Prime',
    body: 'Courier Prime',
    headings: 'Courier Prime',
    skillsObject: 'Courier Prime',

    heroGreeting: 'Recursive',
    rabbitScroll: 'Courier Prime',
    heroIntro: 'Courier Prime',
    landingPageSectionHeading: 'Courier Prime',
    contactTerminal: 'Courier Prime',
  },
  serif: {
    landingPageCardButtons: 'Open Sans',
    landingPageComment: 'Open Sans',
    body: 'Open Sans',
    headings: 'Open Sans',
    skillsObject: 'Open Sans',

    heroGreeting: 'Libre Baskerville',
    heroIntro: 'Libre Baskerville',
    rabbitScroll: 'Courier Prime',
    contactTerminal: 'Courier Prime',
    landingPageSectionHeading: 'Recursive',
  },
  sans: {
    landingPageCardButtons: 'Lato',
    landingPageComment: 'Lato',
    body: 'Lato',
    headings: 'Lato',
    skillsObject: 'Lato',

    heroGreeting: 'Recursive',
    rabbitScroll: 'Courier Prime',
    heroIntro: 'Courier Prime',
    landingPageSectionHeading: 'Courier Prime',
    contactTerminal: 'Courier Prime',
  },

  mixed: {
    landingPageComment: 'Open Sans',
    body: 'Open Sans',
    skillsObject: 'Open Sans',
    headings: 'Open Sans',

    heroGreeting: 'Vampiro One',
    landingPageCardButtons: 'Libre Baskerville',
    heroIntro: 'Courier Prime',
    rabbitScroll: 'Courier Prime',
    contactTerminal: 'Courier Prime',
    landingPageSectionHeading: 'Recursive',
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
