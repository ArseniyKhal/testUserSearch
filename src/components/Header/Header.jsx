import { Container } from '../../App.styles'
import * as S from './Header.styles'

export const Header = () => {
  return (
    <>
      <S.HeaderSection>
        <Container>
          <S.HeaderTitle>
            Тестовое задание для старта трудоустройства
          </S.HeaderTitle>
        </Container>
      </S.HeaderSection>
    </>
  )
}
