// import { Head } from 'next/document';
import Head from 'next/head';
import Header from '../Header';
import MainInput from '../MainInput';
import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <Head>
      <title>Início | Digitador</title>
    </Head>

    <Header />

    <MainInput phrase="Digite essa frase para descobrir quantas caracteres por minuto você faz" />
  </S.Wrapper>
);

export default Main;
