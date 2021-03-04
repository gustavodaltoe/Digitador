import styled from 'styled-components';

interface CursorProps {
  visible: boolean;
}

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 90%;
  margin: auto;
  padding: 0 2rem;
  margin-top: 6rem;
`;

export const InfoList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  margin-bottom: 1rem;
`;

export const Info = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: #eee;
  font-size: 2rem;
  margin: 0 1rem;
  width: 100px;

  button {
    display: flex;
    align-items: center;
    background: unset;
    border: 0;
    font-size: inherit;
    color: inherit;

    cursor: pointer;
  }
`;

export const FakeInput = styled.div`
  background: ${(props) => props.theme.light};
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  border-radius: 1.2rem;
  height: 8rem;

  position: relative;
  overflow: hidden;

  span {
    font-size: 3rem;
    white-space: pre-wrap;

    @media (max-width: 1440px) {
      font-size: 2.5rem;
    }
  }
`;

export const HiddenInput = styled.input`
  position: absolute;
  top: -2rem;
  height: 0;
`;

export const Left = styled.span`
  color: #aaa;
`;

export const Right = styled.span`
  position: relative;
  color: #333;
`;

export const Cursor = styled.div<CursorProps>`
  position: absolute;
  top: 0;
  left: 0;

  border-left: 1px solid #000;
  height: 4rem;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;
