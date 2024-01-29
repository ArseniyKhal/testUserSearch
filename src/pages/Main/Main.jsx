import { useState } from 'react'
import { Container } from '../../App.styles'
import { findUsers } from '../../service/api'
import { ResultItem } from '../../components/ResultItem/ResultItem'
import { ResultMenu } from '../../components/ResultMenu/ResultMenu'
import * as S from './Main.styles'

export const Main = () => {
  const [searchText, setSearchText] = useState('')
  const [isSearch, setIsSearch] = useState(false)
  const [resultSearchData, setResultSearchData] = useState(null)
  const [sortBy, setSortBy] = useState('')
  const [isError, setError] = useState('')
  const [page, setPage] = useState(1)
  const [links, setLinks] = useState(null)

  const requestData = async ({ searchText, sortBy, url }) => {
    try {
      setIsSearch(true)
      const response = await findUsers({ searchText, sortBy, url })
      const PaginationLinks = Object.fromEntries(response.headers).link
      setLinks(PaginationLinks)
      const foundUsersData = await response.json()
      if (foundUsersData) {
        setError('')
        setResultSearchData(foundUsersData)
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
        setError(error.message)
        console.log(error)
      }
    } finally {
      setIsSearch(false)
    }
  }

  const handleEnterSearch = () => {
    const url = ''
    setSortBy('')
    setPage(1)
    requestData({ searchText, sortBy, url })
  }
  // формируем список найденых пользователей
  let listMapUsers = resultSearchData?.items.map((user) => {
    return <ResultItem key={user.id} dataItem={user}></ResultItem>
  })

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
              disabled={!searchText}
              onClick={() => {
                handleEnterSearch()
              }}
            >
              Найти
            </S.EnterButton>
          </S.SearchSection>
          <S.ResultsSection>
            <S.ResultsTitle>
              {isSearch ? 'Ищем...' : `Результат поиска:`}
            </S.ResultsTitle>
            {isError && <S.ErrorText>{isError}</S.ErrorText>}
            <ResultMenu
              resultSearchData={resultSearchData}
              links={links}
              requestData={requestData}
              page={page}
              setPage={setPage}
              sortBy={sortBy}
              setSortBy={setSortBy}
            ></ResultMenu>
            <S.ResultsTable>
              <S.ResultsBlockTitles>
                <S.ResultsTitleCol1>AVATAR</S.ResultsTitleCol1>
                <S.ResultsTitleCol2>LOGIN</S.ResultsTitleCol2>
                <S.ResultsTitleCol3>GitHub pages</S.ResultsTitleCol3>
              </S.ResultsBlockTitles>
              <S.ResultsList>{listMapUsers}</S.ResultsList>
            </S.ResultsTable>
          </S.ResultsSection>
        </Container>
      </S.Main>
    </>
  )
}
