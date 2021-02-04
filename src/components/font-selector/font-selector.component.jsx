import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { useStaticQuery, graphql } from 'gatsby';

import { Label } from './font-selector.styles';

import { useFontThemeContext } from '../../providers/font-theme.provider';

const fontOptions = [
  {
    key: 'monospace',
    text: 'Monospace',
    value: 'monospace',
  },
  {
    key: 'mixed',
    text: 'Mixed',
    value: 'mixed',
  },
];

const setPlaceholder = (value) => {
  if (value.toLowerCase() === 'monospace') return 'Monospace';
  return 'Mixed';
};

export default function FontSelector() {
  const { strapiTheme } = useStaticQuery(query);

  const { state, dispatch, selectFont } = useFontThemeContext();
  const handleChange = (event, { value }) => dispatch(selectFont(value));

  return (
    <>
      <Label>Fonts:</Label>
      <Dropdown
        placeholder={setPlaceholder(state.fontName || strapiTheme.defaultFonts)}
        fluid
        selection
        options={fontOptions}
        onChange={handleChange}
      />
    </>
  );
}

const query = graphql`
  query fontTheme {
    strapiTheme {
      defaultFonts
    }
  }
`;
