import { useEffect, useState } from 'react';
import { keyboardKeys } from './keyboardKeys';
import * as S from './styles';

interface Props {
  targetKey?: string;
}

const Keyboard = ({ targetKey }: Props) => {
  const [pressedKey, setPressedKey] = useState('');

  function onKeyDown({ key }: KeyboardEvent) {
    setPressedKey(key.toUpperCase());
  }
  function onKeyUp(e: KeyboardEvent) {
    setPressedKey('');
  }

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  const target = targetKey?.toUpperCase();

  return (
    <S.Wrapper>
      <S.KeysContainer>
        {keyboardKeys.map((row, i) => {
          return (
            <S.Row key={i}>
              {row.map(({ key, display, className }) => (
                <S.Key
                  key={key}
                  isTarget={target === key}
                  isPressed={pressedKey === key}
                  className={className}
                >
                  {display || key}
                </S.Key>
              ))}
            </S.Row>
          );
        })}
      </S.KeysContainer>
    </S.Wrapper>
  );
};

export default Keyboard;
