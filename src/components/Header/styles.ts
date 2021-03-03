import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  max-width: 98rem;
  margin: auto;
  padding: 0 4rem;
  height: 8rem;
  border-radius: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.darker};
`;

export const Title = styled.a`
  font-size: 2rem;
  font-weight: bolder;
  text-transform: uppercase;
  color: ${(props) => props.theme.light};
`;

export const Login = styled.a`
  font-size: 1.3rem;
  border-left: 1px solid #fff;
  padding: 0 1rem;
  color: ${(props) => props.theme.text};
  font-weight: bold;
`;
