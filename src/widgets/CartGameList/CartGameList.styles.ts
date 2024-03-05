import { css } from '@emotion/css'

export const styles = {
  cartGameList: css`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 8px;
    float: none;
    box-sizing: border-box;
    max-width: 100%;
  `,
  cartGameItem: css`
    border: 1px solid black;
  `
}
