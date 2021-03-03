import styled from 'styled-components';

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

export const Key = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #9ad3fa;
  width: 4.4rem;
  height: 4.4rem;
  font-size: 1.6rem;
  color: #777;

  border-radius: 0.4rem;
  margin: 0.4rem 0.3rem;

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

  &[data-key='Backspace'] {
    width: 9rem;
  }

  &[data-key='TAB'] {
    width: 7rem;
  }

  &[data-key='CAPS'] {
    width: 8rem;
  }

  &[data-key='Enter'] {
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
  }

  &[data-key='Shift'] {
    width: 6rem;

    &.right-shift {
      width: 7.4rem;
    }
  }

  &[data-key='Spacebar'] {
    width: 38rem;
    margin-left: auto;
    margin-right: auto;
  }
`;
