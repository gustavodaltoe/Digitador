import styled from 'styled-components';

interface KeyProps {
  isHighlighted: boolean;
  isLastTarget: boolean;
  isPressed?: boolean;
  neverShowError?: boolean;
}

export const Wrapper = styled.section``;

export const KeysContainer = styled.div`
  padding: 0.6rem;
  margin: 2rem 0;
  background-color: ${(props) => props.theme.main};

  border-radius: 1rem;
`;

export const Row = styled.div`
  display: flex;
`;

export const Key = styled.span<KeyProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #9ad3fa;
  width: 4.4rem;
  height: 4.4rem;
  font-size: 1.6rem;
  color: #777;
  white-space: break-spaces;
  line-height: 1rem;

  border-radius: 0.4rem;
  margin: 0.4rem 0.3rem;

  transition: box-shadow 0.2s;

  box-shadow: ${(props) => props.isHighlighted && '0 0 0.4rem 0.3rem #fff'};
  filter: ${(props) => {
    if (props.isPressed && !props.isLastTarget && !props.neverShowError) {
      // red
      return 'grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.8)';
    }
    if (props.isPressed && (props.isLastTarget || !!props.neverShowError)) {
      return 'brightness(90%)';
    }
    return 'brightness(100%)';
  }};

  &.index-finger-right {
    background: #ffef7e;
  }
  &.index-finger-left {
    background: #ffc07e;
  }
  &.middle-finger {
    background: #f69ec4;
  }
  &.ring-finger {
    background: #63e3ff;
  }
  &.pinky {
    background: #78e2aa;
  }

  &.backspace {
    width: 9rem;
  }

  &.tab {
    width: 7rem;
  }

  &.caps {
    width: 8rem;
  }

  &.enter-1 {
    margin-bottom: 0;
    border-bottom-right-radius: 0;
    width: 6.4rem;
  }
  &.enter-2 {
    margin-top: -0.4rem;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    height: 5.2rem;
    width: 5.4rem;
  }

  &.left-shift {
    width: 6rem;
  }
  &.right-shift {
    width: 7.4rem;
  }

  &.space {
    width: 38rem;
    margin-left: auto;
    margin-right: auto;
  }
`;
