import {
  findByTestId,
  findByText,
  fireEvent,
  render,
  waitFor,
  act,
} from '@testing-library/react';

import MainInput from '.';

const phrase = 'Phrase to display';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  act(() => {
    jest.runOnlyPendingTimers();
  });
  jest.useRealTimers();
});

describe('<MainInput />', () => {
  it('should display the phrase', async () => {
    const { container } = render(<MainInput phrase={phrase} />);

    expect(await findByText(container, phrase)).toBeInTheDocument();
  });

  it('should automatically focus at the input', async () => {
    const { container } = render(<MainInput phrase={phrase} />);

    const input = container.querySelector('input');

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(input).toHaveFocus();
  });

  it('should be stopped until input change to start playing', async () => {
    const { container } = render(<MainInput phrase={phrase} />);

    let isPlaying = container.querySelector('.playing');
    expect(isPlaying).not.toBeInTheDocument();

    const errorCountEl = await findByText(container, /Erros/g);
    const cpmCountEl = await findByText(container, /CPM/g);

    const errorCount = Number(errorCountEl.textContent.split(' ')[0]);
    const cpmCount = Number(cpmCountEl.textContent.split(' ')[0]);

    expect(errorCount).toBe(0);
    expect(cpmCount).toBe(0);

    const input = container.querySelector('input');

    fireEvent.change(input, { target: { value: 'A' } });

    isPlaying = container.querySelector('.playing');
    expect(isPlaying).toBeInTheDocument();
  });

  it('should count errors', async () => {
    const { container } = render(<MainInput phrase={phrase} />);

    let errorCountEl = await findByText(container, /Erros/g);

    let errorCount = Number(errorCountEl.textContent.split(' ')[0]);

    expect(errorCount).toBe(0);

    const input = container.querySelector('input');

    fireEvent.change(input, { target: { value: '0' } });
    fireEvent.change(input, { target: { value: '0' } });
    fireEvent.change(input, { target: { value: '0' } });

    await waitFor(async () => {
      errorCountEl = await findByText(container, /Erros/g);
      errorCount = Number(errorCountEl.textContent.split(' ')[0]);
      expect(errorCount).toBe(3);
    });
  });

  it('should calculate characters per minute', async () => {
    const { container } = render(<MainInput phrase={phrase} />);

    let cpmCountEl = await findByText(container, /CPM/g);

    let cpmCount = Number(cpmCountEl.textContent.split(' ')[0]);

    expect(cpmCount).toBe(0);

    const input = container.querySelector('input');
    // i will not write the hole string
    // because it would make the game stop and not count the CPM
    phrase
      .slice(0, -1)
      .split('')
      .forEach((letter) => {
        fireEvent.change(input, { target: { value: letter } });
      });

    act(() => {
      jest.runOnlyPendingTimers();
    });

    cpmCountEl = await findByText(container, /CPM/g);
    cpmCount = Number(cpmCountEl.textContent.split(' ')[0]);

    // runOnlyPendingTimers will make it run the 1 second timeout
    const seconds = 1;

    expect(cpmCount).toBe(Math.round(((phrase.length - 1) * 60) / seconds));
  });

  it('should restart on restart button click', async () => {
    const { container } = render(<MainInput phrase={phrase} />);

    // start playing
    const input = container.querySelector('input');
    fireEvent.change(input, { target: { value: 'A' } });

    let isPlaying = container.querySelector('.playing');
    expect(isPlaying).toBeInTheDocument();

    // stop playing
    const restartBtn = await findByText(container, /Restart/g);
    fireEvent.click(restartBtn);

    isPlaying = container.querySelector('.playing');
    expect(isPlaying).not.toBeInTheDocument();

    // restart stats
    const errorCountEl = await findByText(container, /Erros/g);
    const cpmCountEl = await findByText(container, /CPM/g);

    expect(Number(errorCountEl.textContent.split(' ')[0])).toBe(0);
    expect(Number(cpmCountEl.textContent.split(' ')[0])).toBe(0);
  });

  it('should separate written string from the string to write', async () => {
    const { container } = render(<MainInput phrase={phrase} />);

    const leftString = phrase.slice(0, 6);
    const rightString = phrase.slice(6);

    const input = container.querySelector('input');
    leftString.split('').forEach((letter) => {
      fireEvent.change(input, { target: { value: letter } });
    });

    const leftStringEl = await findByTestId(container, 'left-string');
    const rightStringEl = await findByTestId(container, 'right-string');

    expect(leftStringEl.textContent).toBe(leftString);
    expect(rightStringEl.textContent).toBe(rightString);
  });

  it('should stop when complete the challenge', async () => {
    const { container } = render(<MainInput phrase={phrase} />);

    const input = container.querySelector('input');

    // write the first letter
    fireEvent.change(input, { target: { value: phrase[0] } });
    // get 1 error key
    fireEvent.change(input, { target: { value: '9' } });

    // run timers once to calculate erros/CPM
    act(() => {
      jest.runOnlyPendingTimers();
    });

    // write the rest of the phrase
    phrase
      .slice(1)
      .split('')
      .forEach((letter) => {
        fireEvent.change(input, { target: { value: letter } });
      });

    // finish the challenge
    act(() => {
      jest.runOnlyPendingTimers();
    });

    // try to get 1 more error
    fireEvent.change(input, { target: { value: '9' } });

    act(() => {
      jest.runOnlyPendingTimers();
    });

    const errorCountEl = await findByText(container, /Erros/g);
    const cpmCountEl = await findByText(container, /CPM/g);

    const errors = Number(errorCountEl.textContent.split(' ')[0]);
    const cpm = Number(cpmCountEl.textContent.split(' ')[0]);

    expect(errors).toBe(1);
    expect(cpm).toBe(1);
  });
});
