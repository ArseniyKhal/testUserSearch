import * as S from './ResultItem.styles'

export const ResultItem = ({ dataItem }) => {
  return (
    <S.ResultsItem>
      <S.ResultsItemCol1>
        <S.ItemPicture>
          <S.ItemImg src={dataItem.avatar_url} alt="user avatar"></S.ItemImg>
        </S.ItemPicture>
      </S.ResultsItemCol1>
      <S.ResultsItemCol2>{dataItem.login}</S.ResultsItemCol2>
      <S.ResultsItemCol3>
        <a href={dataItem.html_url}>{dataItem.html_url}</a>
      </S.ResultsItemCol3>
    </S.ResultsItem>
  )
}
