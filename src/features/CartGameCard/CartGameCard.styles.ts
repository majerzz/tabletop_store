import { css } from '@emotion/css'

export const styles = {
  cartGameCard: css`
    display: flex;
    flex-wrap: wrap;
    border-radius: 5px;
    background-color: rgba(0,0,0,0.1);
    width: 100%;
    padding: 1vh;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  `,
  cartGameImage: css`
    border-radius: 1%;
    height: 10vh;
    width: 10vw;
    width: auto;
  `,
  cartGameLeft: css`
    display: flex;
    gap: 1vw;
  `
}
