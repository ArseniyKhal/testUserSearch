import { pageLimit } from '../../service/api'
import * as S from './Pagination.styles'

// type Props = {
//   total_count: number
//   page: number
//   setPage: number
//   requestData: object
//   sortBy: string
// }

export const Pagination = ({
  total_count,
  page,
  setPage,
  requestData,
  sortBy,
  links,
}) => {
  const totalPage = Math.ceil(total_count / pageLimit)

  const searchURL = (rel) => {
    let relStr = links.split(', ').filter((el) => el.includes(rel))
    const lunkRel = relStr[0].substring(
      relStr[0].indexOf('<') + 1,
      relStr[0].lastIndexOf('>'),
    )
    return lunkRel
  }

  // навигация по страницам
  const handleClickFirstPage = () => {
    const url = searchURL('rel="first"')
    requestData({ url })
    setPage(url.split('&page=')[1])
  }
  const handleClickPrev = () => {
    const url = searchURL('rel="prev"')
    requestData({ url })
    setPage(url.split('&page=')[1])
  }
  const handleClickNext = () => {
    const url = searchURL('rel="next"')
    requestData({ url })
    setPage(url.split('&page=')[1])
  }
  const handleClickLastPage = () => {
    const url = searchURL('rel="last"')
    requestData({ url })
    setPage(url.split('&page=')[1])
  }

  return (
    <S.NavigationBar>
      {links?.includes('rel="first"') && (
        <S.NavigationItem onClick={() => handleClickFirstPage()}>
          |&larr;
        </S.NavigationItem>
      )}
      {links?.includes('rel="prev"') && (
        <S.NavigationItem onClick={() => handleClickPrev()}>
          &larr;
        </S.NavigationItem>
      )}
      <p>
        страница {page} из {totalPage}
      </p>
      {links?.includes('rel="next"') && (
        <S.NavigationItem onClick={() => handleClickNext()}>
          &rarr;
        </S.NavigationItem>
      )}
      {links?.includes('rel="last"') && (
        <S.NavigationItem onClick={() => handleClickLastPage()}>
          &rarr;|
        </S.NavigationItem>
      )}
    </S.NavigationBar>
  )
}
