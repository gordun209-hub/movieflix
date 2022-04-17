import styled from 'styled-components'

export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  border: 2px solid;
`

// A new component based on Button, but with some override styles
export const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`
export const Wrapper = styled.div`
  background: #f0f0f0;
  width: 100vw;
  height: 100vh;
  padding: 1em;
  & > * {
    margin: 0.5em;
  }
`
