import * as S from './styles';

const Keyboard = () => (
  <S.Wrapper>
    <S.KeysContainer>
      <S.Row>
        <S.Key data-key="'">&apos;</S.Key>
        <S.Key data-key="1" className="pinky">
          1
        </S.Key>
        <S.Key data-key="2" className="pinky">
          2
        </S.Key>
        <S.Key data-key="3" className="ring-finger">
          3
        </S.Key>
        <S.Key data-key="4" className="middle-finger">
          4
        </S.Key>
        <S.Key data-key="5" className="index-finger-left">
          5
        </S.Key>
        <S.Key data-key="6" className="index-finger-left">
          6
        </S.Key>
        <S.Key data-key="7" className="index-finger-right">
          7
        </S.Key>
        <S.Key data-key="8" className="middle-finger">
          8
        </S.Key>
        <S.Key data-key="9" className="ring-finger">
          9
        </S.Key>
        <S.Key data-key="0" className="pinky">
          0
        </S.Key>
        <S.Key data-key="-" className="pinky">
          -
        </S.Key>
        <S.Key data-key="=" className="pinky">
          =
        </S.Key>
        <S.Key data-key="Backspace">&larr;</S.Key>
      </S.Row>
      <S.Row>
        <S.Key data-key="TAB">TAB</S.Key>
        <S.Key data-key="Q" className="pinky">
          Q
        </S.Key>
        <S.Key data-key="W" className="ring-finger">
          W
        </S.Key>
        <S.Key data-key="E" className="middle-finger">
          E
        </S.Key>
        <S.Key data-key="R" className="index-finger-left">
          R
        </S.Key>
        <S.Key data-key="T" className="index-finger-left">
          T
        </S.Key>
        <S.Key data-key="Y" className="index-finger-right">
          Y
        </S.Key>
        <S.Key data-key="U" className="index-finger-right">
          U
        </S.Key>
        <S.Key data-key="I" className="middle-finger">
          I
        </S.Key>
        <S.Key data-key="O" className="ring-finger">
          O
        </S.Key>
        <S.Key data-key="P" className="pinky">
          P
        </S.Key>
        <S.Key data-key="´" className="pinky">
          ´
        </S.Key>
        <S.Key data-key="[" className="pinky">
          [
        </S.Key>
        <S.Key data-key="Enter" className="enter-1">
          Enter
        </S.Key>
      </S.Row>
      <S.Row>
        <S.Key data-key="CAPS">CAPS</S.Key>
        <S.Key data-key="A" className="pinky">
          A
        </S.Key>
        <S.Key data-key="S" className="ring-finger">
          S
        </S.Key>
        <S.Key data-key="D" className="middle-finger">
          D
        </S.Key>
        <S.Key data-key="F" className="index-finger-left">
          F
        </S.Key>
        <S.Key data-key="G" className="index-finger-left">
          G
        </S.Key>
        <S.Key data-key="H" className="index-finger-right">
          H
        </S.Key>
        <S.Key data-key="J" className="index-finger-right">
          J
        </S.Key>
        <S.Key data-key="K" className="middle-finger">
          K
        </S.Key>
        <S.Key data-key="L" className="ring-finger">
          L
        </S.Key>
        <S.Key data-key="Ç" className="pinky">
          Ç
        </S.Key>
        <S.Key data-key="~" className="pinky">
          ~
        </S.Key>
        <S.Key data-key="]" className="pinky">
          ]
        </S.Key>
        <S.Key data-key="Enter" className="enter-2">
          &crarr;
        </S.Key>
      </S.Row>
      <S.Row>
        <S.Key data-key="Shift" className="left-shift">
          SHIFT
        </S.Key>
        <S.Key data-key="\" className="pinky">
          \
        </S.Key>
        <S.Key data-key="Z" className="pinky">
          Z
        </S.Key>
        <S.Key data-key="X" className="ring-finger">
          X
        </S.Key>
        <S.Key data-key="C" className="middle-finger">
          C
        </S.Key>
        <S.Key data-key="V" className="index-finger-left">
          V
        </S.Key>
        <S.Key data-key="B" className="index-finger-left">
          B
        </S.Key>
        <S.Key data-key="N" className="index-finger-right">
          N
        </S.Key>
        <S.Key data-key="M" className="index-finger-right">
          M
        </S.Key>
        <S.Key data-key="," className="middle-finger">
          ,
        </S.Key>
        <S.Key data-key="." className="ring-finger">
          .
        </S.Key>
        <S.Key data-key=";" className="pinky">
          ;
        </S.Key>
        <S.Key data-key="/" className="pinky">
          /
        </S.Key>
        <S.Key data-key="Shift" className="right-shift">
          SHIFT
        </S.Key>
      </S.Row>
      <S.Row>
        <S.Key data-key="Spacebar" />
      </S.Row>
    </S.KeysContainer>
  </S.Wrapper>
);

export default Keyboard;
