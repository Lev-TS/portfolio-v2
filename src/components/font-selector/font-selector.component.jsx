import React from 'react';
import { Dropdown } from 'semantic-ui-react';

import { Label } from './font-selector.styles';

import { useFontThemeContext } from '../../providers/font-theme.provider';

const fontOptions = [
  {
    key: 'monospace',
    text: 'Monospace',
    value: 'monospace',
  },
  {
    key: 'sans',
    text: 'Sans Serif',
    value: 'sans',
  },
  {
    key: 'serif',
    text: 'Serif',
    value: 'serif',
  },
];

const setPlaceholder = (value) => {
  if (value.toLowerCase() === 'monospace') return 'Monospace';
  if (value.toLowerCase() === 'serif') return 'Serif';
  return 'Sans Serif';
};

export default function FontSelector() {
  const { state, dispatch, selectFont } = useFontThemeContext();
  const handleChange = (event, { value }) => dispatch(selectFont(value));

  return (
    <>
      <Label>Fonts:</Label>
      <Dropdown
        placeholder={setPlaceholder(state.fontName)}
        fluid
        selection
        options={fontOptions}
        onChange={handleChange}
      />
    </>
  );
}
