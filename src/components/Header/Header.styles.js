import styled from 'styled-components'

export const HeaderSection = styled.header`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: coral;
  text-align: center;
`
export const HeaderTitle = styled.h1`
  font-size: 1.6em;
  @media (width <=770px) {
    font-size: 1.2em;
  }
  @media (width <= 600px) {
    font-size: 0.8em;
  }
`
