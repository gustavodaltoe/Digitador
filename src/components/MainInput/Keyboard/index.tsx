import { useEffect, useRef, useState } from 'react';
import { keyboardKeys } from './keyboardKeys';
import * as S from './styles';

interface Props {
  targetKey?: string;
}

const Keyboard = ({ targetKey }: Props) => {
  const [pressedKey, setPressedKey] = useState({ key: '', code: '' });

  const target = removeAccents(targetKey?.toUpperCase() || '');

  const targetRef = useRef(null);
  targetRef.current = target;

  const lastTargetKeyRef = useRef(target);

  function removeAccents(str: string) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function onKeyDown(e: KeyboardEvent) {
    setPressedKey(e);
  }

  function onKeyUp(e: KeyboardEvent) {
    setPressedKey({ key: '', code: '' });
  }

  useEffect(() => {
    lastTargetKeyRef.current = targetRef.current;
  }, [pressedKey, targetRef]);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  return (
    <S.Wrapper>
      <S.KeysContainer>
        {keyboardKeys.map((row, i) => {
          return (
            <S.Row key={i}>
              {row.map(({ code, display, className, neverShowError }) => (
                <S.Key
                  key={code}
                  isHighlighted={display && target === display}
                  isLastTarget={lastTargetKeyRef.current === display}
                  isPressed={pressedKey.code === code}
                  neverShowError={neverShowError}
                  className={className}
                >
                  {display || code}
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
