export const Fonts = {
  monospace: {
    landingPageCardButtons: 'Courier Prime, Libre Baskerville',
    landingPageComment: 'Courier Prime',
    body: 'Courier Prime, Open Sans',
    headings: 'Courier Prime, Open Sans',
    skillsObject: 'Courier Prime, Open Sans',

    heroGreeting: 'Courier Prime, Recursive',
    rabbitScroll: 'Courier Prime, serif',
    heroIntro: 'Courier Prime, serif',
    landingPageSectionHeading: 'Courier Prime, Recursive',
    contactTerminal: 'Courier Prime, serif',
  },

  mixed: {
    landingPageComment: 'Open Sans, Courier Prime, serif',
    body: 'Open Sans, Courier Prime, serif',
    skillsObject: 'Open Sans, Courier Prime, serif',
    headings: 'Open Sans, Courier Prime, serif',

    heroGreeting: 'Recursive, Courier Prime, serif',
    landingPageCardButtons: 'Libre Baskerville, Courier Prime, serif',
    heroIntro: 'Courier Prime, serif',
    rabbitScroll: 'Courier Prime, serif',
    contactTerminal: 'Courier Prime, serif',
    landingPageSectionHeading: 'Recursive, Courier Prime, serif',
  },

  getTypeface(name) {
    return this[name.toLowerCase()];
  },
};

// export const Colors = {
//   normalMode: {
//     background: '#F1FAEE',
//     red: '#E63946',
//     black: '#1C1B20',
//     foreground: '#919186',
//     darkBlue: '#1D3557',
//     mediumBlue: '#457B9D',
//     darkGrey: '#333',
//     grey: '#4C4A57',
//     lightGrey: '#808080',
//   },
//   darkMode: {
//     background: '#ccc9dc',
//     red: '#324a5f',
//     black: '#0c1821',
//     foreground: '#5E5B70',
//     darkBlue: '#153959',
//     mediumBlue: '#556885',
//     darkGrey: '#333',
//     grey: '#4C4A57',
//     lightGrey: '#808080',
//   },
// };
