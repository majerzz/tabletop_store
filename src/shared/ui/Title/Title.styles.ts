import { css } from '@emotion/css'
import { EnumTitleSize } from 'shared/ui/Title/Title.types'

const calculateSize = (size: EnumTitleSize): string => {
  switch (size) {
    case EnumTitleSize.MD:
      return '20px'
    case EnumTitleSize.LG:
      return '40px'
  }
}

export const styles = {
  title: (size: EnumTitleSize) => css`
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: ${calculateSize(size)};
    color: #fff;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
    gap: 0.8em;
    font-weight: 500;
  `
}
