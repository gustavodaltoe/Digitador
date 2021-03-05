interface keyProps {
  code: string;
  display?: string;
  className?: string;
  neverShowError?: boolean;
}

export const keyboardKeys: keyProps[][] = [
  [
    {
      code: 'Backquote',
      display: "'",
    },
    {
      code: 'Digit1',
      display: '1',
      className: 'pinky',
    },
    {
      code: 'Digit2',
      display: '2',
      className: 'pinky',
    },
    {
      code: 'Digit3',
      display: '3',
      className: 'ring-finger',
    },
    {
      code: 'Digit4',
      display: '4',
      className: 'middle-finger',
    },
    {
      code: 'Digit5',
      display: '5',
      className: 'index-finger-left',
    },
    {
      code: 'Digit6',
      display: '6',
      className: 'index-finger-left',
    },
    {
      code: 'Digit7',
      display: '7',
      className: 'index-finger-right',
    },
    {
      code: 'Digit8',
      display: '8',
      className: 'middle-finger',
    },
    {
      code: 'Digit9',
      display: '9',
      className: 'ring-finger',
    },
    {
      code: 'Digit0',
      display: '0',
      className: 'pinky',
    },
    {
      code: 'Minus',
      display: '-',
      className: 'pinky',
    },
    {
      code: 'Equal',
      display: '=',
      className: 'pinky',
    },
    {
      code: 'Backspace',
      display: '←',
      className: 'backspace',
      neverShowError: true,
    },
  ],
  [
    {
      code: 'Tab',
      className: 'tab',
      neverShowError: true,
    },
    {
      code: 'KeyQ',
      display: 'Q',
      className: 'pinky',
    },
    {
      code: 'KeyW',
      display: 'W',
      className: 'ring-finger',
    },
    {
      code: 'KeyE',
      display: 'E',
      className: 'middle-finger',
    },
    {
      code: 'KeyR',
      display: 'R',
      className: 'index-finger-left',
    },
    {
      code: 'KeyT',
      display: 'T',
      className: 'index-finger-left',
    },
    {
      code: 'KeyY',
      display: 'Y',
      className: 'index-finger-right',
    },
    {
      code: 'KeyU',
      display: 'U',
      className: 'index-finger-right',
    },
    {
      code: 'KeyI',
      display: 'I',
      className: 'middle-finger',
    },
    {
      code: 'KeyO',
      display: 'O',
      className: 'ring-finger',
    },
    {
      code: 'KeyP',
      display: 'P',
      className: 'pinky',
    },
    {
      code: 'BracketLeft',
      display: '`\n´',
      className: 'pinky',
      neverShowError: true,
    },
    {
      code: 'BracketRight',
      display: '[',
      className: 'pinky',
    },
    {
      code: 'Enter',
      className: 'enter-1',
      neverShowError: true,
    },
  ],
  [
    {
      code: 'CapsLock',
      display: 'CAPS',
      className: 'caps',
      neverShowError: true,
    },
    {
      code: 'KeyA',
      display: 'A',
      className: 'pinky',
    },
    {
      code: 'KeyS',
      display: 'S',
      className: 'ring-finger',
    },
    {
      code: 'KeyD',
      display: 'D',
      className: 'middle-finger',
    },
    {
      code: 'KeyF',
      display: 'F',
      className: 'index-finger-left',
    },
    {
      code: 'KeyG',
      display: 'G',
      className: 'index-finger-left',
    },
    {
      code: 'KeyH',
      display: 'H',
      className: 'index-finger-right',
    },
    {
      code: 'KeyJ',
      display: 'J',
      className: 'index-finger-right',
    },
    {
      code: 'KeyK',
      display: 'K',
      className: 'middle-finger',
    },
    {
      code: 'KeyL',
      display: 'L',
      className: 'ring-finger',
    },
    {
      code: 'Semicolon',
      display: 'Ç',
      className: 'pinky',
      neverShowError: true,
    },
    {
      code: 'Quote',
      display: '^\n~',
      className: 'pinky',
      neverShowError: true,
    },
    {
      code: 'Backslash',
      display: ']',
      className: 'pinky',
    },
    {
      code: 'Enter',
      display: '↵',
      className: 'enter-2',
      neverShowError: true,
    },
  ],
  [
    {
      code: 'ShiftLeft',
      display: 'SHIFT',
      className: 'left-shift',
      neverShowError: true,
    },
    {
      code: 'IntlBackslash',
      display: '\\',
      className: 'pinky',
    },
    {
      code: 'KeyZ',
      display: 'Z',
      className: 'pinky',
    },
    {
      code: 'KeyX',
      display: 'X',
      className: 'ring-finger',
    },
    {
      code: 'KeyC',
      display: 'C',
      className: 'middle-finger',
    },
    {
      code: 'KeyV',
      display: 'V',
      className: 'index-finger-left',
    },
    {
      code: 'KeyB',
      display: 'B',
      className: 'index-finger-left',
    },
    {
      code: 'KeyN',
      display: 'N',
      className: 'index-finger-right',
    },
    {
      code: 'KeyM',
      display: 'M',
      className: 'index-finger-right',
    },
    {
      code: 'Comma',
      display: ',',
      className: 'middle-finger',
    },
    {
      code: 'Period',
      display: '.',
      className: 'ring-finger',
    },
    {
      code: 'Slash',
      display: ';',
      className: 'pinky',
    },
    {
      code: 'IntlRo',
      display: '/',
      className: 'pinky',
    },
    {
      code: 'ShiftRight',
      display: 'SHIFT',
      className: 'right-shift',
      neverShowError: true,
    },
  ],
  [
    {
      code: 'Space',
      display: ' ',
      className: 'space',
    },
  ],
];
