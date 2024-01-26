import styled from 'styled-components'
import { Col1, Col2, Col3 } from '../../pages/Main/Main.styles'

export const ResultsList = styled.ul``
export const ResultsItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 8px;
`
export const ResultsColumns = styled.div`
  align-items: center;
  gap: 8px;
`
export const ResultsItemCol1 = styled(ResultsColumns)`
  ${Col1}
`
export const ResultsItemCol2 = styled(ResultsColumns)`
  ${Col2}
`
export const ResultsItemCol3 = styled(ResultsColumns)`
  ${Col3}
  cursor: pointer;
`
export const ItemPicture = styled.div`
  width: 46px;
  height: 46px;
  background-color: var(--color-bg-wrap);
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 auto;
`

export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
