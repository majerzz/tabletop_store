import { css } from '@emotion/css'

export const styles = {
  gamePageCard: css`
    display: flex;
    flex-direction: row;
    justify-content:center;
    flex-wrap: wrap;
    max-width: 100%;
    gap: 40px;
    font-size: 2rem;
    padding: 4% 4%;
    margin: 0 5% 2% 5%;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  `,
  gamePageCardImg: css`
    align-self: center;
    width: 400px;
    max-width: 100%;
  `,
  gamePageCardText: css`
    display: inline-flex;
    flex-wrap: wrap;
    color: white;
    max-width: calc(75vw - 400px);
    text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);
    flex-direction: column;
    gap: 20px;
    @media (max-width: 1100px){
      max-width: 100%;
    }
  `
}
