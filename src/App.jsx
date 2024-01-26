import { Header } from './components/Header/Header'
import { Main } from './pages/Main/Main'
import * as S from './App.styles'

function App() {
  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <Header></Header>
        <Main></Main>
        <footer>Спасибо за просмотр</footer>
      </S.Wrapper>
    </>
  )
}

export default App
