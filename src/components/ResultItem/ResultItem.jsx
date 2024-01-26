import * as S from './ResultItem.styles'

export const ResultItem = () => {
  return (
    <>
      <S.ResultsItem>
        <S.ResultsItemCol1>
          <S.ItemPicture>
            <S.ItemImg
              src={
                `https://avatars.githubusercontent.com/u/927113?v=4`
                //   dataCard?.images[0]?.url
                //     ? `http://localhost:8090/${dataCard?.images[0]?.url}`
                //     : '/img/noImage.jpg'
              }
              alt="fotoAvd"
            ></S.ItemImg>
          </S.ItemPicture>
        </S.ResultsItemCol1>
        <S.ResultsItemCol2>biob</S.ResultsItemCol2>
        <S.ResultsItemCol3>https://api.github.com/users/biob</S.ResultsItemCol3>
      </S.ResultsItem>
    </>
  )
}
