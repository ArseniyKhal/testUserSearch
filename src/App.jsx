import { Header } from './components/Header/Header'
import { Main } from './pages/Main/Main'
import { Footer } from './components/Footer/Footer'
import * as S from './App.styles'

function App() {
  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </S.Wrapper>
    </>
  )
}

export default App
