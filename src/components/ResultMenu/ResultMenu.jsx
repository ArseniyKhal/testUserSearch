import { useState } from 'react'
import { Pagination } from '../Pagination/Pagination'
import * as S from './ResultMenu.styles'

export const ResultMenu = ({
  resultSearchData,
  links,
  requestData,
  page,
  setPage,
  sortBy,
  setSortBy,
}) => {
  const [isVisibleSort, setVisibleSort] = useState(false)

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
    <S.ResultsMenu
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
        onClick={() => {
          handleVisibleSort()
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
    </S.ResultsMenu>
  )
}
