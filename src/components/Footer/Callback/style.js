import { css } from "@emotion/core"

export const message = theme => css`
  font-size: 1.5rem;
  line-height: 1.27;
  letter-spacing: 0.19px;
  color: ${theme.colors.purples.normal};
  margin-bottom: 1.8rem;
  margin-top: 0;
`

export const inputContainer = css`
  margin-bottom: 1.8rem;
`

export const textInput = css`
  width: stretch;
`
