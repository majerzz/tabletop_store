import { css } from '@emotion/css'

export const styles = {
  buttonAddRemove: css`
    display: inline-flex;
    justify-content: space-between;
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
  `,
  buttonAddRemoveElement: css`
    cursor: pointer;
    &:hover {
      scale: 1.2;
    }
  `
}
