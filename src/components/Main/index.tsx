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

    <MainInput phrase="Essa é a frase que vai mostrar o quão bom você é" />
  </S.Wrapper>
);

export default Main;
