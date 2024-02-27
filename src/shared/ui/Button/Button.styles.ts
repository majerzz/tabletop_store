import { css } from '@emotion/css'
import { EnumSize } from 'shared/ui/Button/Button.types'

const calculateSize = (size: EnumSize): string => {
  switch (size) {
    case EnumSize.SM:
      return '0.9rem'
    case EnumSize.MD:
      return '1.2rem'
    case EnumSize.LG:
      return '1.4rem'
    default:
      return '1.5rem'
  }
}

export const styles = {
  button: (size: EnumSize) => css`
    display: inline-block;
    padding: ${calculateSize(size)};
    color: black;
    border-radius: 6px;
    background-color: white;
    border: none;
    user-select: none;
    font-size: ${calculateSize(size)};
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
    &:hover {
      cursor: pointer;
      background-color: #C0C0C0 ;
      transition: 200ms;
      scale: 1.05;
    }
  `
}
