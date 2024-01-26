import * as S from './ResultItem.styles'

export const ResultItem = ({ dataItem }) => {
  return (
    <S.ResultsItem>
      <S.ResultsItemCol1>
        <S.ItemPicture>
          <S.ItemImg
            src={
              dataItem.avatar_url
              //   dataCard?.images[0]?.url
              //     ? `http://localhost:8090/${dataCard?.images[0]?.url}`
              //     : '/img/noImage.jpg'
            }
            alt="fotoAvd"
          ></S.ItemImg>
        </S.ItemPicture>
      </S.ResultsItemCol1>
      <S.ResultsItemCol2>{dataItem.login}</S.ResultsItemCol2>
      <S.ResultsItemCol3>{dataItem.url}</S.ResultsItemCol3>
    </S.ResultsItem>
  )
}
