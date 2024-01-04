import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

  
export const BaseCountdownButton  = styled.button`
  width: 100%;
  padding: 1rem;
  border: 0;
  display: flex;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: ${(props) => props.theme['gray-100']};
  gap: 0.5rem;
  cursor: pointer;
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
}
`
export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['red-500']};
  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`