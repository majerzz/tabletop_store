import { css } from '@emotion/css'

export const styles = {
  gameCard: css`
    background-color: rgba(0,0,0,0.1);
    border-radius: 5%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 2vh;
    float: none;
    padding: 20px 20px;
    width: fit-content;
    max-height: 50vh;
    font-weight: bold;
    color: #FFF;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    &:hover {
      scale: 1.02;
    }
  `,
  img: css`
    border-radius: 1%;
    height: 25vh;
    width: 25vh;
    object-fit: cover;
  `
}
