import { css } from '@emotion/css'
import { Colors } from 'shared/constants'

export const styles = {
  header: css`
    display: flex;
    max-width: 100%;
    padding: 10px 0px;
    margin-bottom: 4vh;
    background-color: ${Colors.SECONDARY};
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  `
}
