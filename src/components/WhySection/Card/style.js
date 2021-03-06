import { css } from "@emotion/core"

export const container = css`
  max-width: 20.4rem;
`
export const dotLineInvert = css`
  padding-left: 0.73rem;
`
export const dotLineStyle = theme => css`
  margin: 0;
  color: ${theme.colors.white};
  line-height: 1.5rem;
  letter-spacing: 1.12px;
`
export const dotLineTitle = css`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 1.12px;
  line-height: 2.6rem;
`
export const dotLineSubTitle = css`
  font-size: 1.2rem;
  text-transform: none;
  letter-spacing: 1.14px;
  line-height: 2.4rem;
`
export const dotLineContainer = css`
  margin: 1rem 0;
`
