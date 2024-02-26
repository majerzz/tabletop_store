import { css } from '@emotion/css'
import { EnumTitleSize } from 'shared/ui/TitleAndContent/TitleAndContent'

const calculateSize = (size: EnumTitleSize): string => {
  switch (size) {
    case EnumTitleSize.mainPage:
      return '0.5em'
    case EnumTitleSize.gamePage:
      return '0.8em'
  }
}

// TODO вынести отдельно в UI content, здесь оставить только title
export const styles = {
  titleAndContent: (size: EnumTitleSize) => css`
    display: flex;
    flex-direction: column;
    font-size: ${calculateSize(size)};
    color: #fff;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
    gap: 0.8em;
  `,
  title: css`
    font-weight: 500;
    font-size: 150%; 
  `,
  content: css`
    font-weight: 400;
  `
}
