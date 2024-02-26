import { css } from '@emotion/css'

export const styles = {
  logo: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    width: fit-content;
    flex-wrap: wrap;
    filter: brightness(0) invert(1);
    padding: 10px;
  `,
  logoText: css`
    display: flex;
    flex-direction: column;
    color: white;
  `,
  logoImg: css`
    height: 100px;
  `
}
