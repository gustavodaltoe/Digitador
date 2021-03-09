import { findByText, render, screen } from '@testing-library/react';

import MainInput from '.';

describe('<MainInput />', () => {
  it('should display the phrase', async () => {
    const phrase = 'Phrase to display';
    const { container } = render(<MainInput phrase={phrase} />);

    expect(await findByText(container, phrase)).toBeInTheDocument();
  });
});
