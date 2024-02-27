import { css } from '@emotion/css'

export const styles = {
  gamePageCard: css`
    display: flex;
    flex-direction: row;
    max-width: 100%;
    gap: 10%;
    font-size: 2rem;
    padding: 4% 4%;
    margin: 0 5% 2% 5%;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  `,
  gamePageCardImg: css`
    max-height: 30vw;
  `,
  gamePageCardText: css`
    display:flex;
    color: white;
    text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);
    flex-direction: column;
    gap: 10%;
  `
}
