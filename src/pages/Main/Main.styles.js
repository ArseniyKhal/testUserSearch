import styled from 'styled-components'
import { Button } from '../../App.styles'

export const Main = styled.main`
  flex: 1 1 auto;
  @media (width <= 800px) {
    height: 55px;
  }
`
export const MainTitle = styled.h2`
  font-size: 2.5em;
  margin: 20px 0;
`

export const SearchSection = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`

export const SearchText = styled.input`
  flex: 1 0 auto;
  height: 50px;
  border-radius: 6px;
  border: 2px solid #fff;
  background: #fff;
  padding: 0px 19px;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  background-color: transparent;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text-color-white);
  outline: none;
  &::-webkit-search-cancel-button {
    display: none;
  }
  &::-webkit-input-placeholder {
    background-color: transparent;
    line-height: 150%;
    color: var(--text-color-input);
  }
  &:-ms-input-placeholder {
    background-color: transparent;
    line-height: 150%;
    color: var(--text-color-input);
  }
  &::placeholder {
    background-color: transparent;
    line-height: 150%;
    color: var(--text-color-white);
  }
`
export const EnterButton = styled(Button)``

export const ResultsSection = styled.div`
  border: 2px solid #fff;
  border-radius: 6px;
  padding: 20px;
`
export const ResultsTitle = styled.h3`
  font-size: 1.8em;
  margin: 20px 0;
`
export const ResultsBlockTitles = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  align-items: center;
  margin-bottom: 20px;
  gap: 8px;
`
export const ResultsTitleColumns = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  border-bottom: 2px solid #fff;
`
export const ResultsTitleCol1 = styled(ResultsTitleColumns)``
export const ResultsTitleCol2 = styled(ResultsTitleColumns)``
export const ResultsTitleCol3 = styled(ResultsTitleColumns)``
export const ResultsList = styled.ul``

export const ResultsNavigation = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
  gap: 8px;
`
export const SearchTotal = styled.p``
export const NavigationBar = styled.nav`
  display: flex;
  gap: 20px;
`
export const NavigationItem = styled.p`
  text-align: center;
  cursor: pointer;
`
export const ErrorText = styled.p`
  color: red;
  margin-bottom: 20px;
  font-size: 24px;
`
