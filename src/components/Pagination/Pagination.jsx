import { pageLimit } from '../../service/api'
import * as S from './Pagination.styles'

export const Pagination = ({
  total_count,
  page,
  setPage,
  requestData,
  sort,
}) => {
  const totalPage = Math.ceil(total_count / pageLimit)

  // навигация по страницам
  const handleClickFirstPage = () => {
    setPage(1)
    requestData({ sort, page: 1 })
  }
  const handleClickPrev = () => {
    setPage(page - 1)
    requestData({ sort, page: page - 1 })
  }
  const handleClickNext = () => {
    setPage(page + 1)
    requestData({ sort, page: page + 1 })
  }
  const handleClickLastPage = () => {
    setPage(totalPage)
    requestData({ sort, page: totalPage })
  }

  return (
    <S.NavigationBar>
      {page !== 1 && (
        <S.NavigationItem onClick={() => handleClickFirstPage()}>
          |&larr;
        </S.NavigationItem>
      )}
      {page !== 1 && (
        <S.NavigationItem onClick={() => handleClickPrev()}>
          &larr;
        </S.NavigationItem>
      )}
      <p>
        страница {page} из {totalPage}
      </p>
      {page !== totalPage && (
        <S.NavigationItem onClick={() => handleClickNext()}>
          &rarr;
        </S.NavigationItem>
      )}
      {page !== totalPage && (
        <S.NavigationItem onClick={() => handleClickLastPage()}>
          &rarr;|
        </S.NavigationItem>
      )}
    </S.NavigationBar>
  )
}
