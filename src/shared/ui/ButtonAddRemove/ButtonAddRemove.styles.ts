import { css } from '@emotion/css'

export const styles = {
  buttonAddRemove: css`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem;
    color: black;
    border-radius: 6px;
    min-width: 100px;
    max-width: 150px;
    height: fit-content;
    background-color: white;
    border: none;
    user-select: none;
    font-size: 1.2rem;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
    @media (max-width: 380px) {
      min-width: 50px; 
      font-size: 1rem;
    }
  `,
  buttonAddRemoveElement: css`
  padding: 3px 3px;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
    cursor: pointer;
    &:hover {
      scale: 1.2;
    }
  `
}
