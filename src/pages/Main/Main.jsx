import { useState } from 'react'
import { Container } from '../../App.styles'
import { findUsers } from '../../service/api'
import { ResultItem } from '../../components/ResultItem/ResultItem'
import { Pagination } from '../../components/Pagination/Pagination'
import * as S from './Main.styles'

export const Main = () => {
  const [searchText, setSearchText] = useState('')
  const [isSearch, setIsSearch] = useState(false)
  const [resultSearchData, setResultSearchData] = useState(null)
  const [isVisibleSort, setVisibleSort] = useState(false)
  const [sortBy, setSortBy] = useState('')
  const [isError, setError] = useState('')
  const [page, setPage] = useState(1)
  const [links, setLinks] = useState(null)

  const requestData = async ({ sortBy, url }) => {
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
      console.log(error)
      setError(error.message)
    } finally {
      setIsSearch(false)
    }
  }

  const handleEnter = () => {
    setSortBy('')
    setPage(1)
    requestData({ sortBy })
  }
  // формируем список найденых пользователей
  let listMapUsers = resultSearchData?.items.map((user) => {
    return <ResultItem key={user.id} dataItem={user}></ResultItem>
  })

  // выбор сортировки по количеству репозиториев
  const handleVisibleSort = () => {
    setVisibleSort(!isVisibleSort)
  }
  const handleSortMoreRepo = () => {
    setSortBy('desc')
    setPage(1)
    requestData({ sortBy: 'desc' })
  }
  const handleSortLessRepo = () => {
    setSortBy('asc')
    setPage(1)
    requestData({ sortBy: 'asc' })
  }
  let sortText = ''
  if (sortBy === 'desc') {
    sortText = 'по убыванию репозиториев'
  } else if (sortBy === 'asc') {
    sortText = 'по возрастанию репозиториев'
  } else {
    sortText = ''
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
              disabled={!searchText}
              onClick={() => {
                handleEnter()
              }}
            >
              Найти
            </S.EnterButton>
          </S.SearchSection>
          <S.ResultsTitle>
            {isSearch ? 'Ищем...' : `Результат поиска:`}
          </S.ResultsTitle>
          {isError && <S.ErrorText>{isError}</S.ErrorText>}

          <S.ResultsNavigation
            style={{
              visibility: `${resultSearchData ? 'visible' : 'hidden'}`,
            }}
          >
            <S.SearchTotal>
              {resultSearchData?.total_count
                ? `Найдено: ${resultSearchData.total_count}`
                : 'Ничего не найдено'}
            </S.SearchTotal>
            <S.SortBox
              onClick={(e) => {
                handleVisibleSort(e)
              }}
            >
              <p>Сортировка: {sortText}</p>
              <S.SortMenu
                style={{
                  transform: `${isVisibleSort ? 'scale(1)' : 'scale(0)'}`,
                }}
              >
                <S.SortItem
                  onClick={() => {
                    handleSortMoreRepo()
                  }}
                >
                  Больше репозиториев
                </S.SortItem>
                <S.SortItem
                  onClick={() => {
                    handleSortLessRepo()
                  }}
                >
                  Меньше репозиториев
                </S.SortItem>
              </S.SortMenu>
            </S.SortBox>
            <Pagination
              total_count={resultSearchData?.total_count}
              page={page}
              setPage={setPage}
              requestData={requestData}
              sortBy={sortBy}
              links={links}
            ></Pagination>
          </S.ResultsNavigation>

          <S.ResultsSection>
            <S.ResultsBlockTitles>
              <S.ResultsTitleCol1>AVATAR</S.ResultsTitleCol1>
              <S.ResultsTitleCol2>LOGIN</S.ResultsTitleCol2>
              <S.ResultsTitleCol3>GitHub pages</S.ResultsTitleCol3>
            </S.ResultsBlockTitles>
            <S.ResultsList>{listMapUsers}</S.ResultsList>
          </S.ResultsSection>
        </Container>
      </S.Main>
    </>
  )
}
