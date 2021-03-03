import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { IoMdRefresh } from 'react-icons/io';
import Keyboard from './Keyboard';
import * as S from './styles';

let charsPerMinuteTimeout: NodeJS.Timeout;
let hiddenInputFocusInterval: NodeJS.Timeout;

interface Props {
  phrase: string;
}

const MainInput = ({ phrase }: Props) => {
  const [showCursor, setShowCursor] = useState(true);

  const [leftString, setLeftString] = useState('');
  const [rightString, setRightString] = useState(phrase);
  const [nextChar, setNextChar] = useState(phrase[0]);

  const [charCount, setCharCount] = useState(0);
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [charsPerMinute, setCharsPerMinute] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const [errors, setErrors] = useState(0);

  const hiddenInputRef = useRef(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { target } = e;

    if (hasFinished) {
      return;
    }

    if (!isPlaying) {
      setIsPlaying(true);
    }

    const char = target.value.slice(-1);
    if (char !== nextChar) {
      setErrors(errors + 1);
      return;
    }

    setCharCount(charCount + 1);

    const substrRightString = rightString.slice(1);
    setLeftString(`${leftString}${char}`);
    setRightString(substrRightString);
    setNextChar(substrRightString[0]);

    const isLastChar = substrRightString.length === 0;
    if (isLastChar) {
      setHasFinished(true);
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    const { key } = e;
    const ignoreKeys = [
      'Backspace',
      'Delete',
      'Home',
      'End',
      'Enter',
      'ArrowLeft',
      'ArrowUp',
      'ArrowRight',
      'ArrowDown',
    ];

    if (ignoreKeys.includes(key)) {
      e.preventDefault();
    }
  }

  function restart() {
    setIsPlaying(false);
    setHasFinished(false);
    setCharsPerMinute(0);
    setTimeInSeconds(0);
    setLeftString('');
    setRightString(phrase);
    setNextChar(phrase[0]);
    setCharCount(0);
    setErrors(0);
  }

  function calcCharsPerMinute() {
    if (timeInSeconds > 0) {
      setCharsPerMinute(Math.round((charCount * 60) / timeInSeconds));
    }
  }

  useEffect(() => {
    if (!hasFinished) {
      setTimeout(() => setShowCursor(!showCursor), 500);
    }
  }, [showCursor, hasFinished]);

  useEffect(() => {
    if (hasFinished) {
      setIsPlaying(false);
      setShowCursor(false);
      clearTimeout(charsPerMinuteTimeout);
    }
  }, [hasFinished]);

  useEffect(() => {
    if (isPlaying) {
      charsPerMinuteTimeout = setTimeout(() => {
        setTimeInSeconds(timeInSeconds + 1);
      }, 1000);
    }
  }, [timeInSeconds, isPlaying]);

  useEffect(() => {
    calcCharsPerMinute();
  }, [timeInSeconds, hasFinished]);

  useEffect(() => {
    if (!hasFinished) {
      hiddenInputFocusInterval = setInterval(() => {
        hiddenInputRef.current.focus();
      }, 100);
    } else {
      clearInterval(hiddenInputFocusInterval);
    }

    return () => {
      clearInterval(hiddenInputFocusInterval);
    };
  }, [hasFinished]);

  return (
    <S.Wrapper>
      <S.InfoList>
        <S.Info>{errors} Erros</S.Info>
        <S.Info>{charsPerMinute} CPM</S.Info>
        <S.Info>
          <button type="button" onClick={restart}>
            <IoMdRefresh size={24} /> Restart
          </button>
        </S.Info>
      </S.InfoList>

      <S.FakeInput>
        <S.HiddenInput
          type="text"
          ref={hiddenInputRef}
          value={leftString}
          autoComplete="off"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />

        <S.Left>{leftString}</S.Left>
        <S.Right>
          {!hasFinished && <S.Cursor visible={showCursor} />}
          {rightString}
        </S.Right>
      </S.FakeInput>

      <Keyboard />
    </S.Wrapper>
  );
};

export default MainInput;
