import { useState } from 'react'
import * as S from './ResultItem.styles'

export const ResultItem = ({ dataItem }) => {
  const [isVisibleUser, setIsVisibleUser] = useState(false)

  const handleClickUser = () => {
    setIsVisibleUser(!isVisibleUser)
  }
  return (
    <S.ResultsItem
      onClick={() => handleClickUser()}
      style={{
        height: `${isVisibleUser ? '200px' : ''}`,
        gridTemplateColumns: `${isVisibleUser ? '200px 1fr ' : ''}`,
      }}
    >
      <S.ResultsItemCol1>
        <S.ItemPicture>
          <S.ItemImg src={dataItem.avatar_url} alt="user avatar"></S.ItemImg>
        </S.ItemPicture>
      </S.ResultsItemCol1>
      {!isVisibleUser ? (
        <>
          <S.ResultsItemCol2>{dataItem.login}</S.ResultsItemCol2>
          <S.ResultsItemCol3>
            <S.ItemLink href={dataItem.html_url}>
              {dataItem.html_url}
            </S.ItemLink>
          </S.ResultsItemCol3>
        </>
      ) : (
        <>
          <S.ResultsItemCol2 style={{ fontSize: '22px' }}>
            <div>{dataItem.login}</div>
            <div>
              GitHub pages:{' '}
              <S.ItemLink href={dataItem.html_url}>
                {dataItem.html_url}
              </S.ItemLink>
            </div>
            <div>Followers: 5</div>
            <div>Following: 10</div>
          </S.ResultsItemCol2>
        </>
      )}
    </S.ResultsItem>
  )
}
