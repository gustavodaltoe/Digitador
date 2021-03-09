import { findByText, render } from '@testing-library/react';

import Keyboard from '.';

describe('<Keyboard />', () => {
  it('should highlight the target key', async () => {
    const { container } = render(<Keyboard targetKey="A" />);

    expect(await findByText(container, 'A', { exact: true })).toHaveStyleRule(
      'box-shadow',
      expect.any(String),
    );
  });
});
