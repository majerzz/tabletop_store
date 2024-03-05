import { css } from '@emotion/css'

export const styles = {
  gamePageCardImg: css`
    align-self: center;
    width: 400px;
    max-width: 100%;
  `,
  arrowLeft: css`
    width: 20px;
    background-image: url('src/entities/ImageSlider/img/arrow.png');
    &:hover {
      cursor: pointer;
    }
  `
}
