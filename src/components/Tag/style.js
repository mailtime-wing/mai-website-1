import { css } from "@emotion/core"

export const tag = theme => css`
  height: fit-content;
  width: fit-content;
  background-color: ${theme.colors.greens.light};
  color: ${theme.colors.purples.normal};
  border-radius: 1.5rem;
  vertical-align: middle;
  font-weight: bold;
  text-decoration: none;
`
