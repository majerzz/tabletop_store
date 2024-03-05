import { css } from '@emotion/css'

export const styles = {
  cartGameCard: css`
    box-sizing: border-box;
    overflow: auto;
    display: flex;
    flex-wrap: nowrap;
    border-radius: 5px;
    background-color: rgba(0,0,0,0.1);
    width: 600px;
    max-width: 100%;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  `,
  cartGameImage: css`
    border-radius: 1%;
    object-fit: cover;
    width: 80px;
    height: 80px;
  `,
  cartGameLeft: css`
    display: flex;
    gap: 1vw;
  `,
  cartGameText: css`
    overflow: hidden;
    max-width: 350px;
    text-overflow: ellipsis;
    white-space: break-spaces;
  `,
  cartGameButton: css`
    justify-self: flex-start;
  `
}
