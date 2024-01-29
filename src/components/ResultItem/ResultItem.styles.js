import styled from 'styled-components'

export const ResultsList = styled.ul``
export const ResultsItem = styled.li`
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  align-items: center;
  margin-bottom: 10px;
  height: 34px;
  gap: 20px;
  wrap: wrap;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: var(--item-hover);
  }
  @media (width <= 600px) {
    grid-template-columns: 100px 1fr;
  }
`
export const ResultsColumns = styled.div`
  align-items: center;
  overflow: hidden;
  gap: 8px;
`
export const ResultsItemCol1 = styled(ResultsColumns)`
  height: 100%;
  transition: all 0.3s ease;
`
export const ResultsItemCol2 = styled(ResultsColumns)`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 15px;
  @media (width <= 600px) {
    align-items: center;
  }
`
export const ResultsItemCol3 = styled(ResultsColumns)`
  @media (width <= 600px) {
    display: none;
  }
`
export const ItemPicture = styled.div`
  height: 100%;
  width: 100%;
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
  object-fit: contain;
`
export const ItemLink = styled.a`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
