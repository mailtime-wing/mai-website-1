import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import {
  container,
  titleStyle,
  title1,
  title2,
  subTitleStyle,
  subTitle1,
  subTitle2,
  titleContainer,
  subTitleContainer,
  button,
} from "./style"
import FreeTrialButton from "@/components/FreeTrialButton"

const ConnectingTheDots = () => {
  return (
    <div css={container}>
      <div css={titleContainer}>
        <p css={theme => [titleStyle(theme), title1(theme)]}>
          <FormattedMessage
            id="connectingTheDotsWithAlternativeData"
            defaultMessage="Connecting the dots with <p>ALTERNATIVE DATA</p>"
            values={{
              p: str => (
                <p css={theme => [titleStyle(theme), title2(theme)]}>{str}</p>
              ),
            }}
          />
        </p>
      </div>
      <div css={subTitleContainer}>
        <p css={theme => [subTitleStyle, subTitle1(theme)]}>
          <FormattedMessage
            id="providesActionableConsumer"
            defaultMessage={`A <span>Data Dashboard</span> that provides actionable consumer insights based on transactional data.`}
            values={{
              span: str => (
                <span css={theme => [subTitleStyle, subTitle2(theme)]}>
                  {str}
                </span>
              ),
            }}
          />
        </p>
      </div>
      <FreeTrialButton css={button} />
    </div>
  )
}

export default ConnectingTheDots
