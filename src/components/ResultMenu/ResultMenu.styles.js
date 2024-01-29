import styled from 'styled-components'

export const ResultsMenu = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
  gap: 8px;
  @media (width <= 700px) {
    flex-direction: column;
  }
`
export const SearchTotal = styled.p``

export const ErrorText = styled.p`
  color: var(--text-error);
  margin-bottom: 20px;
  font-size: 24px;
`
export const SortBox = styled.div`
  cursor: pointer;
  position: relative;
`
export const SortMenu = styled.ul`
  background-color: var(--menu-background);
  width: 200px;
  position: absolute;
  margin-top: 6px;
  padding: 10px;
  border-radius: 6px;
  background: var(grey);
  transition: transform 0.3s ease;
  overflow: hidden;
  transform-origin: 0px 0px;
`
export const SortItem = styled.li`
  &:hover {
    text-decoration: underline;
  }
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`
