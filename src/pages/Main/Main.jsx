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
    foundUsersData = await findUsers(searchText)
    if (foundUsersData) {
      setResultSearchData(foundUsersData)
      setIsSearch(false)
    }
  }

  // формируем список найденых пользователей
  let foundUsersData = resultSearchData?.items.map((user) => {
    return <ResultItem key={user.id} dataItem={user}></ResultItem>
  })

  const handleClickPrev = () => {
    console.log('предыдущий')
  }
  const handleClickNext = () => {
    console.log('следующий')
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
          <S.ResultsNavigation>
            <S.SearchTotal>
              Найдено:
              {resultSearchData ? ` ${resultSearchData.total_count}` : ' 0'}
            </S.SearchTotal>
            <S.NavigationBar>
              <S.NavigationItem onClick={() => handleClickPrev()}>
                &larr; Предыдущий лист
              </S.NavigationItem>
              <S.NavigationItem onClick={() => handleClickNext()}>
                Следующий лист &rarr;
              </S.NavigationItem>
            </S.NavigationBar>
          </S.ResultsNavigation>
          <S.ResultsSection>
            <S.ResultsBlockTitles>
              <S.ResultsTitleCol1>AVATAR</S.ResultsTitleCol1>
              <S.ResultsTitleCol2>LOGIN</S.ResultsTitleCol2>
              <S.ResultsTitleCol3>URL</S.ResultsTitleCol3>
            </S.ResultsBlockTitles>
            <S.ResultsList>{foundUsersData}</S.ResultsList>
          </S.ResultsSection>
        </Container>
      </S.Main>
    </>
  )
}
