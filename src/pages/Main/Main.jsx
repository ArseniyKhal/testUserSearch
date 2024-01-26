import { Container } from '../../App.styles'
import { useState } from 'react'
import { findUsers } from '../../service/api'
import { ResultItem } from '../../components/ResultItem/ResultItem'
import * as S from './Main.styles'

export const Main = () => {
  const [searchText, setSearchText] = useState('')
  const [isSearch, setIsSearch] = useState(false)
  const [resultSearchData, setResultSearchData] = useState(null)

  const handleEnter = async (e) => {
    setIsSearch(true)
    const foundUsersData = await findUsers(searchText)
    console.log(foundUsersData)
    if (foundUsersData) {
      setResultSearchData(
        foundUsersData.items.map((user) => {
          return <ResultItem key={user.id} dataItem={user}></ResultItem>
        }),
      )
      setIsSearch(false)
    }
  }

  return (
    <>
      <S.Main>
        <Container>
          <S.MainTitle>Поиск пользователя по логину</S.MainTitle>
          <S.SearchSection>
            <S.SearchText
              type="text"
              placeholder="Поиск пользователя"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value)
              }}
            />
            <S.EnterButton
              onClick={() => {
                handleEnter()
              }}
            >
              Найти
            </S.EnterButton>
          </S.SearchSection>
          <S.ResultsTitle>
            {isSearch ? 'Ищем...' : 'Результат поиска:'}
          </S.ResultsTitle>
          <p>
            Найдено:
            {resultSearchData ? ` ${resultSearchData.length}` : ' 0'}
          </p>
          <S.ResultsSection>
            <S.ResultsBlockTitles>
              <S.ResultsTitleCol1>AVATAR</S.ResultsTitleCol1>
              <S.ResultsTitleCol2>LOGIN</S.ResultsTitleCol2>
              <S.ResultsTitleCol3>URL</S.ResultsTitleCol3>
            </S.ResultsBlockTitles>
            <S.ResultsList>{resultSearchData}</S.ResultsList>
          </S.ResultsSection>
        </Container>
      </S.Main>
    </>
  )
}
